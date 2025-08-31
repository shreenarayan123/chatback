import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import LandingPage from '@/components/Landing/LandingPage'
import { authClient } from '@/lib/auth-client'

const getUserDetails = async () => {
  const data = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
      cache: 'no-store',
    },
  })

  return data
}

export default async function Home() {
  const session = await getUserDetails()

  if (session.data?.user) {
    redirect('/agents')
  }

  return (
    <main>
      <LandingPage />
    </main>
  )
}
