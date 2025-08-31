import { NextResponse } from 'next/server'
import { db } from '@/lib/prisma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')

  if (!userId) {
    return NextResponse.json(
      {
        error: 'Missing UserId',
      },
      { status: 400 },
    )
  }

  try {
    const agents = await db.agent.findMany({
      where: {
        userId: userId,
      },
    })

    return NextResponse.json(agents)
  } catch (error) {
    console.error('Error fetching agents :: In GET /api/agents :: ', error)
    return NextResponse.json(
      { error: 'Failed to fetch agents' },
      { status: 500 },
    )
  }
}
