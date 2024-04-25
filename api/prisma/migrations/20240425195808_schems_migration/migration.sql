/*
  Warnings:

  - Added the required column `avatar` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('USER', 'VOLONTEER');

-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('PSYCHOLOGICAL_SUPPORT', 'HUMANITARIAN_AID', 'LEGAL_ASSISTANCE', 'HOTLINE_SERVICES', 'MEDICAL_HELP', 'INITIATIVES_AND_PROGRAMS');

-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "role" "Roles" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" "Categories" NOT NULL,
    "isActivated" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
