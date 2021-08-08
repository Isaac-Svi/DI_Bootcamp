--1, 2:

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_user INTEGER REFERENCES users(user_id),
    order_date DATE NOT NULL DEFAULT now()
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    price DECIMAL NOT NULL,
    order_id INTEGER REFERENCES orders(order_id)
);

-- insertions
INSERT INTO users (first_name, last_name)
VALUES
    ('Bob', 'Jones'),
    ('Bob', 'Smith'),
    ('Bob', 'Bob');

INSERT INTO orders (order_user)
VALUES
    (1),
    (1),
    (2);

INSERT INTO items (item_name, price, order_id)
VALUES
    ('shelf', 10.00, 1),
    ('book', 5.00, 2),
    ('guitar', 999.99, 1);

--3:
CREATE OR REPLACE FUNCTION total_price(id integer)
RETURNS DECIMAL AS $$ BEGIN RETURN(
    SELECT SUM(price) FROM items WHERE order_id = id
); END; $$ LANGUAGE plpgsql;


--4:
CREATE OR REPLACE FUNCTION total_price_for_user(o_id integer, u_id integer) RETURNS DECIMAL AS $$ BEGIN RETURN(
    SELECT  SUM(price)
    FROM orders
        INNER JOIN items
        ON items.order_id = orders.order_id
        INNER JOIN users
        ON users.user_id = orders.order_user
    GROUP BY  orders.order_id,
            user_id
    HAVING orders.order_id = o_id AND user_id = u_id
); END; $$ LANGUAGE plpgsql;


