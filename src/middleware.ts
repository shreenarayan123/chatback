import { getSessionCookie } from 'better-auth/cookies'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const { nextUrl } = req
  const sessionCookie = getSessionCookie(req)

  const isLoggedIn = !!sessionCookie
  const isOnProtectedRoute = nextUrl.pathname.startsWith('/dashboard')
  const isOnAuthRoute = nextUrl.pathname.startsWith('/auth')

  // Redirect unauthenticated users from protected routes
  if (isOnProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }

  // Prevent logged-in users from visiting /auth pages
  if (isOnAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
