CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email)
VALUES
('Alice', 'alice@mail.com'),
('Bob', 'bob@mail.com');

SELECT * FROM users;

UPDATE users
SET name = 'Alice Updated'
WHERE id = 1;

DELETE FROM users
WHERE id = 2;
