
import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  price: real("price").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
});