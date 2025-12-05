"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Smartphone, Clock, ArrowRight, ThumbsUp, ArrowDown } from "lucide-react"
import { Fragment, useEffect, useState } from "react"

type PaketItem = {
  id: string
  grade: string
  durasi: string
  device: string
  harga: string
  hargaCoret: string
  deskripsi: string
  spesifikasi: string[]
  bestSeller?: boolean
}

const paket: PaketItem[] = [
  {
    id: "vip-7",
    grade: "VIP",
    durasi: "7 Hari",
    device: "Android 13",
    harga: "Rp 40.000",
    hargaCoret: "Rp 50.000",
    deskripsi: "Akses cepat untuk kebutuhan harian.",
    spesifikasi: ["Ryzen 5950X 1 Core", "2 GB RAM", "SSD Storage", "1 Gbps Network"],
  },
  {
    id: "vip-30",
    grade: "VIP",
    durasi: "30 Hari",
    device: "Android 13",
    harga: "Rp 120.000",
    hargaCoret: "Rp 150.000",
    deskripsi: "Paket populer dengan performa stabil.",
    spesifikasi: ["Ryzen 5950X 1 Core", "3 GB RAM", "SSD Storage", "1 Gbps Network"],
    bestSeller: true,
  },
  {
    id: "kvip-7",
    grade: "KVIP",
    durasi: "7 Hari",
    device: "Android 13",
    harga: "Rp 50.000",
    hargaCoret: "Rp 65.000",
    deskripsi: "Pilihan hemat dengan fitur esensial.",
    spesifikasi: ["Ryzen 5950X 1 Core", "2 GB RAM", "SSD Storage", "1 Gbps Network"],
  },
  {
    id: "kvip-30",
    grade: "KVIP",
    durasi: "30 Hari",
    device: "Android 13",
    harga: "Rp 220.000",
    hargaCoret: "Rp 250.000",
    deskripsi: "Untuk penggunaan jangka menengah.",
    spesifikasi: ["Ryzen 5950X 1 Core", "3 GB RAM", "SSD Storage", "1 Gbps Network"],
  },
  {
    id: "svip-30",
    grade: "SVIP",
    durasi: "30 Hari",
    device: "Android 13",
    harga: "Rp 300.000",
    hargaCoret: "Rp 350.000",
    deskripsi: "Performa tinggi untuk kebutuhan intensif.",
    spesifikasi: ["Ryzen 5950X 2 Core", "4 GB RAM", "SSD Storage", "1 Gbps Network"],
  },
  {
    id: "xvip-30",
    grade: "XVIP",
    durasi: "30 Hari",
    device: "Android 13",
    harga: "Rp 420.000",
    hargaCoret: "Rp 480.000",
    deskripsi: "Level maksimal untuk produktivitas tinggi.",
    spesifikasi: ["Ryzen 5950X 2 Core", "6 GB RAM", "SSD Storage", "1 Gbps Network"],
  },
]

export default function Paket() {
  const [stock, setStock] = useState<Record<string, number>>({})

  useEffect(() => {
    const initial = Math.floor(Math.random() * (30 - 12 + 1)) + 12
    setStock({ "vip-30": initial })
    const interval = setInterval(() => {
      const next = Math.floor(Math.random() * (30 - 10 + 1)) + 10
      setStock({ "vip-30": next })
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section id="paket" className="relative overflow-hidden scroll-mt-24 md:scroll-mt-28 my-20 md:my-24">
      <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-28 -left-20 h-72 w-72 bg-linear-to-tr from-[#ff731a]/30 to-[#ff731a]/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-16 h-80 w-80 bg-linear-to-tr from-[#ff731a]/30 to-[#ff731a]/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold leading-snug text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Pilih Produk Sesuai
          <span className="inline-block px-1 py-1 sm:py-2 text-transparent bg-clip-text bg-linear-to-r from-black via-[#ff731a] to-[#ff731a] dark:from-white dark:via-[#ff731a] dark:to-[#ff731a]">Kebutuhan anda!</span>
        </motion.h2>
        <motion.p
          className="mt-2 text-lg text-center text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Pilih grade, durasi, dan versi android yang sesuai kebutuhan Anda.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paket.map((p, idx) => (
            <Fragment key={p.id}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card
                  className="relative rounded-2xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-md p-6 transition shadow-sm hover:shadow-[0_10px_40px_rgba(79,70,229,0.15)] hover:-translate-y-0.5"
                >
                  <CardHeader className="border-b">
                    <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      Paket {p.grade}
                    </CardTitle>
                    <div className="flex items-center flex-wrap gap-2">
                      <Badge variant="outline" className="border-gray-200 dark:border-neutral-700 text-gray-800 dark:text-gray-200">
                        <Smartphone />
                        {p.device}
                      </Badge>
                      <Badge variant="outline" className="border-gray-200 dark:border-neutral-700 text-gray-800 dark:text-gray-200">
                        <Clock />
                        {p.durasi}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400 line-through">{p.hargaCoret}</div>
                    <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#ff731a] to-[#ff731a] dark:from-[#ff731a] dark:to-[#ff731a]">{p.harga}</div>
                    <div className="mt-3 flex items-center gap-2">
                      {p.bestSeller && (
                        <Badge className="inline-flex items-center gap-1 bg-amber-500 text-white hover:bg-amber-600">
                          <ThumbsUp className="h-4 w-4" /> Best Seller
                        </Badge>
                      )}
                      {p.id === "vip-30" && (
                        <Badge variant="outline" className="border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-300">
                          Stok: {stock["vip-30"] ?? "..."}
                        </Badge>
                      )}
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.deskripsi}</div>
                    <ul className="mt-4 space-y-2">
                      {p.spesifikasi.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-[#ff731a]" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="border-t">
                    <Button size="lg" className="w-full text-base bg-[#ff731a] text-white hover:bg-[#e86615] transition-colors" asChild>
                      <Link href={`/checkout?paket=${p.id}`}>Beli Sekarang</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </Fragment>
          ))}
        </div>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/paket"
            className="inline-flex items-center gap-3 bg-[#ff731a] text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#e86615]"
          >
            Lihat Semua Paket
            <ArrowDown className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
