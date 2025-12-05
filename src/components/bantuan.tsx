"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ShieldCheck, CreditCard, Clock, Mail, HelpCircle, AlertCircle } from "lucide-react"

export default function Bantuan() {
  return (
    <section id="bantuan" className="relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-black via-rose-600 to-indigo-600 dark:from-white dark:via-rose-400 dark:to-indigo-300">Butuh Bantuan?</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center dark:text-gray-300 mt-2 text-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Jawaban cepat untuk pertanyaan yang sering ditanyakan. Jika masih perlu bantuan, tim kami siap 24/7.
        </motion.p>

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold bg-white/70 dark:bg-black/40 ring-1 ring-inset ring-gray-200 dark:ring-neutral-800 transition-all hover:bg-gray-50 dark:hover:bg-neutral-900 hover:-translate-y-0.5 data-[state=open]:bg-gray-50 dark:data-[state=open]:bg-neutral-900 data-[state=open]:ring-gray-300 dark:data-[state=open]:ring-neutral-700">
                <span className="inline-flex items-center gap-3">
                  <span className="aspect-square size-9 sm:size-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <ShieldCheck className="size-5 sm:size-6 text-red-600 dark:text-red-400" />
                  </span>
                  Apa itu Redfinger dan apa yang Anda dapatkan?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Redfinger adalah Cloud Android resmi untuk menjalankan aplikasi di server. Membeli paket di sini berarti Anda menerima kode akses terverifikasi dengan masa aktif sesuai pilihan, siap dipakai tanpa konfigurasi rumit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold bg-white/70 dark:bg-black/40 ring-1 ring-inset ring-gray-200 dark:ring-neutral-800 transition-all hover:bg-gray-50 dark:hover:bg-neutral-900 hover:-translate-y-0.5 data-[state=open]:bg-gray-50 dark:data-[state=open]:bg-neutral-900 data-[state=open]:ring-gray-300 dark:data-[state=open]:ring-neutral-700">
                <span className="inline-flex items-center gap-3">
                  <span className="aspect-square size-9 sm:size-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <CreditCard className="size-5 sm:size-6 text-red-600 dark:text-red-400" />
                  </span>
                  Bagaimana alur beli hingga kode diterima?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Pilih paket, lakukan pembayaran aman, lalu kode akses dikirim otomatis ke akun dan email Anda. Masuk ke aplikasi/website Redfinger dan aktifkan sesuai petunjuk yang Anda terima.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold bg-white/70 dark:bg-black/40 ring-1 ring-inset ring-gray-200 dark:ring-neutral-800 transition-all hover:bg-gray-50 dark:hover:bg-neutral-900 hover:-translate-y-0.5 data-[state=open]:bg-gray-50 dark:data-[state=open]:bg-neutral-900 data-[state=open]:ring-gray-300 dark:data-[state=open]:ring-neutral-700">
                <span className="inline-flex items-center gap-3">
                  <span className="aspect-square size-9 sm:size-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <Clock className="size-5 sm:size-6 text-red-600 dark:text-red-400" />
                  </span>
                  Berapa lama aktivasi berlangsung?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Aktivasi biasanya instan (±1–3 menit) setelah pembayaran terkonfirmasi. Jika lebih lama, biasanya karena verifikasi dari penyedia pembayaran. Cek email dan riwayat transaksi Anda.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold bg-white/70 dark:bg-black/40 ring-1 ring-inset ring-gray-200 dark:ring-neutral-800 transition-all hover:bg-gray-50 dark:hover:bg-neutral-900 hover:-translate-y-0.5 data-[state=open]:bg-gray-50 dark:data-[state=open]:bg-neutral-900 data-[state=open]:ring-gray-300 dark:data-[state=open]:ring-neutral-700">
                <span className="inline-flex items-center gap-3">
                  <span className="aspect-square size-9 sm:size-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <Mail className="size-5 sm:size-6 text-red-600 dark:text-red-400" />
                  </span>
                  Tidak menerima kode? Apa yang harus dilakukan?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Periksa folder spam, pastikan email yang terdaftar benar, dan lihat riwayat transaksi Anda. Jika tetap belum ada, hubungi kami lewat Kontak untuk bantuan cepat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold bg-white/70 dark:bg-black/40 ring-1 ring-inset ring-gray-200 dark:ring-neutral-800 transition-all hover:bg-gray-50 dark:hover:bg-neutral-900 hover:-translate-y-0.5 data-[state=open]:bg-gray-50 dark:data-[state=open]:bg-neutral-900 data-[state=open]:ring-gray-300 dark:data-[state=open]:ring-neutral-700">
                <span className="inline-flex items-center gap-3">
                  <span className="aspect-square size-9 sm:size-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <HelpCircle className="size-5 sm:size-6 text-red-600 dark:text-red-400" />
                  </span>
                  Metode pembayaran yang didukung?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Kami mendukung metode pembayaran lokal yang aman dan cepat. Detail opsi dan biaya layanan (jika ada) ditampilkan di halaman checkout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold bg-white/70 dark:bg-black/40 ring-1 ring-inset ring-gray-200 dark:ring-neutral-800 transition-all hover:bg-gray-50 dark:hover:bg-neutral-900 hover:-translate-y-0.5 data-[state=open]:bg-gray-50 dark:data-[state=open]:bg-neutral-900 data-[state=open]:ring-gray-300 dark:data-[state=open]:ring-neutral-700">
                <span className="inline-flex items-center gap-3">
                  <span className="aspect-square size-9 sm:size-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <AlertCircle className="size-5 sm:size-6 text-red-600 dark:text-red-400" />
                  </span>
                  Garansi dan bantuan jika kode bermasalah
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Jika terjadi kendala pada kode atau aktivasi, kami akan bantu menelusuri dan menyelesaikannya. Silakan hubungi tim dukungan melalui Kontak dengan detail transaksi Anda.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

