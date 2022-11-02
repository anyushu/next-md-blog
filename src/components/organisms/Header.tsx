import Link from 'next/link'

import { siteTitle } from '@/utils/next-seo.config'

const headMenus = [
  { name: 'GitHub', href: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/' },
  { name: 'Twitter', href: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/' },
]

const Header = () => {
  return (
    <header id="header" className="mb-12 md:mb-0 md:py-24">
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                {headMenus.map((val, key) => {
                  return (
                    <li key={key}>
                      <Link href={val.href} rel="noopener noreferrer" target="_blank">
                        {val.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <h1>
              <Link href="/" className="text-xl">
                {siteTitle}
              </Link>
            </h1>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              {headMenus.map((val, key) => {
                return (
                  <li key={key}>
                    <Link href={val.href} rel="noopener noreferrer" target="_blank">
                      {val.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
