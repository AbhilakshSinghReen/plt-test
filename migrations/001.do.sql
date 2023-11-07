
-- Add SQL in this file to create the database tables for your API
CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  movie_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO movies (title, movie_date) VALUES ('The Matrix', '1999-03-31');
INSERT INTO movies (title, movie_date) VALUES ('The Matrix Reloaded', '2003-05-01');
INSERT INTO movies (title, movie_date) VALUES ('The Matrix Revolutions', '2003-10-01');

