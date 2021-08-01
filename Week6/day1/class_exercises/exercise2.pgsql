-- 1
SELECT * FROM actors LIMIT 4;

-- 2
SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;

-- 3
SELECT * FROM actors WHERE first_name ILIKE '%e%';

-- 4
SELECT * FROM actors WHERE number_oscars >= 5;