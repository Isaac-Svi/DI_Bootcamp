-- 1:
SELECT COUNT(*) FROM actors;
-- result is 7 rows in my case.

-- 2:
INSERT INTO actors(first_name, last_name)
VALUES ('Bob', 'Jones');

-- I'll receive an error, and the new actor won't be inserted, because 
-- I'm leaving out some required fields, because all the fields in the actors table
-- were set to NOT NULL.