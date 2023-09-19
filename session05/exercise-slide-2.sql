USE purwadhika_branch;

-- 1
CREATE TABLE Branches (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    branch_name VARCHAR(5) NOT NULL UNIQUE,
    pic VARCHAR(100),
    address VARCHAR(255),
    city VARCHAR(100),
    province VARCHAR(100)
);

INSERT INTO Branches (branch_name, pic, address, city, province) VALUES 
('BSD', 'THOMAS', 'GREEN OFFICE PARK 9', 'BSD', 'TANGERANG'),
('JKT', 'BUDI', 'MSIG TOWER', 'JAKARTA SELATAN', 'JAKARTA'),
('BTM', 'ANGEL', 'NONGSA', 'BATAM', 'KEP. RIAU');

SELECT * FROM Branches;

-- 2
UPDATE Branches SET pic='Dono' WHERE city='BSD';

-- 3
INSERT INTO Branches (branch_name, pic, address, city, province) VALUES 
('BLI', 'Tono', 'Gianyar', 'Gianyar', 'Bali');