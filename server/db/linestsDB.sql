DROP DATABASE IF EXISTS linestsdb;
CREATE DATABASE linestsdb;

\c linestsdb;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR (355) UNIQUE NOT NULL,
  first_name VARCHAR (50) NULL,
  last_name VARCHAR (50) NULL,
  about TEXT NOT NULL,
  address_line VARCHAR (355) NOT NULL,
  city VARCHAR (50) NOT NULL,
  state VARCHAR (50) NOT NULL,
  zip_code INTEGER NOT NULL,
  password_digest VARCHAR NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NULL
);
INSERT INTO users (username, first_name, last_name, password_digest, created_at)
  VALUES ('deborahsmith@gmail.com', 'Deborah', 'Smith', '$2a$10$Ysv6qZ9ljZ4qj7pdW3GwVetAknD1iGA2pDyTWuBbzl8UQOSpgYpYe', now()),
  ('susantan@ac.c4q.nyc', 'Susan' , 'Tan', '$2a$10$ZCQadMInPNK3QU5biYHXYOMmzuKWm/5A1vKF2e2HF.0f4wNoxLNQS', now()), 
  ('johnlopez@gmail.com', 'John' ,'Lopez', '$2a$10$HnCK2MWMEvGpRXm5vifa5.KY5vc8V1963SPbwJThp/1FEU3B.CUSq', now()),
  ('ivanmendoza@ac.c4q.nyc', 'Ivan', 'Mendoza', '$2a$10$3gU0o/yA.wn6zo9TxeTfbOVshm9jrA0O0WkkSi5ftBjGqa7sVcxlu', now());

