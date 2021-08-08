--1: There is no department 110, so I'm assuming the question means department 10.
-- There is also no commission_pct column... I'll act like there is one though.
UPDATE employees
SET email = 'not available',
    commission_pct = 0.10
WHERE department_id = 10;

--2:
UPDATE employees
SET email = 'available'
WHERE department_id = (
    SELECT  department_id
    FROM departments
    WHERE department_name = 'Accounting'
);

--3:
UPDATE employees
SET salary = 8000
WHERE employee_id = 105 AND salary < 5000;