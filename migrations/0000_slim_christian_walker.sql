CREATE TYPE "public"."borrow_status" AS ENUM('BORROWED', 'RETURNED');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('ADMIN', 'SUPER_ADMIN');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('PENDING', 'APPROVED', 'REJECTED');--> statement-breakpoint
CREATE TABLE "Admins" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"workId" integer NOT NULL,
	"password" text NOT NULL,
	"workCard" text NOT NULL,
	"status" "status" DEFAULT 'PENDING',
	"role" "role" DEFAULT 'ADMIN',
	"last_activity_date" date DEFAULT now(),
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "Admins_id_unique" UNIQUE("id"),
	CONSTRAINT "Admins_email_unique" UNIQUE("email"),
	CONSTRAINT "Admins_workId_unique" UNIQUE("workId")
);
