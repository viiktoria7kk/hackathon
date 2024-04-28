/*
  Warnings:

  - You are about to drop the column `usersId` on the `chat` table. All the data in the column will be lost.
  - Added the required column `receiver_id` to the `chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_id` to the `chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chat" DROP COLUMN "usersId",
ADD COLUMN     "receiver_id" TEXT NOT NULL,
ADD COLUMN     "sender_id" TEXT NOT NULL;
