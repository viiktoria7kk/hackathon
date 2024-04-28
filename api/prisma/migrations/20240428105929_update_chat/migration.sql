/*
  Warnings:

  - You are about to drop the column `user_id` on the `chat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "chat" DROP CONSTRAINT "chat_user_id_fkey";

-- AlterTable
ALTER TABLE "chat" DROP COLUMN "user_id",
ADD COLUMN     "usersId" TEXT[];
