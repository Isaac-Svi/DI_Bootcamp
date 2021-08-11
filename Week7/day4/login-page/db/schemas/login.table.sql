CREATE TABLE login (
    login_id SERIAL PRIMARY KEY,
    username VARCHAR(50) REFERENCES register(username),
    password VARCHAR(60)
);