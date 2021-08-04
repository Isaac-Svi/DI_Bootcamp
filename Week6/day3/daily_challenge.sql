CREATE TABLE A (id serial primary key, a character);

CREATE TABLE B (id serial primary key, b character);

CREATE TABLE C (
    id serial primary key,
    a_id integer references A(id),
    b_id integer references B(id)
);

INSERT INTO
    A(a)
VALUES
    ('a'),
    ('b'),
    ('c');

INSERT INTO
    A(a)
VALUES
    (NULL);

INSERT INTO
    B(b)
VALUES
    ('e'),
    ('f'),
    ('g');

INSERT INTO
    B(b)
VALUES
    (NULL),
    (NULL);

INSERT INTO
    C(a_id, b_id)
VALUES
    (1, 2),
    (2, 3),
    (3, 1);

--2:
SELECT
    A.a || B.b as combos
FROM
    C
    INNER JOIN A on A.id = C.a_id
    INNER JOIN B on B.id = C.b_id;

SELECT
    A.id,
    a,
    a_id
FROM
    A
    LEFT JOIN C on A.id = C.a_id;

SELECT
    B.id,
    b,
    b_id
FROM
    B
    LEFT JOIN C on B.id = C.b_id;

SELECT
    *
FROM
    C
    RIGHT JOIN B on B.id = C.b_id;