import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black'>
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <div
        id="hero"
        className="container z-40 scroll-smooth min-h-[680px] flex-center flex-col"
      >
        <Button
          variant={'outline'}
          
          asChild
          className="mb-10 cursor-pointer rounded-full px-12 text-foreground/70 text-md shadow-none hover:bg-background"
        >
          <Link href={'#working'}>
          
          See How It Works
          </Link>
        </Button>
        <h1 className="bg-gradient-to-br from-zinc-800 to-zinc-700 bg-clip-text text-center font-black text-7xl text-transparent leading-20 ">
          Upload. Train. Chat.
          <br />
          It’s That Simple.
        </h1>
        <p className="mt-10 text-center font-semibold text-foreground/70 text-xl">
          Create custom AI chatbots trained on your FAQs, product docs,
          <br />
          internal wikis, and more — in minutes.
        </p>
        <Button
          asChild
          className="mt-10 cursor-pointer rounded-lg bg-zinc-900 p-5 text-lg text-white shadow-grad"
        >
          <Link href="/auth/signin">Buid your agent</Link>
        </Button>
      </div>
    </div>
  )
}

export default Hero
