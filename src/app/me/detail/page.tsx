"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Suspense, useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import { CheckCircle2 as CheckCircle2Icon, Clock as ClockIcon, XCircle as XCircleIcon, FileDown as FileDownIcon, Copy as CopyIcon, Check as CheckIcon } from "lucide-react"

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

type KodeRedeem = {
  code: string
  grade: "A" | "B" | "C"
  durasi: number
  device: "Android" | "iOS" | "Windows"
}

const kodeByInvoice: Record<string, KodeRedeem[]> = {
  "INV-2025-0001": [
    { code: "RF-A-30-ANDROID-0001", grade: "A", durasi: 30, device: "Android" },
  ],
  "INV-2025-0002": [
    { code: "RF-A-60-ANDROID-0001", grade: "A", durasi: 60, device: "Android" },
  ],
  "INV-2025-0003": [
    { code: "RF-A-90-ANDROID-0001", grade: "A", durasi: 90, device: "Android" },
  ],
}

export default function Page() {
  return (
    <Suspense fallback={<Spinner className="mx-auto size-6" />}>
      <DetailContent />
    </Suspense>
  )
}

function DetailContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = searchParams.get("id")
  const trx = transaksiDummy.find((t) => t.id === id)
  const kodes = id ? (kodeByInvoice[id] ?? []) : []
  const [copied, setCopied] = useState<string | null>(null)

  function download(filename: string, content: string, mime: string) {
    const blob = new Blob([content], { type: mime })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleDownloadTxt() {
    const lines = kodes.map((k) => k.code).join("\n")
    download(`${id}-codes.txt`, lines, "text/plain")
  }

  function handleCopy(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(code)
      setTimeout(() => setCopied(null), 1500)
    })
  }

  return (
    <section className="grid gap-6">
      <Card className="rounded-2xl border bg-white dark:bg-neutral-900">
        <CardHeader className="border-b">
          <CardTitle className="text-lg">Detail Transaksi</CardTitle>
          <CardDescription>Informasi transaksi dan kode yang dibeli</CardDescription>
        </CardHeader>
        <CardContent>
          {trx ? (
            <div className="grid gap-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <div className="text-muted-foreground">Invoice</div>
                  <div className="font-medium">{trx.id}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Tanggal</div>
                  <div className="font-medium">{trx.tanggal}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Paket</div>
                  <div className="font-medium">{trx.paket}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Total</div>
                  <div className="font-medium">{trx.total}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Status</div>
                  <div>
                    {trx.status === "success" && (
                      <Badge variant="outline" className="text-emerald-700 dark:text-emerald-300"><CheckCircle2Icon /> Berhasil</Badge>
                    )}
                    {trx.status === "pending" && (
                      <Badge variant="outline" className="text-amber-700 dark:text-amber-300"><ClockIcon /> Pending</Badge>
                    )}
                    {trx.status === "failed" && (
                      <Badge variant="outline" className="text-red-700 dark:text-red-300"><XCircleIcon /> Gagal</Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="gap-2" onClick={handleDownloadTxt} disabled={kodes.length === 0}>
                    <FileDownIcon className="h-4 w-4" /> Download .txt
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Kode</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Durasi (Hari)</TableHead>
                      <TableHead>Device</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {kodes.map((k) => (
                      <TableRow key={k.code}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span>{k.code}</span>
                            <Button variant="outline" size="sm" className="gap-1" onClick={() => handleCopy(k.code)}>
                              {copied === k.code ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
                              {copied === k.code ? "Tersalin" : "Salin"}
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>{k.grade}</TableCell>
                        <TableCell>{k.durasi}</TableCell>
                        <TableCell>{k.device}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div>
                <Button variant="outline" asChild>
                  <Link href="/me/transactions">Kembali ke Riwayat</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="text-sm">Pilih transaksi untuk melihat detail.</div>
              <div className="flex items-center gap-2">
                <Select onValueChange={(val) => router.push(`/me/detail?id=${encodeURIComponent(val)}`)}>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Pilih Invoice" />
                  </SelectTrigger>
                  <SelectContent>
                    {transaksiDummy.map((t) => (
                      <SelectItem key={t.id} value={t.id}>{t.id}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline" asChild>
                  <Link href="/me/transactions">Buka Riwayat</Link>
                </Button>
              </div>

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
                          <Badge variant="outline" className="text-emerald-700 dark:text-emerald-300"><CheckCircle2Icon /> Berhasil</Badge>
                        )}
                        {t.status === "pending" && (
                          <Badge variant="outline" className="text-amber-700 dark:text-amber-300"><ClockIcon /> Pending</Badge>
                        )}
                        {t.status === "failed" && (
                          <Badge variant="outline" className="text-red-700 dark:text-red-300"><XCircleIcon /> Gagal</Badge>
                        )}
                      </TableCell>
                      <TableCell>{t.total}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/me/detail?id=${encodeURIComponent(t.id)}`}>Lihat Detail</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
