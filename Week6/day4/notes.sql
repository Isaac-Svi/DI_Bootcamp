-- SQL Functions -- 1rst possibility

CREATE OR REPLACE FUNCTION fullname_actor(fn varchar(50), lan varchar(100)) RETURNS VARCHAR(100) AS $ fullname $ DECLARE new_name VARCHAR(100); BEGIN

SELECT CONCAT(first_name,' ',last_name)
FROM actors
WHERE first_name = fn
AND last_name = lan INTO new_name; RETURN new_name; END; $ fullname $ LANGUAGE plpgsql;
-- 2nd possibility

CREATE OR REPLACE FUNCTION fullname_actor(fn varchar(50), lan varchar(100)) RETURNS VARCHAR(100) AS $ $ BEGIN RETURN(
SELECT  CONCAT(first_name,' ',last_name)
FROM actors
WHERE first_name = fn
AND last_name = lan ); END; $ $ LANGUAGE plpgsql;

SELECT  fullname_actor('George','Clooney');

SELECT  fullname_actor(first_name,last_name) AS fullName
FROM actors
WHERE actors.first_name = 'George'
AND actors.last_name = 'Clooney';