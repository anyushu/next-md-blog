import { GithubIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'

import { ToggleThemeButton } from '@/components/functional/toggle-theme'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-inherit">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="inline-block font-bold">anyushu</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">
              Top
            </Link>
          </nav>
        </div>
        <MobileMenu />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Button asChild variant="ghost" size="icon">
              <Link href="https://github.com/anyushu" target="_blank" rel="noreferrer">
                <GithubIcon />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ToggleThemeButton />
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
          <span className="sr-only">ToggleMenu</span>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link href="/">Top</Link>
      </SheetContent>
    </Sheet>
  )
}
