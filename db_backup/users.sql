-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2020 at 01:43 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` smallint(2) NOT NULL AUTO_INCREMENT,
  `uname` varchar(25) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `password` char(60) NOT NULL,
  `user_rights` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uname`, `password`, `user_rights`) VALUES
(1, 'Graham', '$2y$10$rIn2Q7pqIWI04OECpXdIeuZMh2.Yc5mXZzqLqIiSKDGT6Hjzo.1F.', 1),
(2, 'Admin', '$2y$10$nNA9e8Z5/DMK0vElzsAqceOoNzZv3BHGRRdAhVrQZmheiIhllDM86', 1),
(3, 'Test', '$2y$10$PfcRltRRDj0ESA/zWJSSxu.ak7QDohdyqsa5P40pqd8Vs8D/dQdNi', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
