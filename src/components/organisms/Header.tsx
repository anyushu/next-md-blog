import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

import { siteTitle } from '@/utils/next-seo.config'

const headMenus = [
  { name: 'GitHub', href: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/' },
  { name: 'Twitter', href: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/' },
]

const Header = () => {
  return (
    <header id="header" className="mb-12 p-3 md:mb-0 md:py-24 md:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <h1 className="text-lg font-bold tracking-widest hover:text-cyan-300">
            <Link href="/">{siteTitle}</Link>
          </h1>
          {/* menus */}
          <Popover>
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center md:hidden">
                <Popover.Button className="focus:outline-none">
                  <span>Menu</span>
                </Popover.Button>
              </div>
              <div className="hidden items-center md:flex">
                <Link href="/">
                  <a className="ml-6 text-sm leading-4 hover:text-cyan-300 focus-visible:outline-none md:text-base">
                    Home
                  </a>
                </Link>
                {headMenus.map((val, key) => {
                  return (
                    <Link href={val.href} key={key}>
                      <a
                        className="ml-6 text-sm leading-4 hover:text-cyan-300 focus-visible:outline-none md:text-base"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {val.name}
                      </a>
                    </Link>
                  )
                })}
              </div>
            </nav>
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right p-2 transition md:hidden"
              >
                <div className="flex items-center justify-center overflow-hidden rounded-l bg-darker-800 py-6 px-3 shadow-md">
                  <Link href="/">
                    <a className="px-3 text-center leading-4 hover:text-cyan-300 focus-visible:outline-none">
                      Home
                    </a>
                  </Link>
                  {headMenus.map((val, key) => {
                    return (
                      <Link href={val.href} key={key}>
                        <a
                          className="px-3 text-center leading-4 hover:text-cyan-300 focus-visible:outline-none"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {val.name}
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </header>
  )
}

export default Header
