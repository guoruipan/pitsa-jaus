-- Crear manualmente la bd con Vercel Postgres, entonces ejecutar esto en la caja 'Query'

-- CREATE TABLES
CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    pwd VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    direccion VARCHAR(255),
    admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE Pizzas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Ingredientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

CREATE TABLE Pedidos (
    id SERIAL PRIMARY KEY,
    idUsuario INT NOT NULL REFERENCES Usuarios(id),
    total DECIMAL(10, 2) NOT NULL,
    fechaPedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fechaEnvio TIMESTAMP
);

CREATE TABLE PedidoLinea (
    id SERIAL PRIMARY KEY,
    idPedido INT REFERENCES Pedidos(id),
    idPizza INT REFERENCES Pizzas(id),
    cantidad INT,
    totalLinea DECIMAL(10, 2)
);

CREATE TABLE IngredientesPizza (
    idPizza INT NOT NULL REFERENCES Pizzas(id),
    idIngrediente INT NOT NULL REFERENCES Ingredientes(id),
    PRIMARY KEY (idPizza, idIngrediente)
);

-- INSERT TABLE

-- Insertar datos en la tabla Usuarios
INSERT INTO Usuarios (nombre, pwd, email, direccion, admin)
VALUES 
    ('usuario1', 'password1', 'usuario1@example.com', 'Calle 123, Ciudad', FALSE),
    ('admin', 'admin123', 'admin@example.com', 'Avenida Principal, Ciudad', TRUE),
    ('usuario2', 'password2', 'usuario2@example.com', 'Plaza Central, Ciudad', FALSE);

-- Insertar datos en la tabla Pizzas
INSERT INTO Pizzas (nombre, descripcion, precio)
VALUES 
    ('Margarita', 'Tomate, mozzarella y albahaca', 8.99),
    ('Pepperoni', 'Tomate, mozzarella y pepperoni', 9.99),
    ('Hawaiana', 'Tomate, mozzarella, piña y jamón', 10.99);

-- Insertar datos en la tabla Ingredientes
INSERT INTO Ingredientes (nombre, descripcion)
VALUES 
    ('Tomate', 'Tomate fresco cortado en rodajas'),
    ('Mozzarella', 'Queso mozzarella rallado'),
    ('Albahaca', 'Hojas frescas de albahaca'),
    ('Pepperoni', 'Salami picante en rodajas'),
    ('Piña', 'Rodajas de piña fresca'),
    ('Jamón', 'Jamón cocido en dados');

-- Insertar datos en la tabla Pedidos (de momento no)

-- Insertar datos en la tabla PedidoLinea (de momento no)

-- Insertar datos en la tabla IngredientesPizza
-- Para la Pizza Margarita
INSERT INTO IngredientesPizza (idPizza, idIngrediente)
VALUES 
    ((SELECT id FROM Pizzas WHERE nombre = 'Margarita'), (SELECT id FROM Ingredientes WHERE nombre = 'Tomate')),
    ((SELECT id FROM Pizzas WHERE nombre = 'Margarita'), (SELECT id FROM Ingredientes WHERE nombre = 'Mozzarella')),
    ((SELECT id FROM Pizzas WHERE nombre = 'Margarita'), (SELECT id FROM Ingredientes WHERE nombre = 'Albahaca'));

-- Para la Pizza Pepperoni
INSERT INTO IngredientesPizza (idPizza, idIngrediente)
VALUES 
    ((SELECT id FROM Pizzas WHERE nombre = 'Pepperoni'), (SELECT id FROM Ingredientes WHERE nombre = 'Tomate')),
    ((SELECT id FROM Pizzas WHERE nombre = 'Pepperoni'), (SELECT id FROM Ingredientes WHERE nombre = 'Mozzarella')),
    ((SELECT id FROM Pizzas WHERE nombre = 'Pepperoni'), (SELECT id FROM Ingredientes WHERE nombre = 'Pepperoni'));

-- Para la Pizza Hawaiana
INSERT INTO IngredientesPizza (idPizza, idIngrediente)
VALUES 
    ((SELECT id FROM Pizzas WHERE nombre = 'Hawaiana'), (SELECT id FROM Ingredientes WHERE nombre = 'Tomate')),
    ((SELECT id FROM Pizzas WHERE nombre = 'Hawaiana'), (SELECT id FROM Ingredientes WHERE nombre = 'Mozzarella')),
    ((SELECT id FROM Pizzas WHERE nombre = 'Hawaiana'), (SELECT id FROM Ingredientes WHERE nombre = 'Piña')),
    ((SELECT id FROM Pizzas WHERE nombre = 'Hawaiana'), (SELECT id FROM Ingredientes WHERE nombre = 'Jamón'));





