/*
  Warnings:

  - You are about to drop the column `isActivated` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "isActivated",
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true;
