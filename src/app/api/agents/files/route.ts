import { type NextRequest, NextResponse } from 'next/server'
import type { Docs } from '@/generated/prisma'
import { db } from '@/lib/prisma'

export async function GET(req: NextRequest): Promise<Docs[] | NextResponse> {
  const { searchParams } = new URL(req.url)
  const agentId = searchParams.get('agentId')

  if (!agentId) {
    return NextResponse.json({ error: 'Missing AgentId' }, { status: 400 })
  }

  try {
    const files = await db.docs.findMany({
      where: {
        agentId: agentId,
      },
    })

    return NextResponse.json(files)
  } catch (error) {
    console.error('Error fetching files :: In GET /api/agents/files :: ', error)
    return NextResponse.json(
      { error: 'Failed to fetch files' },
      { status: 500 },
    )
  }
}
