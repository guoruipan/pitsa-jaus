// https://github.com/vercel/next-learn/blob/main/dashboard/final-example/app/lib/placeholder-data.js

const users = [
  {
    name: "admin",
    email: "admin@example.com",
    pwd: "admin123",
    home_address: null,
    role: "admin",
    status: "validated",
  },
  {
    name: "Ana",
    email: "ana@example.com",
    pwd: "ana",
    home_address: "Plaza Central, Ciudad",
    role: "manager",
    status: "validated",
  },
  {
    name: "Bea",
    email: "bea@example.com",
    pwd: "bea",
    home_address: "Avenida Principal, Ciudad",
    role: "manager",
    status: "validated",
  },
  {
    name: "Carlos",
    email: "carlos@example.com",
    pwd: "carlos123",
    home_address: "Calle Mayor, 45",
    role: "manager",
    status: "validated",
  },
  {
    name: "Diana",
    email: "diana@store.com",
    pwd: "diana456",
    home_address: "Calle Libertad, 10",
    role: "manager",
    status: "validated",
  },
  {
    name: "Elena",
    email: "elena@company.com",
    pwd: "elena789",
    home_address: "Avenida del Sol, 21",
    role: "manager",
    status: "validated",
  },
  {
    name: "Francisco",
    email: "francisco@email.com",
    pwd: "francisco00",
    home_address: "Calle Luna, 32",
    role: "manager",
    status: "validated",
  },
  {
    name: "Gloria",
    email: "gloria@store.com",
    pwd: "gloria111",
    home_address: "Calle Estacion, 1",
    role: "manager",
    status: "pending",
  },
  {
    name: "Hugo",
    email: "hugo@company.com",
    pwd: "hugo222",
    home_address: null,
    role: "manager",
    status: "pending",
  },
  {
    name: "Irene",
    email: "irene@email.com",
    pwd: "irene333",
    home_address: "Calle Principal, 7",
    role: "manager",
    status: "pending",
  },
  {
    name: "Javier",
    email: "javier@store.com",
    pwd: "javier444",
    home_address: "Calle Norte, 56",
    role: "manager",
    status: "pending",
  },
  {
    name: "Karina",
    email: "karina@company.com",
    pwd: "karina555",
    home_address: "Calle Sur, 89",
    role: "manager",
    status: "pending",
  },
  {
    name: "Luis",
    email: "luis@email.com",
    pwd: "luis666",
    home_address: "Calle Oriente, 23",
    role: "manager",
    status: "pending",
  },
  {
    name: "Pepe",
    email: "pepe@example.com",
    pwd: "pepe",
    home_address: "Calle 123, Ciudad",
    role: "customer",
    status: "validated",
  },
];

const stores = [];

const pizzas = [
  {
    name: "Margarita",
    description: "Tomate, mozzarella y albahaca",
    price: 8.99,
    photo: "margarita.webp",
  },
  {
    name: "Pepperoni",
    description: "Tomate, mozzarella y pepperoni",
    price: 9.99,
    photo: "pepperoni.webp",
  },
  {
    name: "Hawaiana",
    description: "Tomate, mozzarella, piña y jamón",
    price: 10.99,
    photo: "hawaiana.jpg",
  },
  {
    name: "Barbacoa",
    description: "Tomate, mozzarella, carne de res, cebolla y salsa barbacoa",
    price: 11.99,
    photo: "barbacoa.jpg",
  },
  {
    name: "Vegetariana",
    description: "Tomate, mozzarella, champiñones, pimientos y aceitunas",
    price: 10.49,
    photo: "vegetariana.webp",
  },
  {
    name: "Cuatro quesos",
    description:
      "Tomate, mozzarella, queso azul, queso de cabra y queso parmesano",
    price: 12.99,
    photo: "cuatroquesos.avif",
  },
  {
    name: "Napolitana",
    description: "Tomate, mozzarella, anchoas, aceitunas y alcaparras",
    price: 11.49,
    photo: "napolitana.jpg",
  },
  {
    name: "Calzone",
    description:
      "Masa de pizza rellena de tomate, mozzarella, pepperoni y champiñones",
    price: 12.49,
    photo: "calzone.webp",
  },
  {
    name: "Prosciutto e rúcula",
    description: "Tomate, mozzarella, jamón crudo y rúcula",
    price: 11.99,
    photo: "prosciuttoerucula.jpg",
  },
  {
    name: "Carbonara",
    description: "Tomate, mozzarella, panceta, huevo y parmesano",
    price: 12.99,
    photo: "carbonara.avif",
  },
  {
    name: "Mexicana",
    description: "Tomate, mozzarella, carne de res, jalapeños y guacamole",
    price: 11.99,
    photo: "mexicana.jpg",
  },
  {
    name: "Bufalina",
    description: "Tomate, mozzarella de búfala y albahaca fresca",
    price: 13.49,
    photo: "bufalina.jpg",
  },
];

const orders = [];

const order_lines = [];

module.exports = {
  users,
  stores,
  pizzas,
  orders,
  order_lines,
};
