"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { Menu, Package, ListChecks } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-black/50 backdrop-blur border-b border-gray-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-3 sm:py-4 grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Kinoystore Logo"
            width={40}
            height={40}
            priority
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
          />
          <span className="text-lg sm:text-xl font-bold leading-none">kinoystore.com</span>
        </div>

        <nav className="hidden md:block justify-self-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#paket" className="rounded-full px-3.5 py-2 text-sm">
                  Paket
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#carakerja" className="rounded-full px-3.5 py-2 text-sm">
                  Cara Kerja
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Buka menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="px-4 py-2 grid gap-2">
                  <Link href="#paket" className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-neutral-800 p-3 hover:bg-accent hover:text-accent-foreground">
                    <Package className="size-4" />
                    <span>Paket</span>
                  </Link>
                  <Link href="#carakerja" className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-neutral-800 p-3 hover:bg-accent hover:text-accent-foreground">
                    <ListChecks className="size-4" />
                    <span>Cara Kerja</span>
                  </Link>
                </div>
                <div className="px-4 pb-4 pt-2 grid grid-cols-2 gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/login">Masuk</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Daftar</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <Link href="/login">Masuk</Link>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <Link href="/register">Daftar</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
