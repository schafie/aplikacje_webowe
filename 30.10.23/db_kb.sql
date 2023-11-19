CREATE DATABASE IF NOT EXISTS node CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE node;

CREATE TABLE IF NOT EXISTS students (
    id INT NOT NULL,
    age INT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS subjects (
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    hoursAWeek INT NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS messages (
    content TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
);

INSERT INTO students (id, age, first_name, last_name, email)
VALUES
    (1, 22, 'Adam', 'Kowalski', 'adamkowalski@allmyfellas.com'),
    (2, 20, 'Alicja', 'Nowak', 'alicjanowak@allmyfellas.com'),
    (3, 23, 'Michał', 'Wójcik', 'michalwojcik@allmyfellas.com'),
    (4, 21, 'Katarzyna', 'Kowalczyk', 'katarzynakowalczyk@allmyfellas.com'),
    (5, 24, 'Piotr', 'Lewandowski', 'piotrlewandowski@allmyfellas.com'),
    (6, 19, 'Anna', 'Stępień', 'annastepien@allmyfellas.com'),
    (7, 25, 'Marcin', 'Zieliński', 'marcinzielinski@allmyfellas.com'),
    (8, 18, 'Magdalena', 'Dąbrowska', 'magdalenadabrowska@allmyfellas.com'),
    (9, 26, 'Łukasz', 'Szymański', 'lukaszszymanski@allmyfellas.com'),
    (10, 22, 'Karolina', 'Wilk', 'karolinawilk@allmyfellas.com');

INSERT INTO subjects (id, name, hoursAWeek) VALUES
    (1, 'Mathematics', 5),
    (2, 'English', 4),
    (3, 'Geography', 2),
    (4, 'Computer Science', 1),
    (5, 'History', 3),
    (6, 'Physical Education', 1),
    (7, 'Biology', 4),
    (8, 'Chemistry', 1);
