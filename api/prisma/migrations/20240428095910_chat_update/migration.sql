/*
  Warnings:

  - You are about to drop the column `updated_at` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the `messages` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `content` to the `chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_chat_id_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_user_id_fkey";

-- AlterTable
ALTER TABLE "chat" DROP COLUMN "updated_at",
ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "timestamp",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "messages";
