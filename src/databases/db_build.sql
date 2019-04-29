BEGIN;

DROP TABLE IF EXISTS products, sales, users CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  ean_isbn VARCHAR(100) NOT NULL,
  product_code VARCHAR(100) NOT NULL,
  inventory INTEGER NOT NULL
);

INSERT INTO products (product_name, ean_isbn, product_code, inventory)
VALUES ('Monaco Flask', '9780399501487', 'BK103', 26);

CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  sale_location VARCHAR(100) NOT NULL,
  units_sold INTEGER NOT NULL,
  sale_price INTEGER NOT NULL,
  date_stamp VARCHAR(100) NOT NULL,
  time_stamp VARCHAR(100) NOT NULL
);

INSERT INTO sales (product_name, sale_location, units_sold, sale_price, date_stamp, time_stamp)
VALUES ('Monaco Flask', 'London', 4, 16, '3/01/2019', '13.01PM');

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

INSERT INTO users (first_name, last_name, username, password)
VALUES ('Jimmy', 'Lulu', 'Lulujim123', 'password');

COMMIT;
