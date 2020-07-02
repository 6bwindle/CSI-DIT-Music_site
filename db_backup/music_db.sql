-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2020 at 02:14 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `music_csi`
--

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

CREATE TABLE IF NOT EXISTS `artist` (
  `pk` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `artist` varchar(19) NOT NULL,
  PRIMARY KEY (`pk`),
  UNIQUE KEY `pk` (`pk`),
  KEY `pk_2` (`pk`),
  KEY `pk_3` (`pk`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=56 ;

--
-- Dumping data for table `artist`
--

INSERT INTO `artist` (`pk`, `artist`) VALUES
(1, '6ix9ine'),
(2, 'A7S'),
(3, 'Anuel AA'),
(4, 'Ariana Grande'),
(5, 'Arizona Zervas'),
(6, 'Bad Bunny'),
(7, 'beabadoobee'),
(8, 'BENEE'),
(9, 'Beyonce'),
(10, 'Billie Eilish'),
(11, 'Black Eyed Peas'),
(12, 'BLACKPINK'),
(13, 'Camila Cabello'),
(14, 'DaBaby'),
(15, 'Doja Cat'),
(16, 'Don Toliver'),
(17, 'Drake'),
(18, 'Dua Lipa'),
(19, 'Emilee'),
(20, 'Future'),
(21, 'Gus Dapperton'),
(22, 'Halsey'),
(23, 'Harry Styles'),
(24, 'Imanbek'),
(25, 'Jack Harlow'),
(26, 'Jowell and Randy'),
(27, 'Justin Bieber'),
(28, 'KAROL G'),
(29, 'Kygo'),
(30, 'Lady Gaga'),
(31, 'Lewis Capaldi'),
(32, 'Lil Mosey'),
(33, 'Maroon 5'),
(34, 'Marshmello'),
(35, 'Megan Thee Stallion'),
(36, 'Melanie Martinez'),
(37, 'Nicki Minaj'),
(38, 'OneRepublic'),
(39, 'Ozuna'),
(40, 'Post Malone'),
(41, 'Powfu'),
(42, 'Quavo'),
(43, 'Roddy Ricch'),
(44, 'ROSALÍA'),
(45, 'SAINt JHN'),
(46, 'Shawn Mendes'),
(47, 'StaySolidRocky'),
(48, 'Surf Mesa'),
(49, 'Surfaces'),
(50, 'THE SCOTTS'),
(51, 'The Weeknd'),
(52, 'Tones And I'),
(53, 'Topic'),
(54, 'Travis Scott'),
(55, 'Trevor Daniel');

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE IF NOT EXISTS `genre` (
  `pk` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `genre` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`pk`),
  UNIQUE KEY `id` (`pk`),
  KEY `id_2` (`pk`),
  KEY `pk` (`pk`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`pk`, `genre`) VALUES
(1, 'Synthwave'),
(2, 'Alternative'),
(3, 'Indie'),
(4, 'Electronic'),
(5, 'Dance'),
(6, 'Rap'),
(7, 'Hip-Hop'),
(8, 'Pop'),
(9, 'R&B'),
(10, 'Reggaeton'),
(11, 'Rock');

-- --------------------------------------------------------

--
-- Table structure for table `song`
--

CREATE TABLE IF NOT EXISTS `song` (
  `pk` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `song_name` varchar(52) NOT NULL,
  `file_name` varchar(36) NOT NULL,
  PRIMARY KEY (`pk`),
  UNIQUE KEY `pk` (`pk`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=51 ;

--
-- Dumping data for table `song`
--

INSERT INTO `song` (`pk`, `song_name`, `file_name`) VALUES
(1, 'ROCKSTAR (feat. Roddy Ricch)', 'ROCKSTAR.mp3'),
(2, 'Blinding Lights', 'Blinding Lights.mp3'),
(3, 'Roses - Imanbek Remix', 'Roses (Imanbek Remix).mp3'),
(4, 'Rain On Me (with Ariana Grande)', 'Rain On Me.mp3'),
(5, 'Toosie Slide', 'Toosie Slide.mp3'),
(6, 'death bed (coffee for your head)', 'death bed (coffee for your head).mp3'),
(7, 'Don''t Start Now', 'Don''t Start Now.mp3'),
(8, 'Dance Monkey', 'Dance Monkey.mp3'),
(9, 'THE SCOTTS', 'THE SCOTTS.mp3'),
(10, 'ily (i love you baby) (feat. Emilee)', 'ily (i love you baby).mp3'),
(11, 'Blueberry Faygo', 'Blueberry Faygo.mp3'),
(12, 'Break My Heart', 'Break My Heart.mp3'),
(13, 'The Box', 'The Box.mp3'),
(14, 'Party Girl', 'Party Girl.mp3'),
(15, 'Supalonely', 'Supalonely.mp3'),
(16, 'Stuck with U (with Justin Bieber)', 'Stuck with U.mp3'),
(17, 'Sour Candy (with BLACKPINK)', 'Sour Candy.mp3'),
(18, 'GOOBA', 'GOOBA.mp3'),
(19, 'Watermelon Sugar', 'Watermelon Sugar.mp3'),
(20, 'TKN (feat. Travis Scott)', 'TKN.mp3'),
(21, 'Intentions (feat. Quavo)', 'Intentions.mp3'),
(22, 'Someone You Loved', 'Someone You Loved.mp3'),
(23, 'Breaking Me', 'Breaking Me.mp3'),
(24, 'Falling', 'Falling.mp3'),
(25, 'Savage Remix (feat. Beyonce)', 'Savage Remix.mp3'),
(26, 'Sunday Best', 'Sunday Best.mp3'),
(27, 'Say So', 'Say So.mp3'),
(28, 'Circles', 'Circles.mp3'),
(29, 'WHATS POPPIN', 'WHATS POPPIN.mp3'),
(30, 'goosebumps', 'goosebumps.mp3'),
(31, 'Play Date', 'Play Date.mp3'),
(32, 'ROXANNE', 'ROXANNE.mp3'),
(33, 'Tusa', 'Tusa.mp3'),
(34, 'Safaera', 'Safaera.mp3'),
(35, 'MAMACITA', 'MAMACITA.mp3'),
(36, 'Yo Perreo Sola', 'Yo Perreo Sola.mp3'),
(37, 'Life Is Good (feat. Drake)', 'Life Is Good.mp3'),
(38, 'Be Kind (with Halsey)', 'Be Kind.mp3'),
(39, 'Lose Somebody', 'Lose Somebody.mp3'),
(40, 'Boss Bitch', 'Boss Bitch.mp3'),
(41, 'Hasta Que Dios Diga', 'Hasta Que Dios Diga.mp3'),
(42, 'In Your Eyes', 'In Your Eyes.mp3'),
(43, 'HIGHEST IN THE ROOM', 'HIGHEST IN THE ROOM.mp3'),
(44, 'Before You Go', 'Before You Go.mp3'),
(45, 'SICKO MODE', 'SICKO MODE.mp3'),
(46, 'Memories', 'Memories.mp3'),
(47, 'Adore You', 'Adore You.mp3'),
(48, 'After Party', 'After Party.mp3'),
(49, 'Senorita', 'Senorita.mp3'),
(50, 'bad guy', 'bad guy.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `song_artist`
--

CREATE TABLE IF NOT EXISTS `song_artist` (
  `song_fk` tinyint(3) unsigned NOT NULL,
  `artist_fk` tinyint(3) unsigned NOT NULL,
  KEY `song_fk` (`song_fk`),
  KEY `artist_fk` (`artist_fk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `song_artist`
--

INSERT INTO `song_artist` (`song_fk`, `artist_fk`) VALUES
(1, 14),
(2, 51),
(3, 45),
(4, 30),
(5, 17),
(6, 41),
(7, 18),
(8, 52),
(9, 50),
(10, 48),
(11, 32),
(12, 18),
(13, 43),
(14, 47),
(15, 8),
(16, 4),
(17, 30),
(18, 1),
(19, 23),
(20, 44),
(21, 27),
(22, 31),
(23, 53),
(24, 55),
(25, 35),
(26, 49),
(27, 15),
(28, 40),
(29, 25),
(30, 54),
(31, 36),
(32, 5),
(33, 28),
(34, 6),
(35, 11),
(36, 6),
(37, 20),
(38, 34),
(39, 29),
(40, 15),
(41, 3),
(42, 51),
(43, 54),
(44, 31),
(45, 54),
(46, 33),
(47, 23),
(48, 16),
(49, 46),
(50, 10),
(1, 43),
(1, 43),
(3, 24),
(4, 4),
(6, 7),
(9, 54),
(9, 28),
(10, 19),
(15, 21),
(16, 27),
(17, 12),
(20, 54),
(21, 42),
(23, 2),
(25, 9),
(33, 37),
(34, 25),
(34, 36),
(35, 39),
(35, 24),
(37, 17),
(38, 22),
(39, 38),
(41, 6),
(49, 13);

-- --------------------------------------------------------

--
-- Table structure for table `song_genre`
--

CREATE TABLE IF NOT EXISTS `song_genre` (
  `song_fk` tinyint(3) unsigned NOT NULL,
  `genre_fk` tinyint(3) unsigned NOT NULL,
  KEY `song_fk` (`song_fk`),
  KEY `genre_fk` (`genre_fk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `song_genre`
--

INSERT INTO `song_genre` (`song_fk`, `genre_fk`) VALUES
(1, 7),
(1, 6),
(2, 1),
(2, 9),
(3, 5),
(3, 4),
(4, 8),
(5, 7),
(5, 6),
(6, 7),
(6, 6),
(7, 8),
(8, 2),
(8, 3),
(9, 7),
(9, 6),
(10, 5),
(10, 4),
(11, 7),
(11, 6),
(12, 8),
(13, 7),
(13, 6),
(14, 7),
(14, 6),
(15, 2),
(15, 3),
(16, 8),
(17, 8),
(18, 7),
(18, 6),
(19, 8),
(20, 7),
(20, 6),
(21, 8),
(22, 5),
(22, 4),
(23, 5),
(23, 4),
(24, 8),
(25, 7),
(25, 6),
(26, 9),
(26, 8),
(27, 9),
(28, 7),
(28, 6),
(29, 7),
(29, 6),
(30, 7),
(30, 6),
(31, 2),
(31, 3),
(32, 7),
(32, 6),
(33, 8),
(34, 10),
(35, 7),
(35, 6),
(36, 10),
(37, 7),
(37, 6),
(38, 5),
(38, 4),
(39, 5),
(39, 4),
(40, 7),
(40, 6),
(41, 8),
(42, 11),
(43, 7),
(43, 6),
(44, 2),
(44, 3),
(45, 7),
(45, 6),
(46, 8),
(47, 8),
(48, 9),
(48, 6),
(49, 8),
(50, 2),
(50, 3);

-- --------------------------------------------------------

--
-- Table structure for table `song_genre_update`
--

CREATE TABLE IF NOT EXISTS `song_genre_update` (
  `song_fk` tinyint(3) unsigned NOT NULL,
  `genre_fk` tinyint(3) unsigned NOT NULL,
  KEY `song_fk` (`song_fk`),
  KEY `genre_fk` (`genre_fk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `song_genre_update`
--

INSERT INTO `song_genre_update` (`song_fk`, `genre_fk`) VALUES
(1, 7),
(1, 6),
(2, 12),
(2, 9),
(3, 5),
(3, 4),
(4, 8),
(5, 7),
(5, 6),
(6, 7),
(6, 6),
(7, 8),
(8, 2),
(8, 3),
(9, 7),
(9, 6),
(10, 5),
(10, 4),
(11, 7),
(11, 6),
(12, 8),
(13, 7),
(13, 6),
(14, 7),
(14, 6),
(15, 2),
(15, 3),
(16, 8),
(17, 8),
(18, 7),
(18, 6),
(19, 8),
(20, 7),
(20, 6),
(21, 8),
(22, 5),
(22, 4),
(23, 5),
(23, 4),
(24, 8),
(25, 7),
(25, 6),
(26, 9),
(26, 8),
(27, 9),
(28, 7),
(28, 6),
(29, 7),
(29, 6),
(30, 7),
(30, 6),
(31, 2),
(31, 3),
(32, 7),
(32, 6),
(33, 8),
(34, 10),
(35, 7),
(35, 6),
(36, 10),
(37, 7),
(37, 6),
(38, 5),
(38, 4),
(39, 5),
(39, 4),
(40, 7),
(40, 6),
(41, 8),
(42, 11),
(43, 7),
(43, 6),
(44, 2),
(44, 3),
(45, 7),
(45, 6),
(46, 8),
(47, 8),
(48, 9),
(48, 6),
(49, 8),
(50, 2),
(50, 3);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `song_artist`
--
ALTER TABLE `song_artist`
  ADD CONSTRAINT `song_artist_ibfk_1` FOREIGN KEY (`song_fk`) REFERENCES `song` (`pk`),
  ADD CONSTRAINT `song_artist_ibfk_2` FOREIGN KEY (`artist_fk`) REFERENCES `artist` (`pk`);

--
-- Constraints for table `song_genre`
--
ALTER TABLE `song_genre`
  ADD CONSTRAINT `song_genre_ibfk_1` FOREIGN KEY (`song_fk`) REFERENCES `song` (`pk`),
  ADD CONSTRAINT `song_genre_ibfk_2` FOREIGN KEY (`genre_fk`) REFERENCES `genre` (`pk`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
