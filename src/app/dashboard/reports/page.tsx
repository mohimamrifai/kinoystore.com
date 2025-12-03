"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts"

const data = [
  { day: "27 Nov", sales: 4 },
  { day: "28 Nov", sales: 6 },
  { day: "29 Nov", sales: 2 },
  { day: "30 Nov", sales: 8 },
  { day: "01 Des", sales: 10 },
  { day: "02 Des", sales: 7 },
  { day: "03 Des", sales: 5 },
]

const chartConfig = {
  sales: {
    label: "Penjualan",
    theme: { light: "hsl(var(--chart-2))", dark: "hsl(var(--chart-2))" },
  },
} as const

export default function Page() {
  return (
    <section className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Laporan</CardTitle>
          <CardDescription>Grafik penjualan</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full">
            <LineChart data={data} margin={{ left: 12, right: 12 }}>
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
    </section>
  )
}

