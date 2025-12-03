import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { cookies } from "next/headers"

type Paket = {
  id: string
  name: string
  durationDays: number
  platform: string
  price: string
}

const packages: Paket[] = [
  { id: "basic-30", name: "Grade A", durationDays: 30, platform: "Android", price: "Rp 120.000" },
  { id: "pro-60", name: "Grade A", durationDays: 60, platform: "Android", price: "Rp 220.000" },
  { id: "premium-90", name: "Grade A", durationDays: 90, platform: "Android", price: "Rp 300.000" },
  { id: "ios-30", name: "Grade A", durationDays: 30, platform: "iOS", price: "Rp 140.000" },
]

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams
  const raw = sp.id ?? sp.paket
  const id = Array.isArray(raw) ? raw[0] : raw
  const paket = packages.find((p) => p.id === id)
  const cookieStore = await cookies()
  const cookieVal = cookieStore.get("user")?.value
  let user: { name: string; email: string } | null = null
  if (cookieVal) {
    try {
      user = JSON.parse(cookieVal)
    } catch {}
  }

  return (
    <div className="min-h-screen font-sans bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-neutral-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <Link href="/" className="text-sm underline">Kembali</Link>
        </div>
        <section id="checkout" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]">
            <div className="absolute -top-28 -left-20 h-72 w-72 bg-linear-to-tr from-rose-500/20 to-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-28 -right-16 h-80 w-80 bg-linear-to-tr from-indigo-500/20 to-rose-500/20 blur-3xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <Card className="rounded-2xl border bg-white dark:bg-neutral-900 shadow-sm border-gray-200 dark:border-neutral-800 py-4 md:py-6 gap-4 md:gap-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-xl font-semibold">Informasi Pengguna</CardTitle>
                <CardDescription>Detail akun untuk proses checkout</CardDescription>
              </CardHeader>
              <CardContent className="px-4 md:px-6 grid gap-4 md:gap-6">
                {!user && (
                  <div className="grid gap-3">
                  <div className="text-sm text-muted-foreground">Silakan masuk atau daftar terlebih dahulu untuk melanjutkan checkout.</div>
                  <div className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link href="/login">Masuk</Link>
                      </Button>
                      <Button variant="destructive" asChild>
                        <Link href="/register">Daftar</Link>
                      </Button>
                    </div>
                  </div>
                )}
                {user && (
                  <div className="grid grid-cols-[140px_1fr] gap-3">
                    <div className="text-sm text-muted-foreground">Nama</div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div>{user.email}</div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-2xl border bg-white dark:bg-neutral-900 shadow-sm border-gray-200 dark:border-neutral-800 py-4 md:py-6 gap-4 md:gap-6">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-xl font-semibold">Ringkasan Paket</CardTitle>
                <CardDescription>{id ?? "Paket belum dipilih"}</CardDescription>
              </CardHeader>
              <CardContent className="px-4 md:px-6 grid gap-4 md:gap-6">
                {!paket && (
                  <div className="text-sm text-muted-foreground">Paket tidak ditemukan</div>
                )}
                {paket && (
                  <div className="grid gap-4">
                    <div className="grid grid-cols-[140px_1fr] gap-3">
                      <div className="text-sm text-muted-foreground">Paket</div>
                      <div className="font-medium">{paket.name} • {paket.durationDays} Hari • {paket.platform}</div>
                      <div className="text-sm text-muted-foreground">Platform</div>
                      <div>
                        <Badge variant="outline" className="mr-2">{paket.platform}</Badge>
                        <Badge variant="outline">{paket.name}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">Durasi</div>
                      <div>{paket.durationDays} Hari</div>
                      <div className="text-sm text-muted-foreground">Harga</div>
                      <div className="text-2xl font-extrabold tracking-tight">{paket.price}</div>
                    </div>
                    {!user && (
                      <Button className="w-full" disabled>Masuk untuk Checkout</Button>
                    )}
                    {user && (
                      <Button className="w-full text-base bg-red-600 text-white hover:bg-red-700 transition-colors" asChild>
                        <Link href="/dashboard/transactions">Checkout</Link>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

