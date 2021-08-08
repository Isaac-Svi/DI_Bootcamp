--1:
SELECT  f.film_id,
        f.title,
        f.rating,
        r.return_date
FROM film f
INNER JOIN inventory i
ON f.film_id = i.film_id
INNER JOIN rental r
ON r.inventory_id = i.inventory_id
WHERE r.rental_id IN ( SELECT rental_id FROM rental WHERE return_date is null )
AND f.rating IN ('G', 'PG'); 
--2:

CREATE TABLE waiting_list( list_id SERIAL PRIMARY KEY, customer_id INTEGER REFERENCES customer(customer_id), film_id INTEGER REFERENCES film(film_id), film_available BOOLEAN DEFAULT false ); 
--3:

INSERT INTO waiting_list(customer_id, film_id) VALUES (524, 445), (2, 440), (3, 341), (4, 341), (5, 341), (6, 445);

SELECT  film_id,
        COUNT(*)
FROM waiting_list
GROUP BY  film_id;
