/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 5.7.32-0ubuntu0.18.04.1 : Database - blogs
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `blogs` */

DROP TABLE IF EXISTS `blogs`;

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `isActive` enum('0','1') DEFAULT '1' COMMENT '0>Inactive,1->active',
  `createdby` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  KEY `createdby` (`createdby`),
  CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`catId`),
  CONSTRAINT `blogs_ibfk_2` FOREIGN KEY (`createdby`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `blogs` */

insert  into `blogs`(`id`,`title`,`description`,`image`,`categoryId`,`isActive`,`createdby`) values 
(1,'Compute Fundamentals','Delhi  Crime','d24b3e03401b9a01ae3b745f177f674f1607356262114.jpeg',1,'1',1),
(2,'tittle','description','d24b3e03401b9a01ae3b745f177f674f1607356262114.jpeg',NULL,'1',NULL),
(3,'tittle','description','b0addf329b8c183736b573393c8623871607356304391.jpeg',1,'1',NULL),
(5,'tittle','description','bac56244fbfbf0a4cb81a8bf18898ba11607356320477.jpeg',1,'1',NULL),
(6,'tittle','description','0a5b6c843fbb6dcbf721d3ba55e8117e1607362692877.jpeg',1,'1',NULL),
(7,'tittle','description','be1377241391e2a9dcc626d527aa5fc61607362719853.jpeg',1,'1',NULL),
(8,'tittle','description','03be3bcb9a48dbc1cc264703d4080ea31607362752150.jpeg',1,'1',NULL),
(9,'tittle','description','b2a180919113aab39342237f5e686f1d1607362815481.jpeg',1,'1',NULL),
(10,'tittle','description','4594ebc71cc77d913f9173f443dc256e1607362846963.jpeg',1,'1',NULL),
(11,'tittle','description','65bbca9b278b3f8bf8fb0ef6893a7f771607362876757.jpeg',1,'1',1);

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `catId` int(11) NOT NULL AUTO_INCREMENT,
  `cateName` varchar(50) DEFAULT NULL,
  `isActive` enum('1','0') DEFAULT '1' COMMENT '0>Inactive,1->active',
  PRIMARY KEY (`catId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `category` */

insert  into `category`(`catId`,`cateName`,`isActive`) values 
(1,'Computer','1'),
(2,'admin@gmail.com21','1'),
(3,'admin@gmail.com211','1');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fName` varchar(50) DEFAULT NULL,
  `isActive` enum('0','1') DEFAULT '1' COMMENT '0>Inactive,1->active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`email`,`password`,`fName`,`isActive`) values 
(1,'admin@gmail.com','$2b$10$OvluAbgJTgQYZbyBEgSlxuR8HT2bnjHx85oYk.MKo8a44Ft3KyCMi','admin','1'),
(2,'admin@gmail.com1','$2b$10$sUInKz5NrUE0zHKsWFlj1ORn4Q.RfQZD0SFxwBQ8mo0SxE0zMSd1O','rajpal','1'),
(3,'admin@gmail.com2','$2b$10$iXytNKpaPSDaJnozipjjE.Xfl56iz5yIp3Jg4SckfbKB.qrpZN.fy','rajpal','1'),
(4,'admin@gmail.com21','$2b$10$KkPkotdoBiCAWiJQLTALF.qr46qddPyrVDCJrZzmgmWa1IV/Xylmy','rajpal','1'),
(5,NULL,NULL,NULL,'1');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
