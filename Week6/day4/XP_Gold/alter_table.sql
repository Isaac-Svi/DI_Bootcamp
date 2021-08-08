--1:
ALTER TABLE locations
RENAME COLUMN state_province TO state;

--2:
ALTER TABLE locations
ADD CONSTRAINT location_id_pkey
PRIMARY KEY (location_id);
