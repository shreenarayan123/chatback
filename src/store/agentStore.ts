import { create } from 'zustand'
import type { Agent } from '@/generated/prisma/index'

interface AgentStoreType {
  agents: Agent[] | null
  setAgents: (agents: Agent[]) => void
}

export const useAgentStore = create<AgentStoreType>((set) => ({
  agents: null,
  setAgents: (agents) => set({ agents }),
}))
