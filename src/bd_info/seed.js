/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint no-console: "off" */
require("dotenv").config({ path: ".env.local" });

const { db } = require("@vercel/postgres");
const {
  users,
  stores,
  pizzas,
  orders,
  order_lines,
} = require("./placeholder-data.js");
const bcrypt = require("bcrypt");

// no utilizo la función /src/lib/session/hashPassword por evitar importar rutas relativas sin alias #

// https://github.com/vercel/next-learn/blob/main/dashboard/final-example/scripts/seed.js
// https://nextjs.org/learn/dashboard-app/setting-up-your-database

async function seedUsers(client) {
  try {
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            pwd VARCHAR(100) NOT NULL,
            home_address VARCHAR(255),
            role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'manager', 'customer')) DEFAULT 'customer',
            status VARCHAR(20) NOT NULL CHECK (status IN ('validated', 'pending')) DEFAULT 'pending'
        );
      `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.pwd, 10);
        return client.sql`
          INSERT INTO users (name, email, pwd, home_address, role, status)
          VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.home_address}, ${user.role}, ${user.status})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedStores(client) {
  try {
    // Create the "stores" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS stores (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        address VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(100) NOT NULL,
        postcode VARCHAR(100) NOT NULL,
        phone_number VARCHAR(100),
        manager_id INT NOT NULL UNIQUE REFERENCES Users(id) ON DELETE CASCADE
    );
  `;

    console.log(`Created "invoices" table`);

    // Insert data into the "stores" table
    const insertedStores = await Promise.all(
      stores.map(
        (store) => client.sql`
          INSERT INTO stores (name, address, city, state, postcode, phone_number, manager_id)
          VALUES (${store.name}, ${store.address}, ${store.city}, ${store.state}, ${store.postcode}, ${store.phone_number}, ${store.manager_id})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    console.log(`Seeded ${insertedStores.length} stores`);

    return {
      createTable,
      invoices: insertedStores,
    };
  } catch (error) {
    console.error("Error seeding stores:", error);
    throw error;
  }
}

async function seedPizzas(client) {
  try {
    // Create the "pizzas" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS pizzas (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            photo VARCHAR(100) NOT NULL
        );
      `;

    console.log(`Created "pizzas" table`);

    // Insert data into the "pizzas" table
    const insertedPizzas = await Promise.all(
      pizzas.map(
        (pizza) => client.sql`
          INSERT INTO pizzas (name, description, price, photo)
          VALUES (${pizza.name}, ${pizza.description}, ${pizza.price}, ${pizza.photo})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    console.log(`Seeded ${insertedPizzas.length} pizzas`);

    return {
      createTable,
      customers: insertedPizzas,
    };
  } catch (error) {
    console.error("Error seeding pizzas:", error);
    throw error;
  }
}

async function seedOrders(client) {
  try {
    // Create the "orders" table if it doesn't exist
    const createTable = await client.sql`
          CREATE TABLE IF NOT EXISTS orders (
            id SERIAL PRIMARY KEY,
            user_id INT NOT NULL REFERENCES Users(id),
            store_id INT NOT NULL REFERENCES Stores(id),
            total DECIMAL(10, 2) NOT NULL,
            order_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            sent_date TIMESTAMP
          );
        `;

    console.log(`Created "orders" table`);

    // Insert data into the "orders" table
    const insertedOrders = await Promise.all(
      orders.map(
        (order) => client.sql`
            INSERT INTO orders (user_id, store_id, total, order_date, sent_date)
            VALUES (${order.user_id}, ${order.store_id}, ${order.total}, ${order.order_date}, ${order.sent_date})
            ON CONFLICT (id) DO NOTHING;
          `,
      ),
    );

    console.log(`Seeded ${insertedOrders.length} orders`);

    return {
      createTable,
      customers: insertedOrders,
    };
  } catch (error) {
    console.error("Error seeding orders:", error);
    throw error;
  }
}

async function seedOrderLines(client) {
  try {
    // Create the "order_lines" table if it doesn't exist
    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS order_lines (
                id SERIAL PRIMARY KEY,
                order_id INT NOT NULL REFERENCES Orders(id),
                pizza_id INT NOT NULL REFERENCES Pizzas(id),
                quantity INT NOT NULL CHECK (quantity > 0) DEFAULT 1,
                line_total DECIMAL(10, 2) NOT NULL
            );
          `;

    console.log(`Created "order_lines" table`);

    // Insert data into the "order_lines" table
    const insertedOrderLines = await Promise.all(
      order_lines.map(
        (order_line) => client.sql`
              INSERT INTO order_lines (order_id, pizza_id, quantity, line_total)
              VALUES (${order_line.order_id}, ${order_line.pizza_id}, ${order_line.quantity}, ${order_line.line_total})
              ON CONFLICT (id) DO NOTHING;
            `,
      ),
    );

    console.log(`Seeded ${insertedOrderLines.length} order_lines`);

    return {
      createTable,
      customers: insertedOrderLines,
    };
  } catch (error) {
    console.error("Error seeding order_lines:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedStores(client);
  await seedPizzas(client);
  await seedOrders(client);
  await seedOrderLines(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
