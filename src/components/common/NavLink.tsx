'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils' // Optional: for conditional classnames

type NavLinkProps = {
  href: string
  exact?: boolean
  className?: string
  activeClassName?: string
  children: React.ReactNode
}

function NavLink({
  href,
  exact = false,
  className = '',
  activeClassName = 'bg-accent text-accent-foreground',
  children,
}: NavLinkProps) {
  const pathname = usePathname()

  const isActive = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link href={href} className={cn(className, isActive && activeClassName)}>
      {children}
    </Link>
  )
}

export default NavLink
