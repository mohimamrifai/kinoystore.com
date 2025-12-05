"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from "recharts"
import { BarChart2Icon } from "lucide-react"

const salesData = [
  { day: "27 Nov", sales: 4 },
  { day: "28 Nov", sales: 6 },
  { day: "29 Nov", sales: 2 },
  { day: "30 Nov", sales: 8 },
  { day: "01 Des", sales: 10 },
  { day: "02 Des", sales: 7 },
  { day: "03 Des", sales: 5 },
]

const statusData = [
  { day: "27 Nov", success: 3, pending: 1, failed: 0 },
  { day: "28 Nov", success: 4, pending: 2, failed: 0 },
  { day: "29 Nov", success: 1, pending: 1, failed: 0 },
  { day: "30 Nov", success: 6, pending: 1, failed: 1 },
  { day: "01 Des", success: 8, pending: 2, failed: 0 },
  { day: "02 Des", success: 5, pending: 1, failed: 1 },
  { day: "03 Des", success: 4, pending: 1, failed: 0 },
]

const revenueDaily = [
  { day: "27 Nov", revenue: 480000 },
  { day: "28 Nov", revenue: 720000 },
  { day: "29 Nov", revenue: 240000 },
  { day: "30 Nov", revenue: 960000 },
  { day: "01 Des", revenue: 1200000 },
  { day: "02 Des", revenue: 840000 },
  { day: "03 Des", revenue: 600000 },
]

const revenueByProduct = [
  { product: "Grade A • 30 Hari", revenue: 780000 },
  { product: "Grade A • 60 Hari", revenue: 920000 },
  { product: "Grade B • 30 Hari", revenue: 520000 },
  { product: "Grade C • 30 Hari", revenue: 260000 },
]

const salesConfig = {
  sales: {
    label: "Penjualan",
    color: "var(--chart-2)",
  },
} as const

const statusConfig = {
  success: { label: "Sukses", color: "var(--chart-1)" },
  pending: { label: "Pending", color: "var(--chart-4)" },
  failed: { label: "Gagal", color: "var(--chart-5)" },
} as const

const revenueConfig = {
  revenue: { label: "Pendapatan", color: "var(--primary)" },
} as const

export default function Page() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-start gap-2">
            <BarChart2Icon className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <CardTitle>Laporan</CardTitle>
              <CardDescription>Grafik penjualan dan ringkasan</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tren Penjualan (7 Hari)</CardTitle>
          <CardDescription>Jumlah transaksi per hari</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={salesConfig} className="w-full">
            <LineChart data={salesData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis allowDecimals={false} width={28} tickLine={false} axisLine={false} />
              <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" strokeWidth={2} dot={false} />
              <ChartTooltip content={<ChartTooltipContent nameKey="sales" />} />
              <ChartLegend content={<ChartLegendContent nameKey="sales" />} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Status Transaksi (7 Hari)</CardTitle>
          <CardDescription>Perbandingan sukses, pending, gagal</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={statusConfig} className="w-full">
            <BarChart data={statusData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis allowDecimals={false} width={28} tickLine={false} axisLine={false} />
              <Bar dataKey="success" stackId="a" fill="var(--color-success)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="pending" stackId="a" fill="var(--color-pending)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="failed" stackId="a" fill="var(--color-failed)" radius={[6, 6, 0, 0]} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pendapatan Harian</CardTitle>
          <CardDescription>Total pendapatan per hari</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={revenueConfig} className="w-full">
            <AreaChart data={revenueDaily} margin={{ left: 12, right: 12 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis width={48} tickLine={false} axisLine={false} />
              <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" fill="var(--color-revenue)" fillOpacity={0.15} />
              <ChartTooltip content={<ChartTooltipContent nameKey="revenue" />} />
              <ChartLegend content={<ChartLegendContent nameKey="revenue" />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pendapatan per Produk</CardTitle>
          <CardDescription>Grade dan durasi</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={revenueConfig} className="w-full">
            <BarChart data={revenueByProduct} margin={{ left: 12, right: 12 }} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickLine={false} axisLine={false} />
              <YAxis type="category" dataKey="product" tickLine={false} axisLine={false} width={120} />
              <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[0, 6, 6, 0]}>
                {revenueByProduct.map((_, i) => (
                  <Cell key={`cell-${i}`} fill={`var(--chart-${(i % 4) + 1})`} />
                ))}
              </Bar>
              <ChartTooltip content={<ChartTooltipContent nameKey="revenue" />} />
              <ChartLegend content={<ChartLegendContent nameKey="revenue" />} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  )
}
