"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarInset,
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { HomeIcon, PackageIcon, UsersIcon, ShoppingCartIcon, BarChart2Icon, SettingsIcon } from "lucide-react"
import Image from "next/image"

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-accent": "#ff731a",
          "--sidebar-accent-foreground": "#ffffff",
          "--sidebar-ring": "#ff731a",
          "--sidebar-primary": "#ff731a",
          "--sidebar-primary-foreground": "#ffffff",
          "--primary": "#ff731a",
          "--primary-foreground": "#ffffff",
          "--ring": "#ff731a",
        } as React.CSSProperties
      }
    >
      <div className="flex min-h-svh w-full pb-20">
        <Sidebar>
          <SidebarHeader>
            <div className="px-2 py-1">
              <div className="flex items-center">
                <Image src="/logo.png" alt="KINOY STORE" width={40} height={40} />
                <Link href="/" className="font-semibold tracking-tight text-base lg:text-lg">KINOY STORE</Link>
              </div>
              <div className="text-xs lg:text-sm text-muted-foreground">Admin Panel</div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-sm lg:text-base">Menu</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/dashboard"} className="md:text-sm lg:text-base md:h-9 lg:h-10">
                    <Link href="/dashboard">
                      <HomeIcon />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname.startsWith("/dashboard/products")} className="md:text-sm lg:text-base md:h-9 lg:h-10">
                    <Link href="/dashboard/products">
                      <PackageIcon />
                      <span>Produk</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname.startsWith("/dashboard/transactions")} className="md:text-sm lg:text-base md:h-9 lg:h-10">
                    <Link href="/dashboard/transactions">
                      <ShoppingCartIcon />
                      <span>Transaksi</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname.startsWith("/dashboard/users")} className="md:text-sm lg:text-base md:h-9 lg:h-10">
                    <Link href="/dashboard/users">
                      <UsersIcon />
                      <span>User</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname.startsWith("/dashboard/reports")} className="md:text-sm lg:text-base md:h-9 lg:h-10">
                    <Link href="/dashboard/reports">
                      <BarChart2Icon />
                      <span>Laporan</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname.startsWith("/dashboard/settings")} className="md:text-sm lg:text-base md:h-9 lg:h-10">
                    <Link href="/dashboard/settings">
                      <SettingsIcon />
                      <span>Pengaturan</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarSeparator />
          </SidebarContent>

          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <header className="sticky top-0 z-10 border-b bg-background">
            <div className="flex h-14 items-center gap-2 px-3">
              <SidebarTrigger />
              <Breadcrumb className="hidden sm:flex" />
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/">Lihat Website</Link>
                </Button>
              </div>
            </div>
          </header>
          <div className="p-3 sm:p-4 lg:p-6 pb-20">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

