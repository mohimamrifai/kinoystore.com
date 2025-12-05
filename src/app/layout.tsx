import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Beli Kode Redfinger Resmi | Instan & Terpercaya",
    template: "%s | kinoystore.com",
  },
  description:
    "Beli kode Redfinger resmi untuk akses Cloud Android. Proses cepat, pembayaran aman, dan kode dikirim otomatis ke akun & email.",
  keywords: [
    "Redfinger",
    "Cloud Android",
    "Beli kode Redfinger",
    "Kode Redfinger instan",
    "Midtrans",
    "kinoystore",
  ],
  openGraph: {
    title: "Beli Kode Redfinger Resmi | Instan & Terpercaya",
    description:
      "Aktifkan akses Cloud Android Redfinger dalam hitungan menit. Pembayaran aman via Midtrans, kode dikirim otomatis.",
    type: "website",
    siteName: "kinoystore.com",
  },
  twitter: {
    card: "summary",
    title: "Beli Kode Redfinger Resmi | Instan & Terpercaya",
    description:
      "Aktifkan akses Cloud Android Redfinger dalam hitungan menit dengan pembayaran aman dan pengiriman kode otomatis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
