-- Add migration script here
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  Name varchar(50) NOT NULL,
  Password varchar(255) NOT NULL
);
