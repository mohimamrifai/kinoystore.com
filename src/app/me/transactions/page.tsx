"use client"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, XCircle } from "lucide-react"
import { useRouter } from "next/navigation"

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
  const router = useRouter()
  return (
    <section className="min-w-0 w-full max-w-full">
      <Card className="min-w-0 rounded-2xl border bg-white dark:bg-neutral-900 shadow-sm border-gray-200 dark:border-neutral-800 py-4 md:py-6">
        <CardHeader className="border-b px-4 md:px-6">
          <CardTitle className="text-lg">Riwayat Transaksi</CardTitle>
          <CardDescription>Daftar transaksi terbaru Anda</CardDescription>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Paket</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transaksiDummy.map((t) => (
                <TableRow
                  key={t.id}
                  className="cursor-pointer"
                  onClick={() => router.push(`/me/detail?id=${encodeURIComponent(t.id)}`)}
                >
                  <TableCell>{t.id}</TableCell>
                  <TableCell>{t.tanggal}</TableCell>
                  <TableCell>{t.paket}</TableCell>
                  <TableCell>
                    {t.status === "success" && (
                      <Badge variant="outline" className="text-emerald-700 dark:text-emerald-300"><CheckCircle2 /> Berhasil</Badge>
                    )}
                    {t.status === "pending" && (
                      <Badge variant="outline" className="text-amber-700 dark:text-amber-300"><Clock /> Pending</Badge>
                    )}
                    {t.status === "failed" && (
                      <Badge variant="outline" className="text-red-700 dark:text-red-300"><XCircle /> Gagal</Badge>
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
