--1:
INSERT INTO new_countries(country_id, country_name, region_id)
VALUES ('AD', 'Italy', 2);

--2:
INSERT INTO new_countries(country_name, region_id, country_id)
VALUES
    ('Italy', 1, 'IT'),
    ('India', 3, 'IN'),
    ('China', 3, 'CN');

--3:
INSERT INTO new_new_countries
SELECT *
FROM new_countries;

--4:
INSERT INTO new_jobs(job_title, max_salary, min_salary)
VALUES
    ('programmer', 20000, 5000),
    ('chef', 24000, 3000);

INSERT INTO new_jobs(job_title, max_salary)
VALUES ('accountant', 18000);

INSERT INTO new_employees (first_name, last_name, email, phone_number, job_id, salary)
VALUES
    ('Bob', 'Smith', 'bob@bob.com', '054-234-2345', 1, 10000),
    ('Smith', 'Bob', 'smith@smith.com', '02-234-4567', 2, 15000),
    ('Ace', 'Space', 'ace@gmail.com', '1-987-345-4567', 3, 5000);