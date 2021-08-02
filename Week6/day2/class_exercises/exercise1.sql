-- In the table actors, write the following commands:
-- 1. Update the first name of Matt Damon to "Maty"
-- 2. Update the number of oscars of George Clooney to 4, and return the updated record
-- 3. Delete one actor and return it
-- 4. Add a column to the table: column email is Unique and can be null. It's varchar(50)
-- 5. Update all the record so the email adress will be the "actorfirstname.actorlastname@gmail.com"
--
-- 1
UPDATE
    actors
SET
    first_name = 'Maty'
WHERE
    first_name = 'Matt'
    AND last_name = 'Damon';

-- 2
UPDATE
    actors
SET
    number_oscars = 4
WHERE
    first_name = 'George'
    AND last_name = 'Clooney' RETURNING *;

-- 3
DELETE FROM
    actors
WHERE
    first_name = 'Liv' RETURNING *;

-- 4
ALTER TABLE
    actors
ADD
    COLUMN email VARCHAR(50) UNIQUE;

-- 5
UPDATE
    actors
SET
    email = CONCAT(first_name, '.', last_name, '@gmail.com');

-- Alternatively:
UPDATE
    actors
SET
    email = first_name || '.' || last_name || '@gmail.com';