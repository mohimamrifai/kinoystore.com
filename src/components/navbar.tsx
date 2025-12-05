"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"
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
  SheetClose,
} from "@/components/ui/sheet"
import { Menu, Package, ListChecks, Mail, Home, HelpCircle } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <motion.header
      className="sticky top-0 z-40 bg-white/70 dark:bg-black/50 backdrop-blur border-b border-gray-200 dark:border-neutral-800 shadow-md"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 sm:py-5 grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Kinoystore Logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <Link href="/" className="text-xl sm:text-2xl font-bold leading-none">KINOY STORE</Link>
        </div>

        <nav className="hidden md:block justify-self-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="rounded-full font-semibold px-4 py-2 text-base transition-colors hover:text-red-600 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-linear-to-r from-rose-500 to-indigo-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full">
                  Beranda
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/#paket" className="rounded-full font-semibold px-4 py-2 text-base transition-colors hover:text-red-600 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-linear-to-r from-rose-500 to-indigo-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full">
                  Produk
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/#carakerja" className="rounded-full font-semibold px-4 py-2 text-base transition-colors hover:text-red-600 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-linear-to-r from-rose-500 to-indigo-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full">
                  Cara Kerja
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/#kontak" className="rounded-full font-semibold px-4 py-2 text-base transition-colors hover:text-red-600 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-linear-to-r from-rose-500 to-indigo-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full">
                  Kontak
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/#bantuan" className="rounded-full font-semibold px-4 py-2 text-base transition-colors hover:text-red-600 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-linear-to-r from-rose-500 to-indigo-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full">
                  Bantuan
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <div className="md:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
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
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-neutral-800 p-3 hover:bg-accent hover:text-accent-foreground"
                    onClick={() => {
                      if (window.location.pathname !== "/") {
                        window.location.href = "/"
                        return
                      }
                      setMenuOpen(false)
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                        try {
                          const url = new URL(window.location.href)
                          url.hash = ""
                          window.history.replaceState(null, "", url.pathname + url.search)
                        } catch { }
                      }, 350)
                    }}
                  >
                    <Home className="size-4" />
                    <span>Beranda</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-neutral-800 p-3 hover:bg-accent hover:text-accent-foreground"
                    onClick={() => {
                      if (window.location.pathname !== "/") {
                        window.location.href = "/#paket"
                        return
                      }
                      setMenuOpen(false)
                      setTimeout(() => {
                        const el = document.getElementById("paket")
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" })
                          try {
                            const url = new URL(window.location.href)
                            url.hash = "paket"
                            window.history.replaceState(null, "", url.toString())
                          } catch { }
                        } else {
                          window.location.href = "/#paket"
                        }
                      }, 350)
                    }}
                  >
                    <Package className="size-4" />
                    <span>Produk</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-neutral-800 p-3 hover:bg-accent hover:text-accent-foreground"
                    onClick={() => {
                      if (window.location.pathname !== "/") {
                        window.location.href = "/#carakerja"
                        return
                      }
                      setMenuOpen(false)
                      setTimeout(() => {
                        const el = document.getElementById("carakerja")
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" })
                          try {
                            const url = new URL(window.location.href)
                            url.hash = "carakerja"
                            window.history.replaceState(null, "", url.toString())
                          } catch { }
                        } else {
                          window.location.href = "/#carakerja"
                        }
                      }, 350)
                    }}
                  >
                    <ListChecks className="size-4" />
                    <span>Cara Kerja</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-neutral-800 p-3 hover:bg-accent hover:text-accent-foreground"
                    onClick={() => {
                      if (window.location.pathname !== "/") {
                        window.location.href = "/#kontak"
                        return
                      }
                      setMenuOpen(false)
                      setTimeout(() => {
                        const el = document.getElementById("kontak")
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" })
                          try {
                            const url = new URL(window.location.href)
                            url.hash = "kontak"
                            window.history.replaceState(null, "", url.toString())
                          } catch { }
                        } else {
                          window.location.href = "/#kontak"
                        }
                      }, 350)
                    }}
                  >
                    <Mail className="size-4" />
                    <span>Kontak</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-neutral-800 p-3 hover:bg-accent hover:text-accent-foreground"
                    onClick={() => {
                      if (window.location.pathname !== "/") {
                        window.location.href = "/#bantuan"
                        return
                      }
                      setMenuOpen(false)
                      setTimeout(() => {
                        const el = document.getElementById("bantuan")
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" })
                          try {
                            const url = new URL(window.location.href)
                            url.hash = "bantuan"
                            window.history.replaceState(null, "", url.toString())
                          } catch { }
                        } else {
                          window.location.href = "/#bantuan"
                        }
                      }, 350)
                    }}
                  >
                    <HelpCircle className="size-4" />
                    <span>Bantuan</span>
                  </button>
                </div>
                <div className="px-4 pb-4 pt-2 grid grid-cols-2 gap-4">
                  <Button variant="outline" size="sm" className="rounded-full px-4" asChild>
                    <Link href="/login">Masuk</Link>
                  </Button>
                  <Button variant="destructive" size="sm" className="rounded-full px-4" asChild>
                    <Link href="/register">Daftar</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="rounded-full px-4" asChild>
              <Link href="/login">Masuk</Link>
            </Button>
            <Button variant="destructive" size="sm" className="rounded-full px-4" asChild>
              <Link href="/register">Daftar</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
