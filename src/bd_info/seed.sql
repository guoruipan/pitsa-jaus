-- Crear manualmente la bd con Vercel Postgres, entonces ejecutar esto en la caja 'Query'

-- CREATE TABLES

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    pwd VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    homeAddress VARCHAR(255),
    admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE Pizzas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    idUser INT NOT NULL REFERENCES Users(id),
    total DECIMAL(10, 2) NOT NULL,
    orderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sentDate TIMESTAMP
);

CREATE TABLE OrderLine (
    id SERIAL PRIMARY KEY,
    idOrder INT REFERENCES Orders(id),
    idPizza INT REFERENCES Pizzas(id),
    quantity INT,
    totalLine DECIMAL(10, 2)
);

CREATE TABLE PizzaIngredients (
    idPizza INT NOT NULL REFERENCES Pizzas(id),
    idIngredient INT NOT NULL REFERENCES Ingredients(id),
    PRIMARY KEY (idPizza, idIngredient)
);

-- INSERT TABLE

INSERT INTO Users (name, pwd, email, homeAddress, admin)
VALUES 
    ('pepe', 'pepe', 'pepe@example.com', 'Calle 123, Ciudad', FALSE),
    ('admin', 'admin123', 'admin@example.com', 'Avenida Principal, Ciudad', TRUE),
    ('ana', 'ana', 'ana@example.com', 'Plaza Central, Ciudad', FALSE);

INSERT INTO Pizzas (name, description, price)
VALUES 
    ('Margarita', 'Tomate, mozzarella y albahaca', 8.99),
    ('Pepperoni', 'Tomate, mozzarella y pepperoni', 9.99),
    ('Hawaiana', 'Tomate, mozzarella, piña y jamón', 10.99);

INSERT INTO Ingredients (name, description)
VALUES 
    ('Tomate', 'Tomate fresco cortado en rodajas'),
    ('Mozzarella', 'Queso mozzarella rallado'),
    ('Albahaca', 'Hojas frescas de albahaca'),
    ('Pepperoni', 'Salami picante en rodajas'),
    ('Piña', 'Rodajas de piña fresca'),
    ('Jamón', 'Jamón cocido en dados');

INSERT INTO PizzaIngredients (idPizza, idIngredient)
VALUES 
    ((SELECT id FROM Pizzas WHERE name = 'Margarita'), (SELECT id FROM Ingredients WHERE name = 'Tomate')),
    ((SELECT id FROM Pizzas WHERE name = 'Margarita'), (SELECT id FROM Ingredients WHERE name = 'Mozzarella')),
    ((SELECT id FROM Pizzas WHERE name = 'Margarita'), (SELECT id FROM Ingredients WHERE name = 'Albahaca'));

INSERT INTO PizzaIngredients (idPizza, idIngredient)
VALUES 
    ((SELECT id FROM Pizzas WHERE name = 'Pepperoni'), (SELECT id FROM Ingredients WHERE name = 'Tomate')),
    ((SELECT id FROM Pizzas WHERE name = 'Pepperoni'), (SELECT id FROM Ingredients WHERE name = 'Mozzarella')),
    ((SELECT id FROM Pizzas WHERE name = 'Pepperoni'), (SELECT id FROM Ingredients WHERE name = 'Pepperoni'));

INSERT INTO PizzaIngredients (idPizza, idIngredient)
VALUES 
    ((SELECT id FROM Pizzas WHERE name = 'Hawaiana'), (SELECT id FROM Ingredients WHERE name = 'Tomate')),
    ((SELECT id FROM Pizzas WHERE name = 'Hawaiana'), (SELECT id FROM Ingredients WHERE name = 'Mozzarella')),
    ((SELECT id FROM Pizzas WHERE name = 'Hawaiana'), (SELECT id FROM Ingredients WHERE name = 'Piña')),
    ((SELECT id FROM Pizzas WHERE name = 'Hawaiana'), (SELECT id FROM Ingredients WHERE name = 'Jamón'));





