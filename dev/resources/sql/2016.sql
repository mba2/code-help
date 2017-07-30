--  SET foreign_key_checks = 0;

CREATE DATABASE IF NOT EXISTS`u845380189_sint`;
USE `u845380189_sint`;

DROP TABLE IF EXISTS `u845380189_sint`.`usuario`;
CREATE TABLE `u845380189_sint`.`usuario`(
	usuID		INT AUTO_INCREMENT,
    usuNome     VARCHAR(255) NOT NULL,
    usuSenha   VARCHAR(16) NOT NULL,
    PRIMARY KEY (usuID)
);

DROP TABLE IF EXISTS `u845380189_sint`.`language`;
CREATE TABLE language(
  languageID TINYINT(3) AUTO_INCREMENT NOT NULL,
  languageDesc VARCHAR(20) NOT NULL,
  PRIMARY KEY(languageID)
);

DROP TABLE IF EXISTS `u845380189_sint`.`syntax`;
CREATE TABLE `u845380189_sint`.`syntax`(
  syntaxID INT AUTO_INCREMENT NOT NULL,
  languageID TINYINT(3) NOT NULL,
  syntaxBody VARCHAR(255) NOT NULL,
  syntaxDesc TEXT NULL,
  syntaxNotes TEXT NULL,
  PRIMARY KEY(syntaxID),
  FOREIGN KEY(languageID) references language(languageID)
);


DROP TABLE IF EXISTS example;
CREATE TABLE example(
  exampleID INT AUTO_INCREMENT NOT NULL,
  syntaxID INT NOT NULL,
  exampleBody TEXT NOT NULL,
  -- isVisible BOOLEAN DEFAULT TRUE,
  PRIMARY KEY(exampleID),
  FOREIGN KEY(syntaxID) references syntax(syntaxID)
);

INSERT INTO language VALUES
(NULL,'Java'),
(NULL,'PHP');

INSERT INTO `u845380189_sint`.`syntax` VALUES
(NULL,1,'datatype varName = value','Create a variable','ClassName varName = new ClassName()'),
(NULL,1,'if(condition){code case true}else{code case false}','normal if/else',''),
(NULL,2,'$varName = value','Create a variable',NULL);
 
SELECT * FROM `u845380189_sint`.`usuario`;
SELECT * FROM `u845380189_sint`.`language`;
SELECT * FROM `u845380189_sint`.`syntax`;	