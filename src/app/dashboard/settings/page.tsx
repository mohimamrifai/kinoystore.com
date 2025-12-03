"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  return (
    <section className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Pengaturan</CardTitle>
          <CardDescription>Konfigurasi umum dan pembayaran</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-3">
            <Label htmlFor="site-name">Nama Situs</Label>
            <Input id="site-name" placeholder="kinoystore.com" defaultValue="kinoystore.com" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="midtrans-key">Midtrans Client Key</Label>
            <Input id="midtrans-key" placeholder="" />
          </div>
          <div className="grid gap-3 md:col-span-2">
            <Button>Simpan</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

