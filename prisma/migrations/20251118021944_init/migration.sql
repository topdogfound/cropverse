-- CreateEnum
CREATE TYPE "Category" AS ENUM ('VEGETABLE', 'FRUIT', 'GRAIN', 'LEGUME', 'NUT', 'HERB', 'SPICE');

-- CreateTable
CREATE TABLE "Crop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "Crop_pkey" PRIMARY KEY ("id")
);
