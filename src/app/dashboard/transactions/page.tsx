"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

type Transaksi = {
  id: string
  tanggal: string
  paket: string
  status: "success" | "pending" | "failed"
  total: string
}

const data: Transaksi[] = [
  { id: "INV-2025-0001", tanggal: "02 Des 2025", paket: "Grade A • 30 Hari • Android", status: "success", total: "Rp 120.000" },
  { id: "INV-2025-0002", tanggal: "28 Nov 2025", paket: "Grade A • 60 Hari • Android", status: "pending", total: "Rp 220.000" },
  { id: "INV-2025-0003", tanggal: "15 Nov 2025", paket: "Grade A • 90 Hari • Android", status: "failed", total: "Rp 300.000" },
]

export default function Page() {
  const router = useRouter()
  return (
    <section className="grid gap-6">
      <Card className="min-w-0">
        <CardHeader>
          <CardTitle>Transaksi</CardTitle>
          <CardDescription>Daftar semua transaksi</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Produk</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((t) => (
                <TableRow
                  key={t.id}
                  className="cursor-pointer"
                  onClick={() => router.push(`/dashboard/transactions/${t.id}`)}
                >
                  <TableCell className="font-medium">{t.id}</TableCell>
                  <TableCell>{t.tanggal}</TableCell>
                  <TableCell>{t.paket}</TableCell>
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
                  <TableCell>{t.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}
