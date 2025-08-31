import { Skeleton } from '@/components/ui/skeleton'

const AgentSkeleton = () => {
  return (
    <div className="flex h-full w-full gap-4">
      <Skeleton className="mb-4 h-40 w-1/3 bg-zinc-300" />
      <Skeleton className="mb-4 h-40 w-1/3 bg-zinc-300" />
      <Skeleton className="mb-4 h-40 w-1/3 bg-zinc-300" />
    </div>
  )
}

export default AgentSkeleton
