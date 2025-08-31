/*
  Warnings:

  - You are about to drop the column `size` on the `Agent` table. All the data in the column will be lost.
  - The `status` column on the `Subscription` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `credits` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `creditsUsed` on the `user` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('active', 'canceled', 'trialing', 'incomplete', 'past_due');

-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('text', 'docs', 'qna');

-- DropIndex
DROP INDEX "Subscription_userId_key";

-- AlterTable
ALTER TABLE "Agent" DROP COLUMN "size";

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "status",
ADD COLUMN     "status" "SubscriptionStatus";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "credits",
DROP COLUMN "creditsUsed";

-- CreateTable
CREATE TABLE "AgentSize" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "sourceType" "SourceType" NOT NULL,
    "size" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AgentSize_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AgentSize_agentId_sourceType_key" ON "AgentSize"("agentId", "sourceType");

-- CreateIndex
CREATE INDEX "Subscription_userId_idx" ON "Subscription"("userId");

-- AddForeignKey
ALTER TABLE "AgentSize" ADD CONSTRAINT "AgentSize_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
