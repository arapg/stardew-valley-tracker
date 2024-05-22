/*
  Warnings:

  - Added the required column `reward` to the `MonsterEradicationGoal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MonsterEradicationGoal" ADD COLUMN     "reward" TEXT NOT NULL;
