import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Kinoystore Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="text-xl font-bold text-white">kinoystore.com</span>
          </div>

          <nav className="md:justify-self-end flex flex-col gap-2">
            <Link href="/" className="hover:text-white">Beranda</Link>
            <Link href="/paket" className="hover:text-white">Paket</Link>
            <Link href="/#cara-kerja" className="hover:text-white">Cara Kerja</Link>
            <Link href="/#keunggulan" className="hover:text-white">Keunggulan</Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-gray-800">
          <div className="py-6 text-sm text-gray-400 text-center">© {new Date().getFullYear()} kinoystore.com</div>
        </div>
      </div>
    </footer>
  )
}
