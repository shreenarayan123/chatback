'use client'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import NavLink from './common/NavLink'

const Appbar = () => {
  const pathname = usePathname()
  const isCreateAgentPage = pathname.includes('/train-agent')

  if (isCreateAgentPage) {
    return <></>
  }

  return (
    <nav className="flex w-full items-center justify-center gap-5 ">
      <Button variant="ghost" asChild>
        <NavLink href={'/agents'}>Agents</NavLink>
      </Button>
      <Button variant="ghost" asChild>
        <NavLink href="/usage">Usage</NavLink>
      </Button>
      <Button variant="ghost" asChild>
        <NavLink href="/settings">Settings</NavLink>
      </Button>
    </nav>
  )
}
export default Appbar
