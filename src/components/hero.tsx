"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-20 -left-24 h-64 w-64 bg-gradient-to-tr from-rose-500/30 to-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 bg-gradient-to-tr from-indigo-500/30 to-rose-500/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-neutral-800 px-4 py-2 sm:px-5 sm:py-2 text-sm md:text-base font-medium text-gray-800 dark:text-gray-100 bg-white/70 dark:bg-black/50">
            <ShieldCheck className="size-4 md:size-5" />
            Resmi • Cepat • Aman
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Beli Kode Redfinger Resmi Indonesia.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-rose-600 to-indigo-600 dark:from-white dark:via-rose-400 dark:to-indigo-300">Instan, Terpercaya, Siap Pakai.</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Aktifkan akses Cloud Android Redfinger dalam hitungan menit. Pembayaran aman dan kode langsung dikirim ke akun serta email Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base" asChild>
              <Link href="#paket">Lihat Paket</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base" asChild>
              <Link href="#carakerja">Pelajari Cara Kerja</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/40 dark:bg-black/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-40 md:size-56 rounded-full bg-gradient-to-tr from-rose-400/40 to-indigo-400/40 blur-xl" />
          </div>
          <div className="absolute inset-4 rounded-xl border border-gray-200/60 dark:border-neutral-700/60" />
        </div>
      </div>
    </section>
  )
}

