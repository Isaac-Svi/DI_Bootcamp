--1: I assume this means the number of distinct jobs that exist in employees table.  Not sure what "available" means.
SELECT  COUNT(distinct job_id)
FROM employees;

--2:
SELECT job_id, COUNT(*)
FROM employees
GROUP BY job_id;

--3:
SELECT MAX(salary) - MIN(salary) as difference
FROM employees;

--4:
SELECT  manager_id,
        MIN(salary)
FROM employees
GROUP BY  manager_id;

--5:
SELECT  jobs.job_id, ROUND(AVG(salary), 2)
FROM employees
INNER JOIN jobs ON jobs.job_id = employees.job_id
GROUP BY jobs.job_id
HAVING jobs.job_id != (
    SELECT  job_id
    FROM jobs
    WHERE job_title = 'Programmer'
);

--6: There aren't any departments with more than 10 employees, so if you want to see results, you can try s.count >= 6 instead of > 10 in line 41.
SELECT  e.department_id,
        ROUND(AVG(salary), 2)
FROM employees e
GROUP BY e.department_id
HAVING e.department_id IN ( 
    SELECT department_id FROM  ( 
        SELECT department_id, COUNT(*) 
        FROM employees 
        GROUP BY department_id  
    ) AS s WHERE s.count > 10
);