/*
  Warnings:

  - The primary key for the `CompletedBundle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CompletedItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CompletedRoom` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Farmer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SelectedBundle` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "CompletedBundle" DROP CONSTRAINT "CompletedBundle_farmerId_fkey";

-- DropForeignKey
ALTER TABLE "CompletedItem" DROP CONSTRAINT "CompletedItem_farmerId_fkey";

-- DropForeignKey
ALTER TABLE "CompletedRoom" DROP CONSTRAINT "CompletedRoom_farmerId_fkey";

-- DropForeignKey
ALTER TABLE "SelectedBundle" DROP CONSTRAINT "SelectedBundle_farmerId_fkey";

-- AlterTable
ALTER TABLE "CompletedBundle" DROP CONSTRAINT "CompletedBundle_pkey",
ALTER COLUMN "farmerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CompletedBundle_pkey" PRIMARY KEY ("farmerId", "name");

-- AlterTable
ALTER TABLE "CompletedItem" DROP CONSTRAINT "CompletedItem_pkey",
ALTER COLUMN "farmerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CompletedItem_pkey" PRIMARY KEY ("farmerId", "id");

-- AlterTable
ALTER TABLE "CompletedRoom" DROP CONSTRAINT "CompletedRoom_pkey",
ALTER COLUMN "farmerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CompletedRoom_pkey" PRIMARY KEY ("farmerId", "name");

-- AlterTable
ALTER TABLE "Farmer" DROP CONSTRAINT "Farmer_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Farmer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Farmer_id_seq";

-- AlterTable
ALTER TABLE "SelectedBundle" DROP CONSTRAINT "SelectedBundle_pkey",
ALTER COLUMN "farmerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "SelectedBundle_pkey" PRIMARY KEY ("farmerId", "name");

-- AddForeignKey
ALTER TABLE "SelectedBundle" ADD CONSTRAINT "SelectedBundle_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedBundle" ADD CONSTRAINT "CompletedBundle_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedRoom" ADD CONSTRAINT "CompletedRoom_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedItem" ADD CONSTRAINT "CompletedItem_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
