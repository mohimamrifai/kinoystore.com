import { Package, CreditCard, Mail, ArrowRight } from "lucide-react"

export default function CaraKerja() {
    const steps = [
        {
            icon: Package,
            title: "Pilih paket",
            desc: "Temukan paket yang sesuai dengan kebutuhan Anda"
        },
        {
            icon: CreditCard,
            title: "Lakukan pembayaran",
            desc: "Proses pembayaran yang aman dan cepat"
        },
        {
            icon: Mail,
            title: "Kode langsung dikirim",
            desc: "Kode akses otomatis dikirim ke akun & email Anda"
        },
    ]

    return (
        <section id="cara-kerja" className="py-20 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Mulai Gunakan Redfinger dengan Mudah
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Tiga langkah cepat untuk aktivasi akses Cloud Android—praktis, aman, dan langsung siap dipakai.
                    </p>
                </div>


                <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-5xl mx-auto">
                    {steps.map((s, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg bg-red-600 dark:bg-red-700">
                                <s.icon className="h-10 w-10 text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-red-600 dark:text-red-400">
                                {i === 0 ? "Pilih Paket Ideal" : i === 1 ? "Bayar Aman & Cepat" : "Kode Instan Terkirim"}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-xs mx-auto">
                                {i === 0 ? "Temukan paket yang paling cocok untuk kebutuhanmu." : i === 1 ? "Pembayaran mudah, aman, dan langsung diproses." : "Kode akses langsung masuk ke akun & emailmu, tanpa tunggu lama."}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-3 bg-red-600 dark:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        Mulai Sekarang
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}

