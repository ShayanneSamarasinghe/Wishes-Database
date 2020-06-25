require ("dotenv").config()

const mysql = require("mysql")
const express = require ("express")
const exphbs  = require('express-handlebars')

const app = express();

const port = 3000

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}
  
const db = new Database({
    host: "localhost",
    port: port,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    insecureAuth : true
});

// GET ROUTE //
app.get("/", function (req, res){
    res.send("I am a get request")
    res.render('wishes', function (err, html) {
        // ...
      })
})

// POST ROUTE //
app.post('/', function (req, res) {
    res.send('I am a post request')
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

