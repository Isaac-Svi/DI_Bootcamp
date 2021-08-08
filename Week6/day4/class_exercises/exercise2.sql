-- 1. Add a column salary to the table, with a default 0
-- 2. Set the salary of all the actors to 5000
-- 3. Create a function that updates the salary of an actor depending on his first and last name. You should pass to the function the argument; salary, first name, last name. The salary of the actor should be salary * number of oscars.
-- 4. Returns the new salary from the function

--1: Altered column instead of adding, b/c it already existed for me.
ALTER TABLE actors ALTER COLUMN salary SET DEFAULT 0;

--2:
UPDATE actors SET salary = 5000;

--3, 4:
CREATE FUNCTION update_salary(slry INTEGER, fn VARCHAR(20), ln VARCHAR(50)) 
RETURNS INTEGER AS $new_salary$
DECLARE box INTEGER;
BEGIN
    UPDATE 
        actors
    SET 
        salary = slry * number_oscars
    WHERE first_name = fn
    AND last_name = ln 
    RETURNING salary INTO box;
    RETURN box;
END; 
$new_salary$ LANGUAGE plpgsql;

SELECT update_salary(3000, 'George', 'Clooney');