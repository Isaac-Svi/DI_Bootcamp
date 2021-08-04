-- Using the Department tables,
-- 	* Create a Manager table with the columns manager_id, manager_name, manager_type (ie.nice, angry, funny ect...):
-- 	* that has a one to one relationship with the department table:
-- 	  a department can be managed by only 1 manager, and a manager can manage only 1 department
-- Insert some values, and join the result
CREATE TABLE manager (
    manager_id serial primary key,
    manager_name varchar(100),
    manager_type varchar(10),
    departmentcode integer references department(deptcode) unique
);

INSERT INTO
    manager(manager_name, manager_type, departmentcode)
VALUES
    ('Bob Jones', 'funny', 20),
    ('Fred Hardy', 'sad', 10),
    ('A B', 'weird', 30);

SELECT
    *
FROM
    manager
    INNER JOIN department ON departmentcode = deptcode;