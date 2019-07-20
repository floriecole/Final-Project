-- Create and use books_db
DROP DATABASE IF EXISTS books_db;

CREATE DATABASE books_db;
USE books_db;
select * from books_data;

-- TABLE IF EXISTS books_data;

-- CREATE TABLE books_data (
    -- Id int NOT NULL AUTO_INCREMENT,
    -- ISBN varchar(255) NOT NULL,
    -- Title varchar(255),
    -- Author varchar(255),
    -- Year-Of-Publication int,
   -- Publisher varchar(255),
    -- image_url varchar(255),
    -- book_id int, 
    -- genres varchar(255),
    -- User-ID int,
   -- Book-Rating decimal,
   -- birthplace varchar(255),
   -- PRIMARY KEY (Id)
);