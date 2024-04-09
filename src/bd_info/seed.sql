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
    store_id INT NOT NULL REFERENCES Stores(id),
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
    ('Ana', 'ana', 'ana@example.com', 'Plaza Central, Ciudad', 'manager'),
    ('Bea', 'bea', 'bea@example.com', 'Avenida Principal, Ciudad', 'manager'),
    ('Carlos', 'carlos123', 'carlos@example.com', 'Calle Mayor, 45', 'manager'),
    ('Diana', 'diana456', 'diana@store.com', 'Calle Libertad, 10', 'manager'),
    ('Elena', 'elena789', 'elena@company.com', 'Avenida del Sol, 21', 'manager'),
    ('Francisco', 'francisco00', 'francisco@email.com', 'Calle Luna, 32', 'manager'),
    ('Gloria', 'gloria111', 'gloria@store.com', 'Calle Estacion, 1', 'manager'),
    ('Hugo', 'hugo222', 'hugo@company.com', null, 'manager'),   
    ('Irene', 'irene333', 'irene@email.com', 'Calle Principal, 7', 'manager'),
    ('Javier', 'javier444', 'javier@store.com', 'Calle Norte, 56', 'manager'),
    ('Karina', 'karina555', 'karina@company.com', 'Calle Sur, 89', 'manager'),
    ('Luis', 'luis666', 'luis@email.com', 'Calle Oriente, 23', 'manager'),
    ('Pepe', 'pepe', 'pepe@example.com', 'Calle 123, Ciudad', 'customer');

INSERT INTO Stores (name, address, city, state, postcode, phone_number, manager_id)
VALUES 
    ('PitsaJaus Ana', 'Plaza Central', 'Zaragoza', 'España', 50002, '611611611', 2),
    ('PitsaJaus Bea', 'Avenida Principal', 'Zaragoza', 'España',  50010, '622622622' , 3),
    ('Supermercado Estrella', 'Calle Mayor, 123', 'Zaragoza', 'España', 50003, '633633633', 4),
  ('Librería Cervantes', 'Calle Libertad, 45', 'Zaragoza', 'España', 50004, '644644644', 5),
  ('Farmacia San Marcos', 'Calle Independencia, 78', 'Zaragoza', 'España', 50005, '655655655', 6),
  ('Cafetería La Pausa', 'Calle Aragon, 21', 'Zaragoza', 'España', 50006, '666666666', 7),
  ('Tienda de Ropa Moda', 'Calle Delicias, 34', 'Zaragoza', 'España', 50007, '677677677', 8),
  ('Panadería La Espiga Dorada', 'Calle Huesca, 56', 'Zaragoza', 'España', 50008, '688688688', 9),
  ('Joyería Brillante', 'Calle Teruel, 7', 'Zaragoza', 'España', 50009, '699699699', 10),
  ('Carnicería El Toro', 'Calle Valencia, 89', 'Zaragoza', 'España', 50011, '700700700', 11),
  ('Frutería La Huerta', 'Calle Mallorca, 23', 'Zaragoza', 'España', 50012, '711711711', 12),
  ('Pescadería El Mar', 'Calle Menorca, 45', 'Zaragoza', 'España', 50013, '722722722', 13);

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





