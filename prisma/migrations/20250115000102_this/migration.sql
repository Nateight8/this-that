/*
  Warnings:

  - The primary key for the `CreatePickSlip` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "CreatePickSlip" DROP CONSTRAINT "CreatePickSlip_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CreatePickSlip_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CreatePickSlip_id_seq";
