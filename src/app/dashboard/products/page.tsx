"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { PlusIcon, MoreVerticalIcon, EyeIcon, PencilIcon, Trash2Icon } from "lucide-react"

export default function Page() {
  return (
    <section className="grid gap-6">
      <Card className="min-w-0">
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle>Produk</CardTitle>
            <CardDescription>Manajemen paket dan harga</CardDescription>
          </div>
          <Button asChild>
            <Link href="#"><PlusIcon className="mr-2 h-4 w-4" /> Tambah Produk</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Durasi</TableHead>
                <TableHead>Device</TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="sticky right-0 z-10 bg-background border-l min-w-[72px] sm:min-w-[88px]">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Redfinger A 30 Android</TableCell>
                <TableCell>A</TableCell>
                <TableCell>30 Hari</TableCell>
                <TableCell>Android</TableCell>
                <TableCell>Rp 120.000</TableCell>
                <TableCell>Aktif</TableCell>
                <TableCell className="sticky right-0 z-10 bg-background border-l min-w-[72px] sm:min-w-[88px]">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="size-8">
                        <MoreVerticalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <EyeIcon /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <PencilIcon /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem variant="destructive">
                        <Trash2Icon /> Hapus
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}
