import type { User } from 'better-auth'
import Link from 'next/link.js'
import { useState } from 'react'
import Spinner from '@/components/common/Spinner'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { authClient } from '@/lib/auth-client'
import { useAuthStore } from '@/store/globalStore'

type Props = {
  user: User | null
}

const NavDropdown = ({ user }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { logout } = useAuthStore()
  const onLogout = async () => {
    setLoading(true)
    logout()
    await authClient.signOut()
    window.location.href = '/'
    setLoading(false)
  }
  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          variant={'link'}
          className="cursor-pointer text-md hover:no-underline"
        >
          Help
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user?.image || ''} />
              <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-2 font-semibold">
            <DropdownMenuLabel>
              <p>{user?.name}</p>
              <p className="text-muted-foreground text-sm">{user?.email}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/dashboard/agents">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault()
              }}
              onClick={onLogout}
              disabled={loading}
            >
              {loading ? <Spinner /> : null}
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default NavDropdown
