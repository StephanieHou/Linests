DROP DATABASE IF EXISTS linestsdb;
CREATE DATABASE linestsdb;

\c linestsdb;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR (355) UNIQUE NOT NULL,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  about TEXT NOT NULL,
  gender TEXT NOT NULL,
  education TEXT NOT NULL,
  birthmonth TEXT NOT NULL,
  birthdate INTEGER NOT NULL,
  birthyear INTEGER NOT NULL,
  address_line VARCHAR (355) NOT NULL,
  city VARCHAR (50) NOT NULL,
  state VARCHAR (50) NOT NULL,
  zip_code INTEGER NOT NULL,
  password_digest VARCHAR NOT NULL,
  photo TEXT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NULL
);

INSERT INTO users (username, first_name, last_name, about, gender, education, birthmonth, birthdate, birthyear, address_line, city, state, zip_code, password_digest, created_at)
  VALUES ('deborahsmith@gmail.com', 'Deborah', 'Smith', 'A photographer who loves her dogs and looking to have doggy dates', 'Female','Laguardia College','Jan', 1, 1991, '140-34 65ave','New York', 'New York', 10001, '$2a$10$Ysv6qZ9ljZ4qj7pdW3GwVetAknD1iGA2pDyTWuBbzl8UQOSpgYpYe', now()),
  ('susantan@ac.c4q.nyc', 'Susan' , 'Tan', 'A devleoper who is looking for new opportunities and new friends', 'Female','Binghamton University','May', 7, 1993, '140-34 65ave','New York', 'New York', 10001,'$2a$10$ZCQadMInPNK3QU5biYHXYOMmzuKWm/5A1vKF2e2HF.0f4wNoxLNQS', now()), 
  ('johnlopez@gmail.com', 'John' ,'Lopez', 'A restaurant owner who bartends at night', 'Male','SUNY Albany','Sept', 19, 1990, '140-34 65ave','New York', 'New York', 10001,'$2a$10$HnCK2MWMEvGpRXm5vifa5.KY5vc8V1963SPbwJThp/1FEU3B.CUSq', now()),
  ('ivanmendoza@ac.c4q.nyc', 'Ivan', 'Mendoza', 'A dancer who liked to make his own komacha', 'Male','Binghamton University','Feb', 23, 1994, '140-34 65ave','New York', 'New York', 10001, '$2a$10$3gU0o/yA.wn6zo9TxeTfbOVshm9jrA0O0WkkSi5ftBjGqa7sVcxlu', now());

CREATE TABLE interests (
  interests_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  passion TEXT NOT NULL
);

INSERT INTO interests (user_id, passion)
  VALUES (1, 'Volleyball'), 
         (1, 'Football'),
         (2, 'Football'),
         (2, 'EDM'),
         (2, 'Art'),
         (3, 'EDM'),
         (3, 'Surfing'),
         (4, 'Volleyball'),
         (4, 'Dance');


CREATE TABLE friends (
  friend_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  added_id INTEGER NOT NULL
);

INSERT INTO friends (user_id, added_id)
  VALUES (1, 2), 
         (1, 3),
         (2, 1),
         (2, 4),
         (3, 1),
         (4, 2);


CREATE TABLE chatroom (
  chat_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  otheruser_id INTEGER NOT NULL,
  messages VARCHAR
);

INSERT INTO chatroom (user_id, otheruser_id, messages)
  VALUES (1, 2, 'Hey'), 
         (1, 2, 'Whatsup?'),
         (2, 1, 'Not Much. You?');
