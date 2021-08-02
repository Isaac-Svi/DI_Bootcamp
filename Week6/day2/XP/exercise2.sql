--1
SELECT
    *
FROM
    customer;

--2
SELECT
    first_name || ' ' || last_name as full_name
FROM
    customer;

--3
SELECT
    DISTINCT create_date
FROM
    customer;

--4
SELECT
    *
FROM
    customer
ORDER BY
    first_name;

--5
SELECT
    film_id,
    title,
    description,
    release_year,
    rental_rate
FROM
    film
ORDER BY
    rental_rate ASC;

--6
SELECT
    address,
    phone
FROM
    address
WHERE
    district = 'Texas';

--7
SELECT
    *
FROM
    film
WHERE
    film_id IN (15, 150);

--8
SELECT
    film_id,
    title,
    description,
    length,
    rental_rate
FROM
    film
WHERE
    title = 'Terminator';

--9
SELECT
    film_id,
    title,
    description,
    length,
    rental_rate
FROM
    film
WHERE
    title ILIKE 'te%';

--10
SELECT
    film_id,
    title,
    rental_rate
FROM
    film
ORDER BY
    rental_rate
LIMIT
    10;

SELECT
    film_id,
    title,
    rental_rate
FROM
    film
ORDER BY
    title
LIMIT
    10;

--11
SELECT
    film_id,
    title,
    rental_rate
FROM
    film
ORDER BY
    rental_rate ASC
LIMIT
    10 OFFSET 10;

-- version 2
SELECT
    film_id,
    title,
    rental_rate
FROM
    film
ORDER BY
    rental_rate ASC
FETCH FIRST
    10 ROWS ONLY OFFSET 10;

--12: I don't understand the point of joining here.
SELECT
    customer_id,
    amount,
    payment_date
FROM
    payment
ORDER BY
    customer_id;

--13:
SELECT
    film_id,
    title
FROM
    film
WHERE
    film_id NOT IN (
        SELECT
            DISTINCT film_id
        FROM
            inventory
    );

--14
SELECT
    city,
    country
FROM
    city
    INNER JOIN country ON country.country_id = city.country_id;

--15
SELECT
    first_name,
    last_name,
    amount,
    payment_date
FROM
    customer
    INNER JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY
    payment.staff_id ASC;