--1
SELECT
    DISTINCT name
FROM
    language
    INNER JOIN film ON language.language_id = film.language_id;

--2
SELECT
    title,
    description,
    name AS "language name"
FROM
    film
    INNER JOIN language ON language.language_id = film.language_id;

--2.1:
SELECT
    title,
    description,
    name AS "language name"
FROM
    film
    LEFT JOIN language ON language.language_id = film.language_id;

--2.2: ORDER BY is just to show that the right join works
SELECT
    title,
    description,
    name AS "language name"
FROM
    film
    RIGHT JOIN language ON language.language_id = film.language_id
ORDER BY
    name DESC;

--3:
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO
    new_film(name)
VALUES
    ('Ocean''s 11'),
    ('Ocean''s 12'),
    ('Ocean''s 13'),
    ('The Fellowship of the Ring');

--4:
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(50),
    score INTEGER,
    review_text TEXT,
    last_update TIMESTAMP,
    CHECK (
        score BETWEEN 1
        AND 10
    )
);

--5:
INSERT INTO
    customer_review(
        film_id,
        language_id,
        title,
        score,
        review_text,
        last_update
    )
VALUES
    (
        (
            SELECT
                id
            FROM
                new_film
            WHERE
                name = 'Ocean''s 11'
        ),
        (
            SELECT
                language_id
            FROM
                language
            WHERE
                name = 'English'
        ),
        'Was not bad...',
        4,
        'It was very well done.',
        NOW()
    ),
    (
        (
            SELECT
                id
            FROM
                new_film
            WHERE
                name = 'The Fellowship of the Ring'
        ),
        (
            SELECT
                language_id
            FROM
                language
            WHERE
                name = 'English'
        ),
        'A masterpiece!',
        5,
        'I''ll be hard pressed to find a move as good as this one.',
        NOW()
    );

--6: Because of the ON DELETE CASCADE defined in the customer_review table, when a film with a review gets deleted, so does a review on that film.
DELETE FROM
    new_film
WHERE
    name = 'Ocean''s 11';