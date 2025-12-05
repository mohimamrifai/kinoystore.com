"use client"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type ForgotValues = {
  email: string
}

export default function Page() {
  const form = useForm<ForgotValues>({
    defaultValues: { email: "" },
    mode: "onSubmit",
  })

  function onSubmit(values: ForgotValues) {
    console.log("forgot", values)
  }

  return (
    <div className="min-h-dvh grid place-items-center px-6">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-8 md:p-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/logo.png" alt="Kinoystore Logo" width={64} height={64} priority className="h-14 w-14 object-contain" />
            <Link href="/" className="text-2xl md:text-3xl font-bold leading-none text-[#ff731a]">KINOY STORE</Link>
          </div>
          <div className="text-center mb-6">
            <div className="text-xl font-semibold">Lupa Password</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Masukkan email terdaftar untuk menerima tautan reset password. Jika tidak menemukan email, periksa folder spam atau hubungi support@kinoystore.com.</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
              <FormField
                control={form.control}
                name="email"
                rules={{ required: "Email wajib diisi" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="nama@contoh.com" className="h-11 text-base" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full h-11 text-base bg-[#ff731a] text-white hover:bg-[#e86615] dark:bg-[#ff731a] dark:hover:bg-[#e86615] cursor-pointer">Kirim Link Reset</Button>
            </form>
          </Form>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <span>
            Sudah ingat password? <Link href="/login" className="font-medium text-[#ff731a] hover:underline">Masuk</Link>
          </span>
          <span className="mx-2">•</span>
          <Link href="/register" className="font-medium text-[#ff731a] hover:underline">Daftar</Link>
        </div>
      </div>
    </div>
  )
}

