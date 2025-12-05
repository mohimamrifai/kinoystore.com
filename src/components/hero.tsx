"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShieldCheck, CheckCircle, Headphones } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <motion.div
          className="space-y-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-neutral-800 px-4 py-2 sm:px-5 sm:py-2 text-sm md:text-base font-medium text-gray-800 dark:text-gray-100 bg-white/70 dark:bg-black/50">
            <ShieldCheck className="size-4 md:size-5" />
            Resmi • Cepat • Aman
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Beli Kode Redfinger Resmi Indonesia.
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-black via-[#ff731a] to-[#ff731a] dark:from-white dark:via-[#ff731a] dark:to-[#ff731a]">Instan & Aman</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Dapatkan kode Cloud Phone Redfinger dalam hitungan detik. Pembayaran aman dan kode langsung dikirim ke akun serta email Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base bg-[#ff731a] text-white hover:bg-[#e86615] transition-all hover:-translate-y-0.5 hover:shadow-lg" asChild>
              <Link href="#paket">Lihat Produk</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base transition-all hover:-translate-y-0.5 hover:shadow-lg hover:text-[#ff731a]" asChild>
              <Link href="#carakerja">Pelajari Cara Kerja</Link>
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm md:text-base">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/10 backdrop-blur px-3 py-1 md:px-4 md:py-1.5 text-gray-800 dark:text-gray-100">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#ff731a]" />
              10.000+ Kode Terjual
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/10 backdrop-blur px-3 py-1 md:px-4 md:py-1.5 text-gray-800 dark:text-gray-100">
              <Headphones className="h-4 w-4 md:h-5 md:w-5 text-[#ff731a]" />
              Bantuan 24/7
            </span>
          </div>
        </motion.div>
        <motion.div
          className="relative h-64 md:h-[450px] overflow-hidden group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        >
          <Image
            src="/hero.png"
            alt="Ilustrasi layanan Redfinger"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  )
}
