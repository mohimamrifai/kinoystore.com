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
    <div className="min-h-dvh grid place-items-center px-6 py-10 md:py-16">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-black/40 p-8 md:p-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/logo.png" alt="Kinoystore Logo" width={64} height={64} priority className="h-14 w-14 object-contain" />
            <Link href="/" className="text-2xl md:text-3xl font-bold italic leading-none text-[#ff731a]">KINOY STORE</Link>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Nama wajib diisi" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Nama lengkap" className="h-11 text-base" {...field} />
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
                      <Input type="email" placeholder="nama@contoh.com" className="h-11 text-base" {...field} />
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
                        <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="pr-10 h-11 text-base" {...field} />
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
                        <Input type={showConfirm ? "text" : "password"} placeholder="••••••••" className="pr-10 h-11 text-base" {...field} />
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
              <Button type="submit" size="lg" className="w-full h-11 text-base bg-[#ff731a] text-white hover:bg-[#e86615] dark:bg-[#ff731a] dark:hover:bg-[#e86615] cursor-pointer">Daftar</Button>
              <div className="relative flex items-center justify-center my-1">
                <span className="absolute px-3 text-sm text-gray-500 bg-white dark:bg-black/40">atau</span>
                <div className="w-full h-px bg-gray-300 dark:bg-neutral-700"></div>
              </div>
              <Button type="button" variant="outline" size="lg" className="w-full h-11 text-base cursor-pointer">
                <svg className="inline-block mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Lanjutkan dengan Google
              </Button>
          </form>
          </Form>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <span>
            Sudah punya akun? <Link href="/login" className="font-medium text-[#ff731a] hover:underline">Masuk</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

