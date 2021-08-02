-- PART 1
--1:
SELECT
    *
FROM
    items
ORDER BY
    price ASC;

--2:
SELECT
    *
FROM
    items
WHERE
    price >= 80
ORDER BY
    price DESC;

--3:
SELECT
    first_name,
    last_name
FROM
    customers
ORDER BY
    first_name ASC
LIMIT
    3;

--4:
SELECT
    last_name
FROM
    customers
ORDER BY
    last_name DESC;

-- PART 2
CREATE TABLE purchases (
    customer_id INTEGER REFERENCES customers(customer_id),
    item_id INTEGER REFERENCES items(item_id)
);

--1: Still works because we didn't make item_id NOT NULL.
INSERT INTO
    purchases (customer_id)
VALUES
    (2);

--2:
INSERT INTO
    purchases
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (4, 2),
    (5, 1);

-- PART 3
--1: Not that useful, unless we use with a join in my opinion.
SELECT
    *
FROM
    purchases;

--2:
SELECT
    *
FROM
    purchases
    INNER JOIN customers ON purchases.customer_id = customers.customer_id;

--3:
SELECT
    *
FROM
    purchases
WHERE
    customer_id = 4;

--4:
SELECT
    customer_id,
    name,
    price
FROM
    purchases
    INNER JOIN items ON purchases.item_id = items.item_id
WHERE
    name ILIKE 'large desk'
    OR name ILIKE 'small desk';

-- version 2
SELECT
    customer_id,
    name,
    price
FROM
    purchases
    INNER JOIN items ON purchases.item_id = items.item_id
WHERE
    name ILIKE '%desk%';

-- PART 4
-- Create a new item "hard drive"
INSERT INTO
    items (name, price)
VALUES
    ('Hard Drive', 50);

INSERT INTO
    purchases(customer_id, item_id)
VALUES
    (
        (
            SELECT
                customer_id
            FROM
                customers
            WHERE
                first_name = 'Scott'
                AND last_name = 'Scott'
        ),
        (
            SELECT
                item_id
            FROM
                items
            WHERE
                name = 'Hard Drive'
        )
    );

-- PART 5
SELECT
    first_name as "Customer first name",
    last_name as "Customer last name",
    name as "Item name"
FROM
    purchases
    INNER JOIN customers ON purchases.customer_id = customers.customer_id
    INNER JOIN items ON purchases.item_id = items.item_id;