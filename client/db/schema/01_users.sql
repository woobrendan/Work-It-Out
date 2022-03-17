DROP TABLE IF EXISTS contributions CASCADE;
DROP TABLE IF EXISTS user_favourites CASCADE;
DROP TABLE IF EXISTS map_points CASCADE;
DROP TABLE IF EXISTS maps CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255),
  description TEXT,
  thumbnail VARCHAR(255)
);