-- CreateTable
CREATE TABLE "CreatePickSlip" (
    "id" SERIAL NOT NULL,
    "gender" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "partnerName" TEXT NOT NULL,
    "pickA" TEXT NOT NULL,
    "pickB" TEXT NOT NULL,
    "uniqueUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CreatePickSlip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CreatePickSlip_uniqueUrl_key" ON "CreatePickSlip"("uniqueUrl");
