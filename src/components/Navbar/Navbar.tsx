'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import NavDropdown from './NavDropdown'

const Navbar = () => {
  const { data } = authClient.useSession()
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full border-b backdrop-blur-lg">
      <div className="container flex-center py-4">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Chatback"
              width={30}
              height={30}
              className="rounded-lg"
            />
            <h1 className="font-bold text-xl">Chatback</h1>
          </Link>
        </div>

        {!data?.user && pathname === '/' && (
          <>
            <nav className="flex-1 flex-center gap-14 font-semibold text-md tracking-wide">
              <Button
                variant="link"
                asChild
                className="cursor-pointer p-0 font-semibold hover:no-underline"
              >
                <Link href="#highlights" scroll>
                  Features
                </Link>
              </Button>
              <Button
                variant="link"
                asChild
                className="cursor-pointer p-0 font-semibold hover:no-underline"
              >
                <Link href="#pricing">Pricing</Link>
              </Button>
              <Button
                variant="link"
                asChild
                className="cursor-pointer p-0 font-semibold hover:no-underline"
              >
                <Link href="#contact">Contact</Link>
              </Button>
            </nav>
            <div className="flex-1 flex items-center justify-end">
              <Button asChild className="bg-zinc-900 text-white ">
                <Link href="/auth/signin">Try it for free</Link>
              </Button>
            </div>
          </>
        )}

        {data?.user && (pathname !== '/' || !pathname.startsWith('/auth')) && (
          <NavDropdown user={data.user} />
        )}
      </div>
    </header>
  )
}

export default Navbar
