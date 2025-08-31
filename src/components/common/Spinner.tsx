import { Loader2 } from 'lucide-react'

type Props = {
  className?: string
}

const Spinner = ({ className }: Props) => {
  return (
    <Loader2 className={`size-5 animate-spin text-zinc-800 ${className}`} />
  )
}

export default Spinner
