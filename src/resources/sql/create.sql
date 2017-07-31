DROP DATABASE IF EXISTS CODE_HELP;
CREATE DATABASE CODE_HELP;
USE CODE_HELP;


DROP TABLE IF EXISTS users_CODE_HELP;
CREATE TABLE users_CODE_HELP(
  users_id    TINYINT(5) AUTO_INCREMENT NOT NULL,
  users_name  VARCHAR(40) NOT NULL,
  users_pass  VARCHAR(255) NOT NULL UNIQUE,
  users_nick  VARCHAR(20) NULL,
  users_email VARCHAR(100) NOT NULL UNIQUE,
  PRIMARY KEY(users_id)
);

INSERT INTO users_CODE_HELP VALUES
(NULL,'Mario Brusarosco', "Mario","123", "mariobrusarosco@gmail.com"),
(NULL,'Mario Brusarosco', "Marinho Mala","1234", "marinhomala@hotmail.com");


-- DROP TABLE IF EXISTS syntax;
-- CREATE TABLE syntax(
--   syntaxID INT AUTO_INCREMENT NOT NULL,
--   languageID TINYINT(3) NOT NULL,
--   syntaxBody VARCHAR(255) NOT NULL,
--   syntaxDesc TEXT NULL,
--   syntaxNotes TEXT NULL,
--   -- isVisible BOOLEAN DEFAULT TRUE,
--   PRIMARY KEY(syntaxID),
--   FOREIGN KEY(languageID) references language(languageID)
-- );

-- INSERT INTO syntax VALUES
-- (NULL,1,'datatype varName = value','Create a variable','ClassName varName = new ClassName()'),
-- (NULL,1,'if(condition){code case true}else{code case false}','normal if/else',''),
-- (NULL,2,'$varName = value','Create a variable',NULL);


-- DROP TABLE IF EXISTS example;
-- CREATE TABLE example(
--   exampleID INT AUTO_INCREMENT NOT NULL,
--   syntaxID INT NOT NULL,
--   exampleBody TEXT NOT NULL,
--   -- isVisible BOOLEAN DEFAULT TRUE,
--   PRIMARY KEY(exampleID),
--   FOREIGN KEY(syntaxID) references syntax(syntaxID)
-- );

-- INSERT INTO example VALUES
-- (NULL,1,'int myAge = 28;'),
-- (NULL,1,'Car newCar = new Car("ferrari");'),
-- (NULL,3,'$myName = "Mario";'),
-- (NULL,3,'$newCar = new Car("ferrari");');
