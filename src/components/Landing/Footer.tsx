import Image from 'next/image'
import Link from 'next/link.js'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-20 pb-30 text-white">
      <div className="container flex ">
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="rounded-xl"
              />
            </Link>
            <Link href="/">
              <h2 className="font-bold text-2xl">Chatback</h2>
            </Link>
          </div>
          <p className="text-muted-foreground">
            Copyright © 2025 Chatback. All rights reserved.
          </p>
        </div>
        <div className="flex flex-1 justify-between px-10">
          <div>
            <h3 className="font-bold text-lg">PRODUCT</h3>
            <ul className="mt-5 flex flex-col gap-3 text-muted-foreground">
              <li>
                <Link href="/">Customer Service</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">RESOURCES</h3>
            <ul className="mt-5 flex flex-col gap-3 text-muted-foreground">
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">Guide</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Updates</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg ">COMPANY</h3>
            <ul className="mt-5 flex flex-col gap-3 text-muted-foreground">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Terms</Link>
              </li>
              <li>
                <Link href="/">DPA</Link>
              </li>
              <li>
                <Link href="/">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
