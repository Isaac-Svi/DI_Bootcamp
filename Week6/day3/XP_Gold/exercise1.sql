--1:
SELECT  *
FROM rental
WHERE return_date IS NULL; 
-- 
--2:
SELECT  customer.customer_id,
        first_name,
        last_name
FROM rental
INNER JOIN customer
ON customer.customer_id = rental.customer_id
GROUP BY  customer.customer_id,
          first_name,
          last_name,
          return_date
HAVING return_date IS NULL; 
-- 
--3:
SELECT title, description
FROM film_actor
INNER JOIN film ON film.film_id = film_actor.film_id
INNER JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE description ILIKE '%action%'
AND first_name = 'Joe'
AND last_name = 'Swank';