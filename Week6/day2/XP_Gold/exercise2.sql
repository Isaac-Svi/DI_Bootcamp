--Update
--1
UPDATE
    students
SET
    birth_date = '1998-11-02'
WHERE
    last_name = 'Benichou';

--2
UPDATE
    students
SET
    last_name = 'Guez'
WHERE
    first_name = 'David'
    AND last_name = 'Grez';

--Delete
--1
DELETE FROM
    students
WHERE
    first_name = 'Lea'
    AND last_name = 'Benichou';

--Count
--1
SELECT
    COUNT(*)
FROM
    students;

--2
SELECT
    COUNT(*)
FROM
    students
WHERE
    birth_date > '2000-01-01';

--Insert/Alter
--1
ALTER TABLE
    students
ADD
    COLUMN math_grade INTEGER;

--2
UPDATE
    students
SET
    math_grade = 80
WHERE
    id = 1;

--3
UPDATE
    students
SET
    math_grade = 90
WHERE
    id IN (2, 4);

--4
UPDATE
    students
SET
    math_grade = 40
WHERE
    id = 6;

--5
SELECT
    COUNT(*)
FROM
    students
WHERE
    math_grade > 83;

--6
INSERT INTO
    students(first_name, last_name, birth_date, math_grade)
VALUES
    ('Omer', 'Simpson', '1980-10-03', 70);

--7
SELECT
    first_name,
    last_name,
    COUNT(math_grade) as "total_grade"
FROM
    students
GROUP BY
    first_name,
    last_name;

--Sum
--1
SELECT
    SUM(math_grade)
FROM
    students;