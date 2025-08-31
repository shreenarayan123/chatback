 'use client'
import { Bot } from 'lucide-react'
import { useRouter } from 'next/navigation'
// import { headers } from 'next/headers'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/prisma'
import { useAgentStore } from '@/store/agentStore'
import AgentSkeleton from './AgentSkeleton'

type Props = {
  userId: string
}

async function getAgents() {}

// create a getAgents server function
// use that to fetch data and pass it to the child component and make it client

const AgentList = ({ userId }: Props) => {


  const [loading, setLoading] = useState<boolean>(true)
  const { setAgents, agents } = useAgentStore()

  const router = useRouter()

  function handleAgentClick(agentId: string) {
    router.push(`/dashboard/train-agent/${agentId}/file`)
  }

  console.log('userId from agentList: ', userId)

  useEffect(() => {
    const loadData = async () => {
      try {
        const agents = await fetch(`/api/agents?userId=${userId}`).then((res) =>
          res.json(),
        )

        console.log('agents from agentlist: ', agents)
        setAgents(agents)
      } catch (error) {
        console.error('Failed to load agents: ', error)
        toast.error('Failed to load agents. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    if (userId) {
      loadData()
    }
  }, [userId])

  if (loading) {
    return (
      <div className="flex h-full flex-1 flex-center">
        <AgentSkeleton />
      </div>
    )
  }

  if (!agents?.length) {
    return (
      <div className="flex h-full flex-1 flex-center">
        <p className="text-gray-500">No agents found</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-1 flex-start flex-wrap gap-10">
        {agents.map((agent) => (
          <Button
            asChild
            key={agent.id}
            variant={'outline'}
            // onClick={() => handleAgentClick(agent.id)}
            className="cursor-pointer p-4"
          >
            <div className="flex h-40 w-1/3 flex-col items-start justify-start gap-3 rounded-2xl border-[1px] border-gray-200 bg-light-gray ">
              <Bot className="size-10 text-zinc-800" />

              <div className="w-full flex-1">
                <h2 className="font-semibold text-xl text-zinc-700 capitalize">
                  {agent.name}
                </h2>
                <p className="font-medium text-muted-foreground text-sm">
                  {agent.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </>
  )
}

export default AgentList

// Todo: Optimize fetching agents (pagination can be added later), caching could be done,
// todo: and we can use useOptimistic to updtate the UI immediately after creating an agent.
// todo: check if the agent is already in the store before fetching it again.
