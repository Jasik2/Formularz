CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    birthDate DATE NOT NULL,
    email VARCHAR(50),
    phone VARCHAR(15),
    province VARCHAR(30),
    gender VARCHAR(10),
    newsletter TINYINT(1)
);
