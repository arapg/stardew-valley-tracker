-- CreateTable
CREATE TABLE "Room" (
    "name" TEXT NOT NULL,
    "reward" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Bundle" (
    "name" TEXT NOT NULL,
    "reward" TEXT NOT NULL,
    "slots" INTEGER NOT NULL,
    "roomName" TEXT NOT NULL,

    CONSTRAINT "Bundle_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "bundleName" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farmer" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SelectedBundle" (
    "name" TEXT NOT NULL,
    "farmerId" INTEGER NOT NULL,

    CONSTRAINT "SelectedBundle_pkey" PRIMARY KEY ("farmerId","name")
);

-- CreateTable
CREATE TABLE "CompletedBundle" (
    "name" TEXT NOT NULL,
    "farmerId" INTEGER NOT NULL,

    CONSTRAINT "CompletedBundle_pkey" PRIMARY KEY ("farmerId","name")
);

-- CreateTable
CREATE TABLE "CompletedRoom" (
    "name" TEXT NOT NULL,
    "farmerId" INTEGER NOT NULL,

    CONSTRAINT "CompletedRoom_pkey" PRIMARY KEY ("farmerId","name")
);

-- CreateTable
CREATE TABLE "CompletedItem" (
    "id" INTEGER NOT NULL,
    "farmerId" INTEGER NOT NULL,

    CONSTRAINT "CompletedItem_pkey" PRIMARY KEY ("farmerId","id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_name_key" ON "Room"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Bundle_name_key" ON "Bundle"("name");

-- AddForeignKey
ALTER TABLE "Bundle" ADD CONSTRAINT "Bundle_roomName_fkey" FOREIGN KEY ("roomName") REFERENCES "Room"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_bundleName_fkey" FOREIGN KEY ("bundleName") REFERENCES "Bundle"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SelectedBundle" ADD CONSTRAINT "SelectedBundle_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedBundle" ADD CONSTRAINT "CompletedBundle_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedRoom" ADD CONSTRAINT "CompletedRoom_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedItem" ADD CONSTRAINT "CompletedItem_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
