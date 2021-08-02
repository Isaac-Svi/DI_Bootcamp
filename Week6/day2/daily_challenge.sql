CREATE TABLE FirstTab (id integer, name VARCHAR(10));

INSERT INTO
    FirstTab
VALUES
    (5, 'Pawan'),
    (6, 'Sharlee'),
    (7, 'Krish'),
    (NULL, 'Avtaar');

SELECT
    *
FROM
    FirstTab;

CREATE TABLE SecondTab (id integer);

INSERT INTO
    SecondTab
VALUES
    (5),
    (NULL);

SELECT
    *
FROM
    SecondTab;

-- Q1: You'll get a table with one column count having a row with 3.
-- Real answer is that count is 0, because you can't use IN for NULL.  You need to use IS or IS NOT NULL.  Therefore, NOT IN (NULL) won't work to filter null or not.
SELECT
    COUNT(*)
FROM
    FirstTab AS ft
WHERE
    ft.id NOT IN (
        SELECT
            id
        FROM
            SecondTab
        WHERE
            id IS NULL
    );

-- Q2: In this case, you'll get count = 3.
-- Real answer is that you'll get count = 2.  This is because of what we said ealier. You need to compare NULL using is or is not.
SELECT
    COUNT(*)
FROM
    FirstTab AS ft
WHERE
    ft.id NOT IN (
        SELECT
            id
        FROM
            SecondTab
        WHERE
            id = 5
    );

-- Q3: You'll get a table with one column count having a row with 2.
-- Real answer is count = 0, because of earlier reason.
SELECT
    COUNT(*)
FROM
    FirstTab AS ft
WHERE
    ft.id NOT IN (
        SELECT
            id
        FROM
            SecondTab
    );

-- Q4: You'll get a table with one column count having a row with 3.
-- Real answer is that count is 2.  This is because, the empty set is in all sets/ranges, and therefore, the row with id of NULL in FirstTab is considered to be in the range produced by the subquery.  Therefore, only id 6 and 7 aren't in that range, and therefore count is 2.
SELECT
    COUNT(*)
FROM
    FirstTab AS ft
WHERE
    ft.id NOT IN (
        SELECT
            id
        FROM
            SecondTab
        WHERE
            id IS NOT NULL
    );