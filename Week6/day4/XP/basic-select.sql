--1:
SELECT  first_name AS "First Name",
        last_name  AS "Last Name"
FROM employees;

--2:
SELECT  DISTINCT department_id
FROM employees;

--3:
SELECT  *
FROM employees
ORDER BY first_name DESC;

--4:
SELECT  first_name,
        last_name,
        salary,
        salary * 0.15 AS PF
FROM employees;

--5:
SELECT  first_name,
        last_name,
        salary
FROM employees
ORDER BY salary ASC;

--6:
SELECT  SUM(salary)
FROM employees;

--7:
SELECT  MAX(salary),
        MIN(salary)
FROM employees;

--8:
SELECT  AVG(salary)
FROM employees;

--9:
SELECT  COUNT(*)
FROM employees;

--10:
SELECT  upper(first_name)
FROM employees;

--11:
SELECT  substring(first_name,1,3)
FROM employees;

--12:
SELECT  concat(first_name,' ',last_name) AS "Full name"
FROM employees;

--13:
SELECT  concat(first_name,' ',last_name) AS full_name,
        length(concat(first_name,' ',last_name))
FROM employees;

--14:
SELECT  COUNT(*)
FROM employees
WHERE first_name ~ '\d+';

--15:
SELECT  *
FROM employees
LIMIT 10;
