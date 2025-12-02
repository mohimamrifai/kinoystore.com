"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function Page() {
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="rounded-2xl border bg-white dark:bg-neutral-900">
        <CardHeader className="border-b">
          <CardTitle className="text-lg">Profil Akun</CardTitle>
          <CardDescription>Perbarui informasi profil Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 max-w-md">
            <div className="grid gap-2">
              <Label htmlFor="nama">Nama Lengkap</Label>
              <Input id="nama" placeholder="Nama Anda" defaultValue="Budi Santoso" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@contoh.com" defaultValue="budi@contoh.com" disabled />
            </div>
            <div className="flex gap-2">
              <Button>Simpan Perubahan</Button>
              <Button variant="outline">Batalkan</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border bg-white dark:bg-neutral-900">
        <CardHeader className="border-b">
          <CardTitle className="text-lg">Ubah Password</CardTitle>
          <CardDescription>Atur ulang password akun Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 max-w-md">
            <div className="grid gap-2">
              <Label htmlFor="current">Password Saat Ini</Label>
              <div className="relative">
                <Input id="current" type={showCurrent ? "text" : "password"} placeholder="••••••••" className="pr-10" />
                <button
                  type="button"
                  aria-label={showCurrent ? "Sembunyikan password" : "Tampilkan password"}
                  onClick={() => setShowCurrent((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {showCurrent ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new">Password Baru</Label>
              <div className="relative">
                <Input id="new" type={showNew ? "text" : "password"} placeholder="••••••••" className="pr-10" />
                <button
                  type="button"
                  aria-label={showNew ? "Sembunyikan password" : "Tampilkan password"}
                  onClick={() => setShowNew((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {showNew ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm">Konfirmasi Password Baru</Label>
              <div className="relative">
                <Input id="confirm" type={showConfirm ? "text" : "password"} placeholder="••••••••" className="pr-10" />
                <button
                  type="button"
                  aria-label={showConfirm ? "Sembunyikan password" : "Tampilkan password"}
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <Button>Ubah Password</Button>
              <Button variant="outline">Batalkan</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
