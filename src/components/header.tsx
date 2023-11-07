import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { GithubIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="inline-block font-bold">anyushu</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link className="text-foreground/60 transition-colors hover:text-foreground/80" href="/about">
              About
            </Link>
          </nav>
        </div>
        <MobileMenu />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Button asChild variant="ghost" size="icon">
              <Link target="_blank" rel="noreferrer" href="https://github.com/shadcn-ui/ui">
                <GithubIcon />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link href="/">anyushu</Link>
        <ul className="mt-4 pl-4 [&_a]:block [&_a]:py-2">
          <li>
            <Link href="/">link</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}
