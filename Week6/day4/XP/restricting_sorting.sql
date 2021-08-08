--1:
SELECT  first_name,
        last_name,
        salary
FROM employees
WHERE salary BETWEEN 10000 AND 15000;

--2:
SELECT  first_name,
        last_name,
        hire_date
FROM employees
WHERE extract(year FROM hire_date) = 1987;

--3:
SELECT  first_name
FROM employees
WHERE first_name ILIKE '%c%'
AND first_name ILIKE '%e%';

--4:
SELECT  last_name,
        job_title,
        salary
FROM employees e
INNER JOIN ( 
    SELECT job_id, job_title
    FROM jobs 
    WHERE job_title NOT IN ('Programmer', 'Shipping Clerk')
) AS j ON j.job_id = e.job_id
WHERE salary NOT IN (4500, 10000, 15000);

--5:
SELECT  last_name
FROM employees
WHERE length(last_name) = 6;

--6:
SELECT  last_name
FROM employees
WHERE last_name ILIKE '__e%';

--7: I'm not sure if this is what was wanted. I'm getting the jobs that exist in the employees table. "Available" is a bit confusing for me.  Does it mean get all jobs that don't exist in employees table?  If that's what available means, we can just change the = in the last line of the query to !=, and it would do the trick.
SELECT  e.job_id, e.first_name,
        job_title
FROM employees e
INNER JOIN
(
    SELECT  job_id, job_title
    FROM jobs
) AS j
ON e.job_id = j.job_id;

--8:
SELECT  *
FROM employees
WHERE last_name ~* '(JONES|BLAKE|SCOTT|KING|FORD)';

