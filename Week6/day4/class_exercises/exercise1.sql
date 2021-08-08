-- CREATE a function that returns the number of oscars depending
-- ON the first name AND last name of the actors


CREATE OR REPLACE FUNCTION num_oscars(fn VARCHAR(20), ln VARCHAR(50)) RETURNS VARCHAR(70) AS $$ BEGIN RETURN (
SELECT  number_oscars
FROM actors
WHERE fn = first_name
AND ln = last_name ); END; $$ LANGUAGE plpgsql;