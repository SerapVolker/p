import { db } from "../src/lib/db";
import { products } from "../src/lib/db/schema";

const pizzas = [
  { name: "Маргарита", price: 450, description: "Томатный соус, моцарелла, базилик", image: "/pizza1.jpg" },
  { name: "Пепперони", price: 520, description: "Пепперони, моцарелла, томатный соус", image: "/pizza2.jpg" },
  { name: "Четыре сыра", price: 580, description: "Моцарелла, пармезан, горгонзола, фета", image: "/pizza3.jpg" },
  { name: "Гавайская", price: 490, description: "Курица, ананас, моцарелла", image: "/pizza4.jpg" },
  { name: "Карбонара", price: 620, description: "Бекон, яйцо, пармезан, сливочный соус", image: "/pizza5.jpg" },
  { name: "Мясная", price: 680, description: "Бекон, ветчина, пепперони", image: "/pizza6.jpg" },
  { name: "Вегетарианская", price: 510, description: "Перец, грибы, оливки, кукуруза", image: "/pizza7.jpg" },
  { name: "Дьябола", price: 560, description: "Острая пепперони, халапеньо, моцарелла", image: "/pizza8.jpg" },
];

async function seed() {
  console.log("🌱 Создаём таблицу и добавляем пиццы...");
  

  await db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL
    )
  `);
  

  for (const pizza of pizzas) {
    await db.insert(products).values(pizza);
  }
  
  console.log("✅ Готово! Добавлено 8 пицц.");
  process.exit(0);
}

seed();