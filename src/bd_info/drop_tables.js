/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint no-console: "off" */
require("dotenv").config({ path: ".env.local" });

const { db } = require("@vercel/postgres");

async function dropUsers(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS users;`;
    console.log(`Dropped "users" table`);
  } catch (error) {
    console.error("Error dropping users table:", error);
    throw error;
  }
}

async function dropStores(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS stores;`;
    console.log(`Dropped "stores" table`);
  } catch (error) {
    console.error("Error dropping stores table:", error);
    throw error;
  }
}

async function dropPizzas(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS pizzas;`;
    console.log(`Dropped "pizzas" table`);
  } catch (error) {
    console.error("Error dropping pizzas table:", error);
    throw error;
  }
}

async function dropOrders(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS orders;`;
    console.log(`Dropped "orders" table`);
  } catch (error) {
    console.error("Error dropping orders table:", error);
    throw error;
  }
}

async function dropOrderLines(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS order_lines;`;
    console.log(`Dropped "users" table`);
  } catch (error) {
    console.error("Error dropping users table:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await dropOrderLines(client);
  await dropOrders(client);
  await dropPizzas(client);
  await dropStores(client);
  await dropUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to drop tables in the database:",
    err,
  );
});
