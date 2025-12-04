- set up prisma dan postgress untuk database
    - install prisma dan postgress
    - init prisma
    - buat model model database
    - buat file env untuk prisma connection string
- set up model model database
    - buat model model database
- set up nodemailer untuk mengirim email
    - install nodemailer
    - set up nodemailer account
- Set up the next auth untuk login dan register
    - install next auth
    - set up next auth account
- set up midtrans untuk pembayaran
    - install midtrans sdk
    - set up midtrans account
    - set up midtrans notification endpoint


Rangkuman Project – Website Penjualan Digital Product (Redfinger)

1. Identitas & Ruang Lingkup Project

Client: Qinansyah
Jenis proyek: Website penjualan produk digital (Redfinger)
Referensi: ourcloud.id
Teknologi utama: Next.js, postgresql, prisma, tailwindcss, shadcn-ui
Nama Aplikasi Web: kinoystore.com

Website akan menjual produk digital Redfinger dengan fitur otomatisasi distribusi kode.

2. Alur Bisnis (Flow) yang Diminta Client

Alur dari supplier → website:

- Owner order produk ke supplier. ( luar aplikasi dan hanya bersifat informasi )
- Supplier mengirim file .txt/.csv berisi kumpulan kode. ( luar aplikasi dan hanya bersifat informasi )
- Owner upload file tersebut melalui dashboard admin.
- Sistem membaca kode dan menyimpannya ke database sesuai kategori (grade, durasi, device, dll).
Pembeli melakukan order melalui website.
- Setelah pembayaran terverifikasi, sistem mengirimkan kode secara otomatis lewat website & email.
- Stok kode berkurang otomatis.
- Semua transaksi tercatat di dashboard admin.

3. Fitur yang Akan Dibangun

# Fitur Admin
- Upload file kode .txt/.csv
- Parsing otomatis → masuk ke database
- Manajemen produk (grade, durasi, device, harga, status)
- Manajemen stok kode
- Manajemen transaksi & user
- Dashboard laporan & riwayat transaksi
# Fitur Pembeli
- Registrasi & login (Email dan Google)
- Melihat produk digital & memilih paket
- Melakukan pembayaran otomatis (Midtrans)
- Menerima kode otomatis setelah pembayaran berhasil
- Menerima invoice dan detail transaksi melalui email & dashboard akun
- Fitur Sistem Otomatis
- Auto-assign kode berdasarkan paket pesanan
- Auto send kode ke pembeli (website + email)
- Auto reduce stock
- Auto-generate invoice

# Perkiraan Jumlah Halaman Website

Agar lebih jelas, saya bagi menjadi dua bagian: Halaman untuk Pembeli (Frontend) dan Halaman untuk Admin (Dashboard Admin).

1. Halaman Pembeli (Frontend)
- Estimasi: 10–12 halaman
- Landing Page / Home
- Halaman Produk / Paket (List Paket Redfinger)
- Halaman Detail Paket
- Halaman Login
- Halaman Register
- Halaman Login Via Google (redirect)
- Halaman Checkout
- Halaman Pembayaran (Midtrans Snap redirect/modal)
- Halaman Status Pembayaran (success / pending / failed)
- Halaman Dashboard User
- Halaman Riwayat Transaksi User
- Halaman Detail Transaksi (menampilkan kode yang sudah dibeli)

2. Halaman Admin (Dashboard Admin)
- Estimasi: 12–15 halaman

A. Dashboard Utama
- Dashboard Overview (Ringkasan penjualan, stok, transaksi)

B. Manajemen Produk
- List Produk
- Tambah Produk
- Edit Produk

C. Manajemen Kode Redeem
- Upload File .txt/.csv (Import Kode)
- List Kode (filter: grade, durasi, device)
- Detail Kode / Edit / Hapus Kode (opsional)

D. Transaksi
- List Transaksi
- Detail Transaksi

E. User
- List User
- Detail User

F. Laporan
- Laporan Penjualan
- Laporan Stok
- Laporan Transaksi (opsional)

G. Pengaturan
- Setting Website / Payment / Profile Admin
# kinoystore.com
