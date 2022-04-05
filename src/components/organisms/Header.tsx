import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import ToggleColorMode from '@/components/molecules/ToggleColorMode'
import { siteTitle } from '@/utils/next-seo.config'

const headMenus = [
  { name: 'GitHub', href: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/' },
  { name: 'Twitter', href: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/' },
]

const Header = () => {
  return (
    <header id="header" className="p-3 mb-12 md:py-24 md:px-0 md:mb-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <h1 className="text-lg font-bold tracking-widest">
            <Link href="/">{siteTitle}</Link>
          </h1>
          {/* menus */}
          <Popover>
            <nav
              className="flex relative justify-between items-center sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center md:hidden">
                <Popover.Button className="bg-white dark:bg-black-900 focus:outline-none">
                  <span>Menu</span>
                </Popover.Button>
              </div>
              <div className="hidden items-center md:flex">
                <Link href="/">
                  <a className="ml-6 text-sm leading-4 hover:text-gray-700 focus-visible:outline-none md:text-base">
                    Home
                  </a>
                </Link>
                {headMenus.map((val, key) => {
                  return (
                    <Link href={val.href} key={key}>
                      <a
                        className="ml-6 text-sm leading-4 hover:text-gray-700 focus-visible:outline-none md:text-base"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {val.name}
                      </a>
                    </Link>
                  )
                })}
                <div className="ml-6 leading-none">
                  <ToggleColorMode />
                </div>
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
                className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right md:hidden"
              >
                <div className="flex overflow-hidden justify-center items-center py-6 px-3 bg-white dark:bg-black-800 rounded-lg shadow-md">
                  <Link href="/">
                    <a className="px-3 leading-4 text-center hover:text-gray-700 focus-visible:outline-none">
                      Home
                    </a>
                  </Link>
                  {headMenus.map((val, key) => {
                    return (
                      <Link href={val.href} key={key}>
                        <a
                          className="px-3 leading-4 text-center hover:text-gray-700 focus-visible:outline-none"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {val.name}
                        </a>
                      </Link>
                    )
                  })}
                  <div className="ml-6 leading-none">
                    <ToggleColorMode />
                  </div>
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
