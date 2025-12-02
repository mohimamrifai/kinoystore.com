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
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/logo.png" alt="Kinoystore Logo" width={64} height={64} priority className="h-12 w-12 object-contain" />
            <Link href="/" className="text-lg font-bold leading-none">kinoystore.com</Link>
          </div>
          <div className="text-center mb-4">
            <div className="text-xl font-semibold">Lupa Password</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Masukkan email terdaftar untuk menerima tautan reset password. Jika tidak menemukan email, periksa folder spam atau hubungi support@kinoystore.com.</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Kirim Link Reset</Button>
            </form>
          </Form>
        </div>
        <div className="mt-3 text-center text-xs text-gray-600 dark:text-gray-400">
          <span>
            Sudah ingat password? <Link href="/login" className="font-medium text-red-600 hover:underline">Masuk</Link>
          </span>
          <span className="mx-2">•</span>
          <Link href="/register" className="font-medium text-red-600 hover:underline">Daftar</Link>
        </div>
      </div>
    </div>
  )
}

