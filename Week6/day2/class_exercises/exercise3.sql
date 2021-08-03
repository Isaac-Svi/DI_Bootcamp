CREATE SEQUENCE department_sequence start 10 increment 10;

CREATE TABLE department (
    DEPTCODE SERIAL PRIMARY KEY,
    DeptName CHAR(30),
    Location VARCHAR(33) UNIQUE
);

-- Should have just done this:
-- CREATE TABLE department (
--     DEPTCODE SERIAL PRIMARY KEY DEFAULT NEXTVAL('department_sequence'),
--     DeptName CHAR(30),
--     Location VARCHAR(33) UNIQUE
-- );
--
CREATE TABLE employee (
    EmpCode INTEGER PRIMARY KEY,
    EmpFName VARCHAR(15) NOT NULL,
    EmpLName VARCHAR(15) NOT NULL,
    Job VARCHAR(45),
    Manager CHAR(4),
    HireDate DATE,
    Salary DECIMAL DEFAULT 0,
    Commission INTEGER,
    DepartmentCode INTEGER REFERENCES department(DEPTCODE)
);

INSERT INTO
    DEPARTMENT
VALUES
    (
        NEXTVAL('department_sequence'),
        'FINANCE',
        'EDINBURGH'
    ),
    (
        NEXTVAL('department_sequence'),
        'SOFTWARE',
        'PADDINGTON'
    ),
    (
        NEXTVAL('department_sequence'),
        'SALES',
        'MAIDSTONE'
    ),
    (
        NEXTVAL('department_sequence'),
        'MARKETING',
        'DARLINGTON'
    ),
    (
        NEXTVAL('department_sequence'),
        'ADMIN',
        'BIRMINGHAM'
    );

INSERT INTO
    EMPLOYEE
VALUES
    (
        9369,
        'TONY',
        'STARK',
        'SOFTWARE ENGINEER',
        7902,
        '1980-12-17',
        2800,
        0,
        20
    ),
    (
        9499,
        'TIM',
        'ADOLF',
        'SALESMAN',
        7698,
        '1981-02-20',
        1600,
        300,
        30
    ),
    (
        9566,
        'KIM',
        'JARVIS',
        'MANAGER',
        7839,
        '1981-04-02',
        3570,
        0,
        20
    ),
    (
        9654,
        'SAM',
        'MILES',
        'SALESMAN',
        7698,
        '1981-09-28',
        1250,
        1400,
        30
    ),
    (
        9782,
        'KEVIN',
        'HILL',
        'MANAGER',
        7839,
        '1981-06-09',
        2940,
        0,
        10
    ),
    (
        9788,
        'CONNIE',
        'SMITH',
        'ANALYST',
        7566,
        '1982-12-09',
        3000,
        0,
        20
    ),
    (
        9839,
        'ALFRED',
        'KINSLEY',
        'PRESIDENT',
        7566,
        '1981-11-17',
        5000,
        0,
        10
    ),
    (
        9844,
        'PAUL',
        'TIMOTHY',
        'SALESMAN',
        7698,
        '1981-09-08',
        1500,
        0,
        30
    ),
    (
        9876,
        'JOHN',
        'ASGHAR',
        'SOFTWARE ENGINEER',
        7788,
        '1983-01-12',
        3100,
        0,
        20
    ),
    (
        9900,
        'ROSE',
        'SUMMERS',
        'TECHNICAL LEAD',
        7698,
        '1981-12-03',
        2950,
        0,
        20
    ),
    (
        9902,
        'ANDREW',
        'FAULKNER',
        'ANAYLYST',
        7566,
        '1981-12-03',
        3000,
        0,
        10
    ),
    (
        9934,
        'KAREN',
        'MATTHEWS',
        'SOFTWARE ENGINEER',
        7782,
        '1982-01-23',
        3300,
        0,
        20
    ),
    (
        9591,
        'WENDY',
        'SHAWN',
        'SALESMAN',
        7698,
        '1981-02-22',
        500,
        0,
        30
    ),
    (
        9698,
        'BELLA',
        'SWAN',
        'MANAGER',
        7839,
        '1981-05-01',
        3420,
        0,
        30
    ),
    (
        9777,
        'MADII',
        'HIMBURY',
        'ANALYST',
        7839,
        '1981-05-01',
        2000,
        200,
        NULL
    ),
    (
        9860,
        'ATHENA',
        'WILSON',
        'ANALYST',
        7839,
        '1992-06-21',
        7000,
        100,
        50
    ),
    (
        9861,
        'JENNIFER',
        'HUETTE',
        'ANALYST',
        7839,
        '1996-07-01',
        5000,
        100,
        50
    );

-- III
--1: There are 3 in dep. 10.
SELECT
    COUNT(*)
FROM
    EMPLOYEE
WHERE
    DepartmentCode = 10;

--2: There are 0. (Except for anaylyst ;p.  Just updated, so it should be 1 now.)
SELECT
    COUNT(*)
FROM
    employee
WHERE
    DepartmentCode = 10,
    Job ILIKE 'analyst';

--3
SELECT
    EmpFName,
    EmpLName,
    Job,
    Location
FROM
    employee
    INNER JOIN department ON department.DEPTCODE = employee.DepartmentCode;

-- version 2
SELECT
    employee.EmpFName,
    employee.EmpLName,
    employee.Job,
    department.Location
FROM
    employee
    INNER JOIN department ON department.DEPTCODE = employee.DepartmentCode;

--4: 3066.67
SELECT
    ROUND(AVG(salary), 2)
FROM
    employee
WHERE
    job ILIKE 'software engineer';

--5
SELECT
    EmpFName,
    EmpLName,
    Job,
    Location
FROM
    employee
    LEFT JOIN department ON department.DEPTCODE = employee.DepartmentCode;

--6: You don't need the second order, because it is ignored and the first order is made to be a priority.
SELECT
    EMPFNAME,
    EMPLNAME,
    DEPTCODE,
    DEPTNAME,
    LOCATION
FROM
    EMPLOYEE
    INNER JOIN DEPARTMENT ON employee.DepartmentCode = department.DEPTCODE
ORDER BY
    EmpFName ASC,
    Location ASC;

--7
SELECT
    EMPFNAME,
    SUM(COMMISSION + SALARY) as "total salary"
FROM
    employee
GROUP BY
    EMPFNAME;

--8: 7000
SELECT
    MAX(SALARY)
FROM
    employee;