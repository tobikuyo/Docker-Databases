DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(50) NOT NULL UNIQUE,
    location varchar(50) NOT NULL
);