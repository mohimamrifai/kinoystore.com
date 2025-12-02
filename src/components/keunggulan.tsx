"use client"
import { motion } from "framer-motion"
import { Clock, ShieldCheck, Headphones, Zap, Rocket, Globe } from "lucide-react"

const items = [
  {
    icon: Zap,
    title: "Performa Tinggi",
    desc: "Server kelas enterprise dengan NVMe SSD untuk performa maksimal dan respons super cepat.",
    color: "text-rose-600 dark:text-rose-400",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Tingkat Lanjut",
    desc: "Enkripsi end-to-end setara militer, firewall canggih, dan pemantauan 24/7 untuk melindungi data Anda.",
    color: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Clock,
    title: "Uptime 99,9%",
    desc: "Ketersediaan tinggi dijamin oleh infrastruktur enterprise dengan sistem redundansi di data center tier-3.",
    color: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Headphones,
    title: "Dukungan Ahli 24/7",
    desc: "Tim teknis profesional siap membantu via live chat, email, dan telepon kapan pun.",
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Rocket,
    title: "Deploy Instan",
    desc: "Provisioning kilat siap dalam menit melalui sistem otomatis setelah pembayaran terkonfirmasi.",
    color: "text-sky-600 dark:text-sky-400",
  },
  {
    icon: Globe,
    title: "Akses Global",
    desc: "Akses dari mana saja dengan koneksi cepat dan latensi sangat rendah di berbagai lokasi.",
    color: "text-violet-600 dark:text-violet-400",
  },
]

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-28 -left-20 h-80 w-80 bg-gradient-to-tr from-gray-300/25 to-gray-600/25 dark:from-neutral-700/20 dark:to-neutral-500/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-16 h-96 w-96 bg-gradient-to-tr from-gray-600/25 to-gray-300/25 dark:from-neutral-500/20 dark:to-neutral-700/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-center">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-rose-600 to-indigo-600 dark:from-white dark:via-rose-400 dark:to-indigo-300">Kenapa Memilih Kami?</span>
          </h2>
          <p className="text-gray-600 text-center dark:text-gray-300 mt-2 text-lg">
            Pengalaman beli kode Redfinger yang aman, cepat, dan transparan.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="group rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-8 shadow-sm transition hover:shadow-md hover:border-gray-400 dark:hover:border-neutral-500 hover:bg-gray-50 dark:hover:bg-neutral-800"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex-shrink-0 w-16 aspect-square rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
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
