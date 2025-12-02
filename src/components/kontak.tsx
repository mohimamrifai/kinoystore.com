"use client"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircle } from "lucide-react"

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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-rose-600 to-indigo-600 dark:from-white dark:via-rose-400 dark:to-indigo-300">Kontak Kami</span>
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
                    <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-700 dark:text-gray-300">Email</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400">support@kinoystore.com</div>
                  </div>
                </div>
              </a>
              <a href="tel:+628000000000" className="block group">
                <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-700 dark:text-gray-300">Telepon</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400">+62 800 000 0000</div>
                  </div>
                </div>
              </a>
              <a href="https://wa.me/628000000000" target="_blank" rel="noopener noreferrer" className="block group"> 
                <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-neutral-700 ring-1 ring-inset ring-white/60 dark:ring-neutral-600/40">
                    <MessageCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-700 dark:text-gray-300">WhatsApp</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400">+62 800 000 0000</div>
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
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Kirim Pesan</Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
