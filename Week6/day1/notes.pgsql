-- CREATE TABLE actors (
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(20) NOT NULL,
-- 	last_name VARCHAR(20) NOT NULL,
-- 	date_birth DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL
-- )

-- SELECT * FROM actors

-- SELECT first_name, date_birth from actors

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Matt', 'Damon', '08/10/1978', 5);

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('George', 'Clooney', '06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Liv', 'Tyler', '1977-07-01', 0);

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES ('Cate', 'Blanchett', '14/05/1969', 2);

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
-- VALUES 
-- 	('Sean', 'Bean', '1959-04-17', 0),
-- 	('John', 'Rhys-Davies', '1944-05-05', 0),
-- 	('Hugo', 'Weaving', '1960-04-04', 0);

-- DELETE FROM actors WHERE actor_id > 2

-- SELECT * FROM actors WHERE number_oscars >= 2 OR first_name = 'Sean'

-- SELECT * FROM actors WHERE date_birth > '1950-01-01'
-- SELECT first_name, last_name FROM actors WHERE EXTRACT(YEAR FROM date_birth) = 1961
-- SELECT first_name, last_name FROM actors WHERE EXTRACT(MONTH FROM date_birth) = '4'

-- SELECT UPPER(first_name), last_name FROM actors WHERE actor_id > 2

-- gets DOW or "day of week".  In this case, it returns 0, because Matt Damon (our result) was born on Sunday.
-- SELECT first_name, last_name, number_oscars, EXTRACT(DOW FROM date_birth) FROM actors WHERE number_oscars > 2;

-- SELECT first_name, last_name, number_oscars, EXTRACT(DOW FROM date_birth) AS day_number FROM actors WHERE number_oscars > 2;

-- SELECT UPPER(last_name) FROM actors WHERE number_oscars >= 2 AND CHAR_LENGTH(first_name) >= 4;

-- SELECT UPPER(last_name), date_birth FROM actors WHERE EXTRACT(YEAR from date_birth) BETWEEN 1955 AND 1965;
-- SELECT UPPER(last_name), date_birth FROM actors WHERE EXTRACT(YEAR from date_birth) NOT BETWEEN 1955 AND 1965;

-- ascending order by default.
-- SELECT * FROM actors WHERE date_birth >= '1960-01-01' ORDER BY number_oscars;
-- specify DESC if you want to get descending order
-- SELECT * FROM actors WHERE date_birth >= '1960-01-01' ORDER BY number_oscars DESC;
-- by adding limit of 1, you're making sure to only get the first row, which we know has the most oscars, because
-- we ordered in descending order.
-- SELECT * FROM actors WHERE date_birth >= '1960-01-01' ORDER BY number_oscars DESC LIMIT 1;

-- this makes sure we find the first name of the actors with a last name ending with letter y.
-- in this case, only george clooney
-- SELECT first_name FROM actors WHERE last_name LIKE '%y'

-- % is a wildcard.  You can also use it like this.  In this case, last_name can begin with, end with, or just contain
-- b (not case sensitive because of ILIKE instead of LIKE which is case sensitive).
-- SELECT first_name FROM actors WHERE last_name ILIKE '%b%'

-- SELECT * FROM actors LIMIT 4;
-- SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;
-- SELECT * FROM actors WHERE first_name ILIKE '%e%';
-- SELECT * FROM actors WHERE number_oscars >= 5;


-- You can also use the AGE function to get the age of someone from a date.
-- SELECT first_name, last_name, number_oscars, AGE(date_birth) FROM actors WHERE number_oscars > 2;