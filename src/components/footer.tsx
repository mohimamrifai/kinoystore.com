export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} kinoystore.com</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Pembayaran: Midtrans • Email: Otomatis</div>
      </div>
    </footer>
  );
}