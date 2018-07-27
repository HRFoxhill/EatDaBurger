/* Create and use the burgers db */
DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;


/* Create a table for all your star wars characters */
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
    `customer` VARCHAR (255) NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` boolean default false,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);

SELECT * FROM burgers;