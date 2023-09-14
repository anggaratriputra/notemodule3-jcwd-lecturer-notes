show databases;
use jcwd2504_hello_mysql;

show tables;

-- create data
INSERT INTO students(name, description, gender, height, isMarried, pocketMoney, score, birthday, lastSeen) VALUES
('Thareq', 'koki di macheline', 'Men', 175, false, 100000000, 99.999, DATE('2001-01-01'), NOW()),
('Ronald', 'penikmat alkohol', 'Men', 175, false, 200000000, 95.999, DATE('2003-01-01'), NOW());

-- read data
SELECT * FROM students;
SELECT name, pocketMoney FROM students;
SELECT DISTINCT name, pocketMoney FROM students;
SELECT DISTINCT * FROM students;
SELECT name, pocketMoney FROM students WHERE name='damar';

-- update data
UPDATE students SET height=180,score=85
WHERE name='damar';

-- delete data
DELETE FROM students WHERE id = 1;

-- sql where clause
SELECT * FROM students
WHERE name NOT IN ('damar', 'Ronald');

-- sql group by clause
SELECT 
    name, MIN(pocketMoney), MAX(pocketMoney), SUM(pocketMoney)
FROM
    students
GROUP BY name
HAVING SUM(pocketMoney) > 12837123;


-- sql order by clause
SELECT 
    name, MIN(pocketMoney), MAX(pocketMoney), SUM(pocketMoney)
FROM
    students
GROUP BY name
HAVING SUM(pocketMoney) > 12837123
ORDER BY MIN(pocketMoney) DESC, name DESC;

-- sql limit clause
SELECT 
    name, MIN(pocketMoney), MAX(pocketMoney), SUM(pocketMoney)
FROM
    students
GROUP BY name
HAVING SUM(pocketMoney) > 12837123
ORDER BY MIN(pocketMoney) DESC, name DESC
LIMIT 2 OFFSET 1;