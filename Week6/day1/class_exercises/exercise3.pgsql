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