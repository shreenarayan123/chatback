-- DropForeignKey
ALTER TABLE "AgentUsage" DROP CONSTRAINT "AgentUsage_agentId_fkey";

-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_agentId_fkey";

-- DropForeignKey
ALTER TABLE "Qna" DROP CONSTRAINT "Qna_agentId_fkey";

-- AlterTable
ALTER TABLE "Agent" ADD COLUMN     "size" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Qna" ADD CONSTRAINT "Qna_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentUsage" ADD CONSTRAINT "AgentUsage_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
