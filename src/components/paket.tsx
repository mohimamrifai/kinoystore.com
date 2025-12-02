"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Smartphone, Clock, ArrowRight } from "lucide-react"

type PaketItem = {
  id: string
  grade: string
  durasi: string
  device: string
  harga: string
  deskripsi: string
  spesifikasi: string[]
}

const paket: PaketItem[] = [
  {
    id: "basic-30",
    grade: "Grade A",
    durasi: "30 Hari",
    device: "Android",
    harga: "Rp 120.000",
    deskripsi: "Paket hemat untuk mulai menggunakan Cloud Android Redfinger.",
    spesifikasi: ["Ryzen 5950X 1 Core", "2 GB RAM", "SSD Storage", "1 Gbps Network"],
  },
  {
    id: "pro-60",
    grade: "Grade A",
    durasi: "60 Hari",
    device: "Android",
    harga: "Rp 220.000",
    deskripsi: "Pilihan populer untuk penggunaan jangka menengah yang stabil.",
    spesifikasi: ["Ryzen 5950X 1 Core", "3 GB RAM", "SSD Storage", "1 Gbps Network"],
  },
  {
    id: "premium-90",
    grade: "Grade A",
    durasi: "90 Hari",
    device: "Android",
    harga: "Rp 300.000",
    deskripsi: "Nilai terbaik untuk pemakaian intensif dan efisien.",
    spesifikasi: ["Ryzen 5950X 2 Core", "4 GB RAM", "SSD Storage", "1 Gbps Network"],
  },
  {
    id: "ios-30",
    grade: "Grade A",
    durasi: "30 Hari",
    device: "iOS",
    harga: "Rp 140.000",
    deskripsi: "Pengguna iOS dapat menikmati Redfinger dengan mudah.",
    spesifikasi: ["Ryzen 5950X 1 Core", "2 GB RAM", "SSD Storage", "1 Gbps Network"],
  },
]

export default function Paket() {
  return (
    <section id="paket" className="relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-28 -left-20 h-72 w-72 bg-linear-to-tr from-rose-500/30 to-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-16 h-80 w-80 bg-linear-to-tr from-indigo-500/30 to-rose-500/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold leading-snug text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Pilih Paket Sesuai
          <span className="inline-block px-1 py-1 sm:py-2 text-transparent bg-clip-text bg-linear-to-r from-black via-rose-600 to-indigo-600 dark:from-white dark:via-rose-400 dark:to-indigo-300">Kebutuhan anda!</span>
        </motion.h2>
        <motion.p
          className="mt-2 text-lg text-center text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Pilih durasi, device, dan grade yang sesuai kebutuhan Anda.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paket.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card
                className="rounded-2xl border bg-white dark:bg-neutral-900 p-6 hover:-translate-y-0.5 transition shadow-sm hover:shadow-md border-gray-200 dark:border-neutral-800 hover:border-gray-400 dark:hover:border-neutral-500 hover:ring-1 ring-gray-300 dark:ring-neutral-700"
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
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">{p.harga}</div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.deskripsi}</div>
                  <ul className="mt-4 space-y-2">
                    {p.spesifikasi.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="border-t">
                  <Button size="lg" className="w-full text-base bg-red-600 text-white hover:bg-red-700 transition-colors" asChild>
                    <Link href={`/checkout?paket=${p.id}`}>Beli Sekarang</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link href="/paket">
              <ArrowRight className="h-4 w-4" />
              Lihat Semua Paket
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

