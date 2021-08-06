--1:
SELECT  city,
        country,
        COUNT(*) AS "Number of stores"
FROM store
INNER JOIN
(
    SELECT  *
    FROM address
    INNER JOIN
    (
        SELECT  *
        FROM city
        INNER JOIN country
        ON city.country_id = country.country_id
    ) AS a
    ON address.city_id = a.city_id
) AS x
ON store.address_id = x.address_id
GROUP BY  city,
          country;

--2:
SELECT store.store_id, SUM(length)
FROM inventory
INNER JOIN store ON inventory.store_id = store.store_id
INNER JOIN film ON inventory.film_id = film.film_id
GROUP BY store.store_id;

--3:
SELECT store.store_id, SUM(length)
FROM inventory
INNER JOIN store ON inventory.store_id = store.store_id
INNER JOIN film ON inventory.film_id = film.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
GROUP BY store.store_id, return_date
HAVING return_date IS NULL;

--4:
SELECT  *
FROM customer c
WHERE c.address_id IN (
    SELECT  address.address_id
    FROM address
    WHERE city_id IN (
        SELECT a.city_id 
        FROM address a
        INNER JOIN store s ON a.address_id = s.address_id
    )
);

--5:
SELECT  c.customer_id, concat(first_name,' ',last_name) AS "customer_name"
FROM customer c
WHERE c.address_id IN (
    SELECT  a.address_id
    FROM address a
    WHERE a.city_id IN (
        SELECT  c.city_id
        FROM city c
        WHERE c.country_id IN (
            SELECT  c.country_id
            FROM address a
            INNER JOIN city c
            ON a.city_id = c.city_id
            INNER JOIN store s
            ON s.address_id = a.address_id
        )
    )
);

--6: list of those movies
SELECT  *
FROM film
WHERE description NOT SIMILAR TO '(horror|beast|monster|ghost|zombie|dead|undead)';

--6.1: sum of the lengths of those movies
SELECT  SUM(length)
FROM film
WHERE description NOT SIMILAR TO '(horror|beast|monster|ghost|zombie|dead|undead)';

--7:
SELECT  
    SUM(length) / 60 / 24 as days,
    SUM(length) % (60 * 24) / 60 as hours,
    SUM(length) % 60 as minutes
FROM film
    WHERE description NOT SIMILAR TO '(horror|beast|monster|ghost|zombie|dead|undead)';