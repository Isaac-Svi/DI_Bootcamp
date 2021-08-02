-- CREATE TABLE city_info (
-- 	id SERIAL PRIMARY KEY,
-- 	time_stamp TIMESTAMP NOT NULL,
-- 	city varchar(50) NOT NULL,
-- 	temperature decimal NOT NULL,
-- 	light decimal NOT NULL,
-- 	airquality_raw decimal NOT NULL,
-- 	sound decimal NOT NULL,
-- 	humidity decimal NOT NULL,
-- 	dust decimal NOT NULL
-- )

SELECT * FROM city_info

-- DROP TABLE city_info

-- COPY city_info(time_stamp,city,temperature,light,airquality_raw,sound,humidity,dust)
-- FROM 'D:\city_info.csv'
-- DELIMITER ','
-- CSV HEADER;`
-- Questions
-- 1. Select everything from the table. (every row and columns) - How many records does the table have?
select * from city_info;
select count(*) from city_info;

-- 2. What was Bostons temperature on the 01/03/2015 at 11am ?
select temperature from city_info where city='Boston' and time_stamp='2015-03-01 11:00:00';
(select temperature from city_info where city='Boston' and extract(date from time_stamp) = '2015-03-01' and extract(hour from time_stamp) = '11:00:00';)

-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ? 
select time_stamp from city_info where city = 'San Francisco' and temperature between 28 and 30;

-- 4. Which city was the most noisy (show the name of the city, the date and the noise index) ?
select city, time_stamp from city_info order by sound desc limit 1;

-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)
select city, time_stamp from city_info order by sound asc limit 1;

-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
select dust from city_info where city = 'San Francisco' and time_stamp = '2015-03-26 20:00:00';

-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
select time_stamp from city_info where humidity not between 40 and 60 and city = 'Geneva';

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
select extract(dow from time_stamp) as day_of_week from city_info order by light desc limit 1;

-- 9. Select only the info of the cities that start with an "S" (uppercase of lowercase). - Look at the DISTINCT constraint.
select distinct(city) from city_info where city ILIKE 's%';

-- 10. Add to the table, todays information in Israel - of this very hour. (timestamp,city,temperature,light,airquality_raw,sound,humidity,dust)
-- Use the return statement to see what you just inserted: https://www.postgresqltutorial.com/postgresql-insert/

insert into city_info(time_stamp,city,temperature,light,airquality_raw,sound,humidity,dust)
values (now(), 'Bet Shemesh', 32, 23, 61, 23, 23, 23)
return *;