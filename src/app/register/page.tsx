"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"

type RegisterValues = {
  name: string
  email: string
  password: string
  confirm: string
}

export default function Page() {
  const form = useForm<RegisterValues>({
    defaultValues: { name: "", email: "", password: "", confirm: "" },
    mode: "onSubmit",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  function onSubmit(values: RegisterValues) {
    console.log("register", values)
  }

  return (
    <div className="min-h-dvh grid place-items-center px-6">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/logo.png" alt="Kinoystore Logo" width={64} height={64} priority className="h-12 w-12 object-contain" />
            <Link href="/" className="text-lg font-bold leading-none">kinoystore.com</Link>
          </div>
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
                      <Input type="text" placeholder="Nama lengkap" {...field} />
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
                name="password"
                rules={{ required: "Password wajib diisi" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="pr-10" {...field} />
                        <button
                          type="button"
                          aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                          onClick={() => setShowPassword((v) => !v)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm"
                rules={{
                  required: "Konfirmasi password wajib diisi",
                  validate: (v) => v === form.getValues("password") || "Konfirmasi password tidak cocok",
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konfirmasi Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type={showConfirm ? "text" : "password"} placeholder="••••••••" className="pr-10" {...field} />
                        <button
                          type="button"
                          aria-label={showConfirm ? "Sembunyikan konfirmasi" : "Tampilkan konfirmasi"}
                          onClick={() => setShowConfirm((v) => !v)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                        >
                          {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Daftar</Button>
              <Button type="button" variant="outline" className="w-full">Daftar dengan Google</Button>
            </form>
          </Form>
        </div>
        <div className="mt-3 text-center text-xs text-gray-600 dark:text-gray-400">
          <span>
            Sudah punya akun? <Link href="/login" className="font-medium text-red-600 hover:underline">Masuk</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

