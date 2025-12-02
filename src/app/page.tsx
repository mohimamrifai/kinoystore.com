import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Keunggulan from "@/components/keunggulan";
import CaraKerja from "@/components/cara-kerja";
import Paket from "@/components/paket";
import Kontak from "@/components/kontak";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-neutral-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <Keunggulan />
      <Paket />
      <CaraKerja />
      <Kontak />
      <Footer />
    </div>
  );
}
