import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon, PackageIcon, BarChart2Icon, UsersIcon, SettingsIcon } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tindakan Cepat</CardTitle>
        <CardDescription>Navigasi menuju fitur inti</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <Button className="w-full" asChild>
            <Link href="/dashboard/products"><ShoppingCartIcon className="mr-2 h-4 w-4" /> Produk</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/dashboard/products"><PackageIcon className="mr-2 h-4 w-4" /> Upload Kode</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/dashboard/transactions"><BarChart2Icon className="mr-2 h-4 w-4" /> Transaksi</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/dashboard/users"><UsersIcon className="mr-2 h-4 w-4" /> User</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/dashboard/reports"><BarChart2Icon className="mr-2 h-4 w-4" /> Laporan</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/dashboard/settings"><SettingsIcon className="mr-2 h-4 w-4" /> Pengaturan</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
