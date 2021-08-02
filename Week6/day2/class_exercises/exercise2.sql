-- Use aggregate functions
-- 1. Where and when (only hour) it's the noisiest in the world?.
-- 2. How many rows per city does the table have ? 
-- 3. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
-- 4. How many rows does the table have about the city "San Francisco" ?
--1
SELECT
    EXTRACT(
        HOUR
        from
            time_stamp
    ),
    city
FROM
    city_info
WHERE
    sound = (
        SELECT
            MAX(sound)
        FROM
            city_info
    );

--2: There are 673 rows per city, and 1 extra row that I added for Bet Shemesh.
SELECT
    COUNT(*)
FROM
    city_info
GROUP BY
    city;

--3
SELECT
    AVG(dust)
FROM
    city_info
WHERE
    city = 'Boston'
    AND time_stamp BETWEEN '01/03/2015'
    AND '05/03/2015';

--4: There are 673 rows for city San Francisco.
SELECT
    COUNT(*)
FROM
    city_info
WHERE
    city = 'San Francisco';