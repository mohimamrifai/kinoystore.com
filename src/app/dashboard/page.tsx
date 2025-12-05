"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts"
import Link from "next/link"
import { QuickActions } from "@/components/quick-actions"
import { BarChart2Icon, ShoppingCartIcon, CheckCircle2Icon, ClockIcon, XCircleIcon, PackageIcon, UsersIcon, SettingsIcon } from "lucide-react"

type Transaksi = {
  id: string
  tanggal: string
  status: "success" | "pending" | "failed"
  total: number
}

const transaksiTerbaru: Transaksi[] = [
  { id: "INV-2025-0007", tanggal: "03 Des 2025", status: "success", total: 120000 },
  { id: "INV-2025-0006", tanggal: "03 Des 2025", status: "pending", total: 220000 },
  { id: "INV-2025-0005", tanggal: "02 Des 2025", status: "failed", total: 300000 },
]

const penjualanHarian = [
  { day: "27 Nov", total: 4 },
  { day: "28 Nov", total: 6 },
  { day: "29 Nov", total: 2 },
  { day: "30 Nov", total: 8 },
  { day: "01 Des", total: 10 },
  { day: "02 Des", total: 7 },
  { day: "03 Des", total: 5 },
]

const chartConfig = {
  total: {
    label: "Transaksi",
    color: "var(--primary)",
  },
} as const

export default function Page() {
  const totalHariIni = 5
  const sukses = 42
  const pending = 7
  const gagal = 3
  const stokKode = 1240

  return (
    <section className="grid gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-md bg-[#ff731a]/10 text-[#ff731a] h-8 w-8">
                <BarChart2Icon className="h-4 w-4" />
              </span>
              <CardTitle className="text-sm">Penjualan Hari Ini</CardTitle>
            </div>
            <CardDescription>Jumlah transaksi yang selesai</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">{totalHariIni}</div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-md bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 h-8 w-8">
                <CheckCircle2Icon className="h-4 w-4" />
              </span>
              <CardTitle className="text-sm">Transaksi Sukses</CardTitle>
            </div>
            <CardDescription>Total sukses bulan ini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">{sukses}</div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-md bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 h-8 w-8">
                <ClockIcon className="h-4 w-4" />
              </span>
              <CardTitle className="text-sm">Transaksi Pending</CardTitle>
            </div>
            <CardDescription>Menunggu pembayaran</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">{pending}</div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-md bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 h-8 w-8">
                <XCircleIcon className="h-4 w-4" />
              </span>
              <CardTitle className="text-sm">Transaksi Gagal</CardTitle>
            </div>
            <CardDescription>Gagal atau kadaluarsa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">{gagal}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>Grafik Penjualan</CardTitle>
          <CardDescription>Transaksi per hari (7 hari terakhir)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full">
            <BarChart data={penjualanHarian} margin={{ left: 12, right: 12 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis allowDecimals={false} width={28} tickLine={false} axisLine={false} />
              <Bar dataKey="total" fill="var(--color-total)" radius={[6, 6, 0, 0]} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent nameKey="total" />} />
              <ChartLegend content={<ChartLegendContent nameKey="total" />} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Transaksi Terbaru</CardTitle>
              <CardDescription>3 transaksi terakhir</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link href="/dashboard/transactions">Lihat Semua</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transaksiTerbaru.map((t) => (
                  <TableRow key={t.id}>
                    <TableCell className="font-medium">{t.id}</TableCell>
                    <TableCell>{t.tanggal}</TableCell>
                    <TableCell>
                      {t.status === "success" && (
                        <Badge variant="outline" className="text-emerald-700 dark:text-emerald-300">Sukses</Badge>
                      )}
                      {t.status === "pending" && (
                        <Badge variant="outline" className="text-amber-700 dark:text-amber-300">Pending</Badge>
                      )}
                      {t.status === "failed" && (
                        <Badge variant="outline" className="text-red-700 dark:text-red-300">Gagal</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">Rp {t.total.toLocaleString("id-ID")}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ringkasan Stok Kode</CardTitle>
            <CardDescription>Total kode tersedia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <PackageIcon className="h-5 w-5 text-muted-foreground" />
              <div className="text-2xl font-semibold">{stokKode}</div>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center justify-between"><span>Grade A</span><span className="font-medium">780</span></div>
              <div className="flex items-center justify-between"><span>Grade B</span><span className="font-medium">320</span></div>
              <div className="flex items-center justify-between"><span>Grade C</span><span className="font-medium">140</span></div>
              <div className="flex items-center justify-between"><span>Android</span><span className="font-medium">960</span></div>
              <div className="flex items-center justify-between"><span>iOS</span><span className="font-medium">180</span></div>
              <div className="flex items-center justify-between"><span>Windows</span><span className="font-medium">100</span></div>
            </div>
            <Button className="mt-4 w-full" asChild>
              <Link href="/dashboard/products">Kelola Stok</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <QuickActions />
    </section>
  )
}
