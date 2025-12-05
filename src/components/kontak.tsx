"use client"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle } from "lucide-react"

// Left column shows plain contact information per provided example

type ContactValues = {
  name: string
  email: string
  message: string
}

export default function Kontak() {
  const form = useForm<ContactValues>({
    defaultValues: { name: "", email: "", message: "" },
    mode: "onSubmit",
  })

  function onSubmit(values: ContactValues) {
    const subject = encodeURIComponent(`Kontak dari ${values.name}`)
    const body = encodeURIComponent(`Nama: ${values.name}\nEmail: ${values.email}\n\n${values.message}`)
    const mailto = `mailto:support@kinoystore.com?subject=${subject}&body=${body}`
    window.location.href = mailto
  }

  return (
    <section id="kontak" className="relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-center">
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#ff731a] to-[#ff731a] dark:from-[#ff731a] dark:to-[#ff731a]">Kontak Kami</span>
          </h2>
          <p className="text-gray-600 text-center dark:text-gray-300 mt-2 text-lg">
            Punya pertanyaan? Tim kami siap membantu Anda 24/7
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <a href="mailto:support@kinoystore.com" className="block group">
                <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <Mail className="h-6 w-6 text-[#ff731a]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-700 dark:text-gray-300">Email</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#ff731a]">support@kinoystore.com</div>
                  </div>
                </div>
              </a>
              <a href="https://wa.me/628000000000" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <MessageCircle className="h-6 w-6 text-[#ff731a]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-700 dark:text-gray-300">WhatsApp</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#ff731a]">+62 800 000 0000</div>
                  </div>
                </div>
              </a>
              <a href="https://discord.gg/kinoystore" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <svg className="h-6 w-6 text-[#ff731a]" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-700 dark:text-gray-300">Discord</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#ff731a]">discord.gg/kinoystore</div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-6"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Nama wajib diisi" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan nama" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ required: "Email wajib diisi" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="nama@contoh.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: "Pesan wajib diisi" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pesan</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tulis pesan Anda" rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-2">
                  <Button type="submit" className="w-full bg-[#ff731a] hover:bg-[#e86615] text-white">Kirim Pesan</Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
