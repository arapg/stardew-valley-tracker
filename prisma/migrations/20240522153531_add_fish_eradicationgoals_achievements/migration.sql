-- CreateTable
CREATE TABLE "Fish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "locations" TEXT[],
    "time" TEXT NOT NULL,
    "weather" TEXT NOT NULL,
    "seasons" TEXT[],
    "url" TEXT NOT NULL,

    CONSTRAINT "Fish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonsterEradicationGoal" (
    "id" SERIAL NOT NULL,
    "monster" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "MonsterEradicationGoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompletedAchievement" (
    "id" INTEGER NOT NULL,
    "farmerId" TEXT NOT NULL,

    CONSTRAINT "CompletedAchievement_pkey" PRIMARY KEY ("farmerId","id")
);

-- CreateTable
CREATE TABLE "CompletedMonsterEradicationGoal" (
    "id" INTEGER NOT NULL,
    "farmerId" TEXT NOT NULL,

    CONSTRAINT "CompletedMonsterEradicationGoal_pkey" PRIMARY KEY ("farmerId","id")
);

-- AddForeignKey
ALTER TABLE "CompletedAchievement" ADD CONSTRAINT "CompletedAchievement_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedMonsterEradicationGoal" ADD CONSTRAINT "CompletedMonsterEradicationGoal_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
