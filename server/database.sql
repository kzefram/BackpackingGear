CREATE DATABASE user_management;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  bio TEXT,
);

CREATE TABLE backpacking_gear (
  back_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  gear_name VARCHAR(100) NOT NULL,
  gear_type VARCHAR(50),
  weight DECIMAL,
  notes TEXT
);

CREATE TABLE canoeing_gear (
  canoe_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  gear_name VARCHAR(100) NOT NULL,
  gear_type VARCHAR(50),
  weight DECIMAL,
  notes TEXT
);

CREATE TABLE hiking_gear (
  hike_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  gear_name VARCHAR(100) NOT NULL,
  gear_type VARCHAR(50),
  weight DECIMAL,
  notes TEXT
);

CREATE TABLE camping_gear (
  camp_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  gear_name VARCHAR(100) NOT NULL,
  gear_type VARCHAR(50),
  weight DECIMAL,
  notes TEXT
);

CREATE table kayaking_gear (
  kayak_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  gear_name VARCHAR(100) NOT NULL,
  gear_type VARCHAR(50),
  weight DECIMAL,
  notes TEXT
);