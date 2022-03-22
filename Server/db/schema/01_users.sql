DROP TABLE IF EXISTS workouts_exercises CASCADE;
DROP TABLE IF EXISTS workouts CASCADE;
DROP TABLE IF EXISTS workout_stats CASCADE;
DROP TABLE IF EXISTS exercises CASCADE;
DROP TABLE IF EXISTS muscle_groups CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  birthdate DATE
);

CREATE TABLE muscle_groups (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  thumbnail TEXT
);

CREATE TABLE exercises (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  description TEXT,
  thumbnail TEXT,
  video VARCHAR(255),
  muscle_group_id INTEGER REFERENCES muscle_groups(id) ON DELETE CASCADE
);

CREATE TABLE workout_stats ( 
  id SERIAL PRIMARY KEY NOT NULL,
  weight INTEGER,
  reps INTEGER,
  sets INTEGER,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  exercise_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE
);

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE workouts_exercises(
  id SERIAL PRIMARY KEY NOT NULL,
  exercise_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE,
  workout_id INTEGER REFERENCES workouts(id) ON DELETE CASCADE
)