import { headers } from 'next/headers'
import { Suspense } from 'react'
import CreateAgent from '@/components/CreateAgent'
import { authClient } from '@/lib/auth-client'
import AgentList from './AgentList'
import AgentSkeleton from './AgentSkeleton'

const AgentsPage = async () => {
  const { data } = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  })

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between ">
        <h1 className="font-extrabold text-3xl">AI Agents</h1>
        <CreateAgent />
      </div>

      <Suspense fallback={<AgentSkeleton />}>
        {data?.user.id ? <AgentList userId={data.user.id} /> : null}
      </Suspense>
    </div>
  )
}

export default AgentsPage
