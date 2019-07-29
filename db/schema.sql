DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INTEGER(100) NOT NULL AUTO_INCREMENT,
    burger_type VARCHAR(50),
    devoured BOOLEAN,
    
    PRIMARY KEY(id)
);