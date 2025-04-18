import {
  integer,
  pgTable,
  uuid,
  text,
  varchar,
  pgEnum,
  timestamp,
  date,
} from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum("status", [
  "PENDING",
  "APPROVED",
  "REJECTED",
]);
export const ROLE_ENUM = pgEnum("role", ["ADMIN", "SUPER_ADMIN"]);
export const EXPERT_STATUS_ENUM = pgEnum("borrow_status", [
  "INTERN",
  "EMPLOYED",
]);

export const users = pgTable("Admins", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  workId: integer("workId").notNull().unique(),
  password: text("password").notNull(),
  workCard: text("workCard").notNull(),

  status: STATUS_ENUM("status").default("PENDING"),
  role: ROLE_ENUM("role").default("ADMIN"),

  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
});
