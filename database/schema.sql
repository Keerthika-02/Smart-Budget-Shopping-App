CREATE DATABASE smart_budget;
USE smart_budget;

CREATE TABLE expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    barcode VARCHAR(50),
    amount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
