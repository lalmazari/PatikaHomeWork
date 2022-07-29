-- HomeWork 1
SELECT title, description FROM film;
SELECT * FROM film WHERE length > 60 AND length < 75;
SELECT * FROM film WHERE rental_rate = 0.99 AND replacement_cost = 12.99 OR replacement_cost = 28.99;
SELECT * FROM customer WHERE first_name = 'Mary'; --Smith
SELECT * from film WHERE NOT(length > 50 OR rental_rate = 2.99 OR rental_rate = 4.99);

-- HomeWork 2
SELECT * FROM film WHERE replacement_cost BETWEEN 12.99 AND 16.99;
SELECT first_name, last_name FROM actor WHERE first_name IN('Penel','NICK','ED');
SELECT * FROM film WHERE rental_rate IN (0.99,2.99,4.99) AND replacement_cost IN(12.99, 15.99, 28.99);

-- HomeWork 3
SELECT country FROM country WHERE country ~~ 'A%a';
SELECT country FROM country WHERE country ~~ '_____%n';
SELECT title FROM film WHERE title ~~* '%T%%T%%T%%T%';
SELECT * FROM film WHERE title ~~ 'C%' AND length > 90 AND rental_rate = 2.99;

--HomeWork 4
SELECT DISTINCT replacement_cost FROM film;
SELECT COUNT (DISTINCT replacement_cost) FROM film; 
SELECT COUNT (title) FROM film WHERE title LIKE 'T%' AND rating = 'G'; 
SELECT COUNT (country) FROM country WHERE country LIKE '_____'; 
SELECT COUNT (city) FROM city WHERE city ILIKE '%R'; 