-- 1: Created the database with GUI in pgAdmin

-- Making tables
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL NOT NULL
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

-- Inserting data
INSERT INTO items (name, price)
VALUES 
    ('Small Desk', 100),
    ('Large desk', 300),
    ('Fan', 80);

INSERT INTO customers (first_name, last_name)
VALUES
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');

-- Fetching items from DB
-- 1: All items
SELECT * FROM items;

-- 2: Price above 80
SELECT * FROM items WHERE price > 80;

-- 3: Price below 300
SELECT * FROM items WHERE price <= 300;

-- 4: Last name Smith
SELECT * FROM customers WHERE last_name = 'Smith';
-- Outcome should be empty table, because there is no Smith.

-- 5: Last name Jones
SELECT * FROM customers WHERE last_name = 'Jones';

-- 6: Last name not Scott
SELECT * FROM customers WHERE last_name != 'Scott';