--1
SELECT
    rating,
    COUNT(*)
FROM
    film
GROUP BY
    rating;

--2
SELECT
    *
FROM
    film
WHERE
    rating IN ('G', 'PG-13');

--2.1
SELECT
    *
FROM
    film
WHERE
    rating IN ('G', 'PG-13')
    AND length < 120
    AND rental_rate < 3.00
ORDER BY
    title ASC;

--3
UPDATE
    customer
SET
    first_name = 'Isaac',
    last_name = 'Svi',
    email = 'test1234@gmail.com'
WHERE
    customer_id = 1;

--4
UPDATE
    address
SET
    address = '123 Main St., New York, NY, USA'
WHERE
    address_id = (
        SELECT
            address_id
        FROM
            customer
        WHERE
            first_name = 'Isaac'
            AND last_name = 'Svi'
    );