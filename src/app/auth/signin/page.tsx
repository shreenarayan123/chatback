'use client'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'
import { googleSignIn } from '@/lib/google-signin'

const SignInPage = () => {
  return (
    <div className="flex-center flex-col gap-10 ">
      <div className="flex-center flex-col gap-2">
        <h1 className="font-bold text-4xl text-zinc-900">Welcome</h1>
        <p className="text-center text-lg text-muted-foreground">
          Sign in to continue
        </p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <Button
          onClick={async () => await googleSignIn()}
          className="p-6 text-base"
        >
          <FcGoogle className="size-6" />
          Continue with Google
        </Button>
      </div>
    </div>
  )
}

export default SignInPage
