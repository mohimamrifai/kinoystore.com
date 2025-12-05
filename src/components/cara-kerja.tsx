"use client"
import { Package, CreditCard, Mail, ArrowRight, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CaraKerja() {
    const steps = [
        {
            icon: Package,
            title: "Pilih paket",
            desc: "Temukan paket yang sesuai dengan kebutuhan Anda"
        },
        {
            icon: CreditCard,
            title: "Lakukan pembayaran",
            desc: "Proses pembayaran yang aman dan cepat"
        },
        {
            icon: Mail,
            title: "Kode langsung dikirim",
            desc: "Kode akses otomatis dikirim ke akun & email Anda"
        },
    ]

    return (
        <section id="carakerja" className="py-20 bg-white dark:bg-neutral-950 scroll-mt-24 md:scroll-mt-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl sm:text-5xl font-bold leading-snug text-center inline-block px-1 py-1 sm:py-2 text-transparent bg-clip-text bg-linear-to-r from-black via-rose-600 to-indigo-600 dark:from-white dark:via-rose-400 dark:to-indigo-300"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Mulai Gunakan Redfinger dengan Mudah
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        Tiga langkah cepat untuk mendapatkan kode Cloud Phone Redfinger—praktis, aman, dan resmi.
                    </motion.p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-5xl mx-auto">
                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
                        >
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg bg-red-600 dark:bg-red-700">
                                <s.icon className="h-10 w-10 text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-red-600 dark:text-red-400">
                                {i === 0 ? "Pilih Produk Ideal" : i === 1 ? "Bayar Aman & Cepat" : "Kode Instan Terkirim"}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-normal leading-relaxed max-w-xs mx-auto">
                                {i === 0 ? "Temukan produk yang paling cocok untuk kebutuhanmu." : i === 1 ? "Pembayaran mudah, aman, dan langsung diproses." : "Kode akses langsung masuk ke akun & emailmu, tanpa tunggu lama."}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                >
                    <Link href="/#paket" className="inline-flex items-center gap-3 bg-red-600 dark:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        Mulai Sekarang
                        <ArrowUp className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
