"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LayoutDashboard, History, FileText, Settings } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isOverview = pathname === "/me"
  const isRiwayat = pathname.startsWith("/me/transactions")
  const isDetail = pathname === "/me/detail"
  const isSettings = pathname === "/me/settings"

  return (
    <div className="min-h-dvh">
      <Navbar />
      <div className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
            <aside className="md:sticky md:top-24 h-fit rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-4">
              <nav className="grid gap-2 text-sm">
                <Link href="/me" aria-current={isOverview ? "page" : undefined} className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-[#ff731a]/10 hover:text-[#ff731a] ${isOverview ? "bg-[#ff731a]/10 text-[#ff731a] font-semibold ring-1 ring-[#ff731a]/20" : "text-gray-700 dark:text-gray-300"}`}>
                  <LayoutDashboard className="size-4" />
                  <span>Dashboard</span>
                </Link>
                <Link href="/me/transactions" aria-current={isRiwayat ? "page" : undefined} className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-[#ff731a]/10 hover:text-[#ff731a] ${isRiwayat ? "bg-[#ff731a]/10 text-[#ff731a] font-semibold ring-1 ring-[#ff731a]/20" : "text-gray-700 dark:text-gray-300"}`}>
                  <History className="size-4" />
                  <span>Riwayat Transaksi</span>
                </Link>
                <Link href="/me/detail" aria-current={isDetail ? "page" : undefined} className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-[#ff731a]/10 hover:text-[#ff731a] ${isDetail ? "bg-[#ff731a]/10 text-[#ff731a] font-semibold ring-1 ring-[#ff731a]/20" : "text-gray-700 dark:text-gray-300"}`}>
                  <FileText className="size-4" />
                  <span>Detail Transaksi</span>
                </Link>
                <Link href="/me/settings" aria-current={isSettings ? "page" : undefined} className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-[#ff731a]/10 hover:text-[#ff731a] ${isSettings ? "bg-[#ff731a]/10 text-[#ff731a] font-semibold ring-1 ring-[#ff731a]/20" : "text-gray-700 dark:text-gray-300"}`}>
                  <Settings className="size-4" />
                  <span>Pengaturan Akun</span>
                </Link>
              </nav>
            </aside>
            <main className="grid gap-6">{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
