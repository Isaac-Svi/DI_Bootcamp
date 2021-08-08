--1:
CREATE DOMAIN country_id_type AS VARCHAR(2)
CHECK (LENGTH(VALUE) = 2);

CREATE TABLE new_countries ( 
    country_id country_id_type UNIQUE NOT NULL, 
    country_name VARCHAR(255) CHECK(country_name IN ('Italy', 'India', 'China')), region_id INTEGER REFERENCES regions(region_id) ON UPDATE CASCADE ON DELETE CASCADE
);

--2:
CREATE TABLE new_new_countries AS
TABLE new_countries;

--3:
CREATE TABLE new_jobs (
    job_id SERIAL PRIMARY KEY,
    job_title VARCHAR(50),
    min_salary INTEGER DEFAULT 8000,
    max_salary INTEGER CHECK(max_salary < 25000)
);

--4:
-- Just creating a new data type for phone numbers to make it easier to check them
CREATE DOMAIN phone_number_type AS VARCHAR(14)
CHECK (VALUE ~ '^((\d{1}-\d{3})|(\d{2}|\d{3}))-\d{3}-\d{4}$');

CREATE TABLE new_employees (
    employee_id SERIAL PRIMARY KEY, 
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number phone_number_type NOT NULL UNIQUE,
    hire_date DATE NOT NULL DEFAULT NOW(), 
    job_id INTEGER REFERENCES new_jobs(job_id),
    salary INTEGER NOT NULL
);

--5:
CREATE TABLE new_job_history (
    employee_id INTEGER REFERENCES new_employees(employee_id), 
    start_date DATE NOT NULL, 
    end_date DATE, 
    job_id INTEGER REFERENCES new_jobs(job_id)
);