

Create Database wishes_Db;
Use wishes_Db

-- Inside of that database, make a table called "wishes" which will have a wish column and an id column. 
-- The id will be automatically incremented while also being the primary key.

create table wishes(
    id integer auto_increment primary key,
    wish varchar (255)
    
)