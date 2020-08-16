
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
-- creates table for book library (this stores book data that is used for user collections)
CREATE TABLE "book" (
	"id" SERIAL PRIMARY KEY,
	"api_id" VARCHAR (12),
	"img_url" VARCHAR (1000),
	"title" VARCHAR (1000),
	"author" VARCHAR (100),
	"publisher" VARCHAR (1000),
	"publish_date" VARCHAR (100),
	"description" VARCHAR (5000),
	"page_count" VARCHAR (10000)
);

-- create junction table to reference book id's to the user is
CREATE TABLE "collection" (
	"book_id" INT references "book",
	"user_id" INT references "user",
	"is_complete" BOOLEAN DEFAULT FALSE
);

