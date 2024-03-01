/*
  Warnings:

  - You are about to drop the column `notification` on the `UserSetting` table. All the data in the column will be lost.
  - Added the required column `notificationsOn` to the `UserSetting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserSetting" DROP COLUMN "notification",
ADD COLUMN     "notificationsOn" BOOLEAN NOT NULL;
