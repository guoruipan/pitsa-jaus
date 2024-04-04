-- Crear manualmente la bd con Vercel Postgres, entonces ejecutar esto en la caja 'Query'
-- Escribo las variables con snake case porque en la bd los campos se me guardan en minúscula

-- CREATE TABLES

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    pwd VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    homeAddress VARCHAR(255),
    role VARCHAR(20) NOT NULL DEFAULT 'customer',
    CONSTRAINT check_role CHECK (role IN ('admin', 'manager', 'customer'))
);

-- Guardo el código postal como varchar porque, si bien en España son sólo numéricos, la empresa puede que se expanda a otros países donde este no es el caso
-- Al crear un usuario manager, debe crear al mismo tiempo una tienda asociada. Cuando el manager se quiere dar de baja, borra también la tienda.
CREATE TABLE Stores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    address VARCHAR(255) NOT NULL,
    postCode VARCHAR(100) NOT NULL,
    idManager INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Pizzas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    idUser INT NOT NULL REFERENCES Users(id),
    total DECIMAL(10, 2) NOT NULL,
    orderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sentDate TIMESTAMP
);

CREATE TABLE OrderLines (
    id SERIAL PRIMARY KEY,
    idOrder INT REFERENCES Orders(id),
    idPizza INT REFERENCES Pizzas(id),
    quantity INT,
    totalLine DECIMAL(10, 2)
);

-- INSERT TABLE

INSERT INTO Users (name, pwd, email, homeAddress, role)
VALUES 
    ('admin', 'admin123', 'admin@example.com', 'Avenida Principal, Ciudad', 'admin'),
    ('ana', 'ana', 'ana@example.com', 'Plaza Central, Ciudad', 'manager'),
    ('pepe', 'pepe', 'pepe@example.com', 'Calle 123, Ciudad', 'customer');

INSERT INTO Stores (name, address, postCode, idManager)
VALUES ('PitsaJaus Ana', 'Plaza Central', 50002, 2);

INSERT INTO Pizzas (name, description, price)
VALUES 
    ('Margarita', 'Tomate, mozzarella y albahaca', 8.99),
    ('Pepperoni', 'Tomate, mozzarella y pepperoni', 9.99),
    ('Hawaiana', 'Tomate, mozzarella, piña y jamón', 10.99),
    ('Barbacoa', 'Tomate, mozzarella, carne de res, cebolla y salsa barbacoa', 11.99),
    ('Vegetariana', 'Tomate, mozzarella, champiñones, pimientos y aceitunas', 10.49),
    ('Cuatro quesos', 'Tomate, mozzarella, queso azul, queso de cabra y queso parmesano', 12.99),
    ('Napolitana', 'Tomate, mozzarella, anchoas, aceitunas y alcaparras', 11.49),
    ('Calzone', 'Masa de pizza rellena de tomate, mozzarella, pepperoni y champiñones', 12.49),
    ('Prosciutto e rúcula', 'Tomate, mozzarella, jamón crudo y rúcula', 11.99),
    ('Carbonara', 'Tomate, mozzarella, panceta, huevo y parmesano', 12.99),
    ('Mexicana', 'Tomate, mozzarella, carne de res, jalapeños y guacamole', 11.99),
    ('Bufalina', 'Tomate, mozzarella de búfala y albahaca fresca', 13.49);





