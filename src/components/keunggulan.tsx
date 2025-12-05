"use client"
import { motion } from "framer-motion"
import { Clock, ShieldCheck, Headphones, Zap, Package, CreditCard } from "lucide-react"

const items = [
  {
    icon: Zap,
    title: "Performa Cepat",
    desc: "Nikmati performa Cloud Redfinger yang cepat, stabil, dan selalu siap digunakan 24/7 untuk game, bot, maupun aktivitas berat tanpa hambatan.",
    color: "text-[#ff731a]",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Terjamin",
    desc: "Setiap kode Redfinger 100% original dan tervalidasi. Sistem keamanan otomatis memastikan aktivasi aman tanpa risiko duplikasi atau penipuan.",
    color: "text-[#ff731a]",
  },
  {
    icon: Clock,
    title: "Aktivasi Instan",
    desc: "Kode langsung dikirim ke dashboard dan email Anda dalam hitungan detik setelah pembayaran terkonfirmasi—tanpa perlu menunggu admin.",
    color: "text-[#ff731a]",
  },
  {
    icon: Headphones,
    title: "Support Responsif",
    desc: "Tim kami siap membantu dengan cepat melalui Discord & Whatsapp untuk memastikan pengalaman pembelian tetap lancar dan nyaman.",
    color: "text-[#ff731a]",
  },
  {
    icon: Package,
    title: "Pilihan Lengkap",
    desc: "Tersedia berbagai grade, durasi, serta opsi versi Android, sehingga Anda bisa memilih produk Redfinger sesuai kebutuhan Anda.",
    color: "text-[#ff731a]",
  },
  {
    icon: CreditCard,
    title: "Harga Transparan",
    desc: "Proses pembayaran aman, harga jelas tanpa biaya tersembunyi, dan checkout dibuat sederhana agar Anda dapat bertransaksi dengan nyaman.",
    color: "text-[#ff731a]",
  },
]

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-28 -left-20 h-80 w-80 bg-linear-to-tr from-gray-300/25 to-gray-600/25 dark:from-neutral-700/20 dark:to-neutral-500/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-16 h-96 w-96 bg-linear-to-tr from-gray-600/25 to-gray-300/25 dark:from-neutral-500/20 dark:to-neutral-700/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-center">
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-black via-[#ff731a] to-[#ff731a] dark:from-white dark:via-[#ff731a] dark:to-[#ff731a]">Kenapa Memilih Kami?</span>
          </h2>
          <p className="text-gray-600 text-center dark:text-gray-300 mt-2 text-lg">
            Pengalaman beli kode Redfinger yang aman, cepat, dan transparan.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="group rounded-2xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-md p-8 shadow-sm transition hover:shadow-[0_10px_40px_rgba(255,115,26,0.15)] hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="shrink-0 w-16 aspect-square rounded-full flex items-center justify-center bg-white/30 dark:bg-white/10 backdrop-blur ring-1 ring-inset ring-white/40 dark:ring-white/10">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <div>
                  <div className="font-semibold text-2xl text-gray-900 dark:text-gray-100">{item.title}</div>
                  <div className="mt-1 text-base text-gray-700 dark:text-gray-300">
                    {item.desc}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
