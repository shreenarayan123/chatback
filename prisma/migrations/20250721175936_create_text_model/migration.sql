/*
  Warnings:

  - You are about to drop the column `qnaSource` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `textSource` on the `Agent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Agent" DROP COLUMN "qnaSource",
DROP COLUMN "textSource";

-- CreateTable
CREATE TABLE "Text" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Text_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Text_agentId_content_key" ON "Text"("agentId", "content");

-- AddForeignKey
ALTER TABLE "Text" ADD CONSTRAINT "Text_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
