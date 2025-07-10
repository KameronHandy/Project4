Question/Answer Webpage

# Overview

This is a simple Questions and Answers web application where users can log in, Create Questions and Answers, And give user feedback. This project uses React for Frontend and Backend development.


# Features

* User login
* Logging Questions/Answers
* Multiple Categories
* Ability to Recieve User Input


        # User Table
        CREATE TABLE `user_information` (
          `user_id` int NOT NULL AUTO_INCREMENT,
          `Username` varchar(45) NOT NULL,
          `user_password` varchar(45) NOT NULL,
          PRIMARY KEY (`user_id`),
          UNIQUE KEY `user_id_UNIQUE` (`user_id`)
        ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        #User Table

# Categories
      
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



# ContactUs Table
    
    CREATE TABLE `contactus` (
      `idContactUs` int NOT NULL AUTO_INCREMENT,
      `Email` varchar(45) DEFAULT NULL,
      `UserThoughts` varchar(500) DEFAULT NULL,
      PRIMARY KEY (`idContactUs`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Screen Shots
![Screenshot 2025-07-09 142050](https://github.com/user-attachments/assets/0febde55-2c3f-4df0-90d1-b47159d6b806)

![Screenshot 2025-07-09 142112](https://github.com/user-attachments/assets/14a6395b-9b30-450a-978b-fc86630fa843)
![Screenshot 2025-07-09 142130](https://github.com/user-attachments/assets/343c2ac1-feff-46e2-8e6c-b41081191c2b)
![Screenshot 2025-07-09 142146](https://github.com/user-attachments/assets/8b12a102-f0a5-4881-a8d0-1815b0397675)

![Screenshot 2025-07-09 142205](https://github.com/user-attachments/assets/09df3b59-3cb4-4aa9-8eb1-c9a050d53688)

![Screenshot 2025-07-09 142218](https://github.com/user-attachments/assets/07b61170-5b08-488c-a71a-262346169760)


# Technologies Used

    React.js
    React Router
    Bootstrap
    Axios
    Express.js
    Node.js

# Future Improvements

Incorporating A auto-refresh so the User doesn't have to refresh the page manually to see the updated Question/Answer.

Possibly adding Radio buttons for a multiple Choice selection

Including an optional timer for if you wanted to use the Question/Answer Live

# Author
https://www.linkedin.com/in/kameron-handy-104ab268/
