
CREATE TABLE `user_information` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(45) NOT NULL,
  `user_password` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `categories` (
  `idcategories` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idcategories`),
  CONSTRAINT `mathFK` FOREIGN KEY (`idcategories`) REFERENCES `math` (`idmath`),
  CONSTRAINT `musicFK` FOREIGN KEY (`idcategories`) REFERENCES `music` (`idmusic`),
  CONSTRAINT `sportsFK` FOREIGN KEY (`idcategories`) REFERENCES `sports` (`idsports`),
  CONSTRAINT `theatreFK` FOREIGN KEY (`idcategories`) REFERENCES `theatre` (`idTheatre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `math` (
  `idmath` int NOT NULL AUTO_INCREMENT,
  `Q` varchar(80) NOT NULL,
  `A` varchar(80) NOT NULL,
  PRIMARY KEY (`idmath`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `music` (
  `idmusic` int NOT NULL AUTO_INCREMENT,
  `Q` varchar(80) NOT NULL,
  `A` varchar(80) NOT NULL,
  PRIMARY KEY (`idmusic`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `sports` (
  `idsports` int NOT NULL AUTO_INCREMENT,
  `Q` varchar(80) NOT NULL,
  `A` varchar(80) NOT NULL,
  PRIMARY KEY (`idsports`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `theatre` (
  `idTheatre` int NOT NULL AUTO_INCREMENT,
  `Q` varchar(80) NOT NULL,
  `A` varchar(80) NOT NULL,
  PRIMARY KEY (`idTheatre`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `contactus` (
  `idContactUs` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(45) DEFAULT NULL,
  `UserThoughts` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idContactUs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
