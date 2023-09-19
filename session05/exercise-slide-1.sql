-- 1. Create db name as purwadhika_student, purwadhika_schedule, purwadhika_branch
CREATE DATABASE purwadhika_student;
CREATE DATABASE purwadhika_schedule;
CREATE DATABASE purwadhika_branch;

-- 2. Show list of database with name contain purwadhika.
SHOW DATABASES LIKE '%purwadhika%';

-- 3. Delete database purwadhika_schedule
DROP DATABASE purwadhika_schedule;

-- 4. Create table name as Students in purwadhika_student db, with field id, last_name, first_name, address, city.
--    The id field should be in integer type while the rest is varchar.
USE purwadhika_student;
CREATE TABLE Students (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(100) NOT NULL DEFAULT '',
    last_name VARCHAR(100) NOT NULL DEFAULT '',
    city VARCHAR(100) NOT NULL DEFAULT '',
    address VARCHAR(255) NOT NULL DEFAULT ''
);
SHOW TABLES;

-- 5. Add email column into table Students with type varchar.
ALTER TABLE Students 
ADD COLUMN email VARCHAR(100) NOT NULL DEFAULT '';

-- 6. Add gender, batch_code, phone_number, alternative_phone_number column in single query.
ALTER TABLE Students
ADD COLUMN gender VARCHAR(100) NOT NULL DEFAULT 'Men',
ADD COLUMN batch_code VARCHAR(100) NOT NULL DEFAULT '',
ADD COLUMN phone_number VARCHAR(50) NOT NULL DEFAULT '',
ADD COLUMN alternative_phone_number VARCHAR(50);

-- 7. Change alternative_phone_number column name into description with varchar type.
ALTER TABLE Students
RENAME COLUMN alternative_phone_number TO description;

-- 8. Remove column gender in table Students
ALTER TABLE Students
DROP COLUMN gender;
