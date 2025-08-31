import { headers } from 'next/headers'
import type React from 'react'
import { Redirect } from '@/components/Redirect'
import { authClient } from '@/lib/auth-client'

interface Props {
  children: React.ReactNode
}

export default async function MainLayout(props: Props) {
  const { data } = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
      cache: 'no-store',
    },
  })

  if (!data?.user) {
    return <Redirect to={'/'} />
  }
  return <>{props.children}</>
}
