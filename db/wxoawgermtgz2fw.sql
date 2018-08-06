/* Create and use the burgers db */
DROP DATABASE IF EXISTS `wxoawgerm1tgz2fw`;
CREATE DATABASE `wxoawgerm1tgz2fw`;
USE `wxoawgerm1tgz2fw`;


/* Create a table for all your star wars characters */
CREATE TABLE `burgers` (
	`id` Int AUTO_INCREMENT NOT NULL,
    `customer` VARCHAR (255) NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` boolean default false,
    createdAt Timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);

SELECT * FROM burgers;
