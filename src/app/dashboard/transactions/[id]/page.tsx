import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type Transaksi = {
  id: string
  tanggal: string
  paket: string
  status: "success" | "pending" | "failed"
  total: string
}

const sample: Transaksi[] = [
  { id: "INV-2025-0001", tanggal: "02 Des 2025", paket: "Grade A • 30 Hari • Android", status: "success", total: "Rp 120.000" },
  { id: "INV-2025-0002", tanggal: "28 Nov 2025", paket: "Grade A • 60 Hari • Android", status: "pending", total: "Rp 220.000" },
  { id: "INV-2025-0003", tanggal: "15 Nov 2025", paket: "Grade A • 90 Hari • Android", status: "failed", total: "Rp 300.000" },
]

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const transaksi = sample.find((t) => t.id === id)

  return (
    <section className="grid gap-6">
      <Card className="min-w-0">
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle>Detail Transaksi</CardTitle>
            <CardDescription>{id}</CardDescription>
          </div>
          <Link href="/dashboard/transactions" className="text-sm underline">
            Kembali
          </Link>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-[140px_1fr] gap-3">
            <div className="text-sm text-muted-foreground">Invoice</div>
            <div className="font-medium">{transaksi?.id ?? id}</div>

            <div className="text-sm text-muted-foreground">Tanggal</div>
            <div>{transaksi?.tanggal ?? "-"}</div>

            <div className="text-sm text-muted-foreground">Produk</div>
            <div>{transaksi?.paket ?? "-"}</div>

            <div className="text-sm text-muted-foreground">Status</div>
            <div>
              {transaksi?.status === "success" && (
                <Badge variant="outline" className="text-emerald-700 dark:text-emerald-300">Sukses</Badge>
              )}
              {transaksi?.status === "pending" && (
                <Badge variant="outline" className="text-amber-700 dark:text-amber-300">Pending</Badge>
              )}
              {transaksi?.status === "failed" && (
                <Badge variant="outline" className="text-red-700 dark:text-red-300">Gagal</Badge>
              )}
              {!transaksi && "-"}
            </div>

            <div className="text-sm text-muted-foreground">Total</div>
            <div>{transaksi?.total ?? "-"}</div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
