// app/actions/agent.ts
'use server'

import { randomUUID } from 'node:crypto'
import { db } from '@/lib/prisma' // your prisma wrapper

export async function createAgent(
  userId: string,
  name: string,
  description?: string,
) {
  const newAgent = await db.agent.create({
    data: {
      userId,
      name,
      description,
      apiKey: randomUUID(),
      usage: {
        create: {},
      },
    },
  })

  return newAgent
}
