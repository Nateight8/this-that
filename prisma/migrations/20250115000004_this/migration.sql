/*
  Warnings:

  - You are about to drop the column `pickA` on the `CreatePickSlip` table. All the data in the column will be lost.
  - You are about to drop the column `pickB` on the `CreatePickSlip` table. All the data in the column will be lost.
  - You are about to drop the column `uniqueUrl` on the `CreatePickSlip` table. All the data in the column will be lost.
  - Added the required column `first` to the `CreatePickSlip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `second` to the `CreatePickSlip` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CreatePickSlip_uniqueUrl_key";

-- AlterTable
ALTER TABLE "CreatePickSlip" DROP COLUMN "pickA",
DROP COLUMN "pickB",
DROP COLUMN "uniqueUrl",
ADD COLUMN     "first" TEXT NOT NULL,
ADD COLUMN     "second" TEXT NOT NULL;
