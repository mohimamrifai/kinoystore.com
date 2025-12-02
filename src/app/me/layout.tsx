"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isOverview = pathname === "/me"
  const isRiwayat = pathname.startsWith("/me/transactions")
  const isDetail = pathname === "/me/detail"
  const isSettings = pathname === "/me/settings"

  return (
    <div className="min-h-dvh px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Image src="/logo.png" alt="Kinoystore Logo" width={64} height={64} priority className="h-12 w-12 object-contain" />
          <Link href="/" className="text-lg font-bold leading-none">kinoystore.com</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
          <aside className="md:sticky md:top-6 h-fit rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-4">
            <nav className="grid gap-2 text-sm">
              <Link href="/me" aria-current={isOverview ? "page" : undefined} className={`rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground ${isOverview ? "bg-accent text-accent-foreground font-semibold" : ""}`}>Dashboard</Link>
              <Link href="/me/transactions" aria-current={isRiwayat ? "page" : undefined} className={`rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground ${isRiwayat ? "bg-accent text-accent-foreground font-semibold" : ""}`}>Riwayat Transaksi</Link>
              <Link href="/me/detail" aria-current={isDetail ? "page" : undefined} className={`rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground ${isDetail ? "bg-accent text-accent-foreground font-semibold" : ""}`}>Detail Transaksi</Link>
              <Link href="/me/settings" aria-current={isSettings ? "page" : undefined} className={`rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground ${isSettings ? "bg-accent text-accent-foreground font-semibold" : ""}`}>Pengaturan Akun</Link>
            </nav>
          </aside>

          <main className="grid gap-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
