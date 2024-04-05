-- Crear manualmente la bd con Vercel Postgres, entonces ejecutar esto en la caja 'Query'
-- Escribo las variables con snake case porque en la bd los campos se me guardan en minúscula

-- CREATE TABLES

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  pwd VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  home_address VARCHAR(255),
  role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'manager', 'customer')) DEFAULT 'customer'
);

-- Guardo el código postal como varchar porque, si bien en España son sólo numéricos, la empresa puede que se expanda a otros países donde este no es el caso
-- Al crear un usuario manager, debe crear al mismo tiempo una tienda asociada. Cuando el manager se quiere dar de baja, borra también la tienda.
CREATE TABLE Stores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    address VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    postcode VARCHAR(100) NOT NULL,
    phone_number VARCHAR(100),
    manager_id INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Pizzas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES Users(id),
    total DECIMAL(10, 2) NOT NULL,
    order_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    sent_date TIMESTAMP
);

CREATE TABLE Order_lines (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES Orders(id),
    pizza_id INT NOT NULL REFERENCES Pizzas(id),
    quantity INT NOT NULL CHECK (quantity > 0) DEFAULT 1,
    line_total DECIMAL(10, 2) NOT NULL
);

-- INSERT TABLE

INSERT INTO Users (name, pwd, email, home_address, role)
VALUES 
    ('admin', 'admin123', 'admin@example.com', null, 'admin'),
    ('ana', 'ana', 'ana@example.com', 'Plaza Central, Ciudad', 'manager'),
    ('bea', 'bea', 'bea@example.com', 'Avenida Principal, Ciudad', 'manager'),
    ('pepe', 'pepe', 'pepe@example.com', 'Calle 123, Ciudad', 'customer');

INSERT INTO Stores (name, address, city, state, postcode, phone_number, manager_id)
VALUES 
    ('PitsaJaus Ana', 'Plaza Central', 'Zaragoza', 'España', 50002, '611611611', 2),
    ('PitsaJaus Bea', 'Avenida Principal', 'Zaragoza', 'España',  50010, '622622622' , 4);

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





