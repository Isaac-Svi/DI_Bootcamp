--1: Updating films with id < 10 to Japanese (which has language_id of 3).
UPDATE
    film
SET
    language_id = 3
WHERE
    film_id < 10;

--2:
-- There is a customer_address_id_fkey foreign key.  This means that the address_id of each customer is a foreign key.  It means that you can't create a customer with an address_id that doesn't exist in the address table.
--
--3: Dropping this table is easy, since it doesn't have any children with information connected to it.
DROP TABLE customer_review;

-- 4: There are 183 rentals that still have to be returned.
SELECT
    return_date,
    COUNT(*)
FROM
    rental
GROUP BY
    return_date
HAVING
    return_date IS NULL;

--5:
SELECT
    title,
    return_date,
    rental_rate
FROM
    inventory
    INNER JOIN film ON film.film_id = inventory.film_id
    INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
GROUP BY
    title,
    rental_rate,
    return_date
HAVING
    return_date IS NULL
ORDER BY
    rental_rate DESC
LIMIT
    30;

--6.1:
SELECT
    first_name || ' ' || last_name as actor,
    title,
    description
FROM
    film
    INNER JOIN (
        SELECT
            *
        FROM
            film_actor
            INNER JOIN actor ON film_actor.actor_id = actor.actor_id
        WHERE
            first_name = 'Penelope'
            AND last_name = 'Monroe'
    ) AS x ON x.film_id = film.film_id
WHERE
    description ILIKE '%sumo%';

--6.2:
SELECT
    *
FROM
    film
WHERE
    length < 60
    AND rating = 'R'
    AND description ILIKE '%documentary%';

--6.3:
SELECT
    title,
    description,
    rental_rate
FROM
    inventory
    INNER JOIN film ON film.film_id = inventory.film_id
    INNER JOIN (
        -- join selected rentals to inventory to get film id
        SELECT
            -- Get all rentals of customer Matthew Mahan with specific return date
            inventory_id
        FROM
            rental
            INNER JOIN (
                -- Get customer id of Matthew Mahan
                SELECT
                    customer_id
                FROM
                    customer
                WHERE
                    first_name = 'Matthew'
                    AND last_name = 'Mahan'
            ) as a ON rental.customer_id = a.customer_id
        WHERE
            return_date BETWEEN '2005-07-28'
            AND '2005-08-01'
    ) as x ON x.inventory_id = inventory.inventory_id
WHERE
    rental_rate > 4;

--6.4:
SELECT
    title,
    description,
    rental_rate,
    replacement_cost,
    x.customer_id
FROM
    inventory
    INNER JOIN film ON film.film_id = inventory.film_id
    INNER JOIN (
        SELECT
            inventory_id,
            b.customer_id
        FROM
            rental
            INNER JOIN (
                SELECT
                    customer_id
                FROM
                    customer
                WHERE
                    first_name = 'Matthew'
                    AND last_name = 'Mahan'
            ) as b ON rental.customer_id = b.customer_id
    ) as x ON x.inventory_id = inventory.inventory_id
WHERE
    description ILIKE '%boat%'
    OR title ILIKE '%boat%'
ORDER BY
    replacement_cost DESC
limit
    1;

SELECT
    *
FROM
    inventory
    INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
    INNER JOIN film ON inventory.film_id = film.film_id
WHERE
    rental.customer_id = (
        SELECT
            customer_id
        FROM
            customer
        WHERE
            first_name = 'Matthew'
            AND last_name = 'Mahan'
    )
    AND description ILIKE '%boat%'
    OR title ILIKE '%boat%'
ORDER BY
    film.replacement_cost
LIMIT
    1;