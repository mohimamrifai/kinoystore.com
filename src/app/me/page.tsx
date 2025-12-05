"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { Mail, User, ShoppingCart, ListOrdered, KeyRound, Clock, CreditCard, History } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Transaksi = {
  id: string
  tanggal: string
  paket: string
  status: "success" | "pending" | "failed"
  total: string
}

const transaksiDummy: Transaksi[] = [
  { id: "INV-2025-0001", tanggal: "02 Des 2025", paket: "Grade A • 30 Hari • Android", status: "success", total: "Rp 120.000" },
  { id: "INV-2025-0002", tanggal: "28 Nov 2025", paket: "Grade A • 60 Hari • Android", status: "pending", total: "Rp 220.000" },
  { id: "INV-2025-0003", tanggal: "15 Nov 2025", paket: "Grade A • 90 Hari • Android", status: "failed", total: "Rp 300.000" },
]

export default function Page() {
  const totalNominalBerhasil = transaksiDummy
    .filter((t) => t.status === "success")
    .reduce((sum, t) => sum + parseInt(t.total.replace(/[^\d]/g, ""), 10), 0)
  const formatRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format
  return (
    <section className="grid gap-6">
      <Card className="min-w-0 rounded-2xl border bg-white dark:bg-neutral-900">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2 text-lg">
            <User className="h-5 w-5" /> Akun Saya
          </CardTitle>
          <CardDescription>Detail akun</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src="/avatar.png" alt="Avatar" />
              <AvatarFallback>KS</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Budi Santoso</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" /> budi@contoh.com
              </div>
              
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="min-w-0 rounded-2xl border bg-white dark:bg-neutral-900">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2 text-lg">
            <ShoppingCart className="h-5 w-5" /> Aksi Cepat
          </CardTitle>
          <CardDescription>Perintah cepat untuk aktivitas umum</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button className="gap-2" asChild>
              <Link href="/">
                <KeyRound className="h-4 w-4" /> Beli Kode Redfinger
              </Link>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/me/transactions">
                <ListOrdered className="h-4 w-4" /> Lihat Riwayat
              </Link>
            </Button>
            
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="min-w-0 rounded-2xl border bg-white dark:bg-neutral-900">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2 text-lg">
              <CreditCard className="h-5 w-5" /> Total Pembelian
            </CardTitle>
          <CardDescription>Ringkasan transaksi yang berhasil</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-3">
            <div className="text-3xl font-bold">{formatRupiah(totalNominalBerhasil)}</div>
          </div>
        </CardContent>
      </Card>
        <Card className="min-w-0 rounded-2xl border bg-white dark:bg-neutral-900">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2 text-lg">
              <KeyRound className="h-5 w-5" /> Kode Aktif
            </CardTitle>
            <CardDescription>Jumlah kode Redfinger aktif</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card className="min-w-0 rounded-2xl border bg-white dark:bg-neutral-900">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5" /> Pembayaran Pending
            </CardTitle>
            <CardDescription>Transaksi menunggu konfirmasi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
          </CardContent>
        </Card>
      </div>

      <Card className="min-w-0 rounded-2xl border bg-white dark:bg-neutral-900">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2 text-lg">
            <History className="h-5 w-5" /> Transaksi Terbaru
          </CardTitle>
          <CardDescription>3 transaksi terakhir Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Paket</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transaksiDummy.map((t) => (
                <TableRow key={t.id}>
                  <TableCell>{t.id}</TableCell>
                  <TableCell>{t.tanggal}</TableCell>
                  <TableCell>{t.paket}</TableCell>
                  <TableCell>
                  {t.status === "success" && (
                    <Badge variant="default" className="border-transparent bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Berhasil</Badge>
                  )}
                  {t.status === "pending" && (
                    <Badge variant="default" className="border-transparent bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Pending</Badge>
                  )}
                  {t.status === "failed" && (
                    <Badge variant="default" className="border-transparent bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">Gagal</Badge>
                  )}
                </TableCell>
                <TableCell>{t.total}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="text-xs" asChild>
                    <Link href={`/me/detail?id=${encodeURIComponent(t.id)}`}>Lihat Detail</Link>
                  </Button>
                </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}

