import './globals.css'

import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Curly',
  description: 'La experiencia Curly que transforma tu cabello.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="flex justify-between items-center px-8 py-4 border-b border-curly-dorado bg-curly-blanco">
  <Link href="/">
    <h1 className="text-2xl font-bold text-curly-negro">Curly</h1>
  </Link>
  <nav className="space-x-6 text-sm font-medium">
    <Link href="/servicios" className="text-curly-negro hover:text-curly-dorado transition">Servicios</Link>
    <Link href="/productos" className="text-curly-negro hover:text-curly-dorado transition">Productos</Link>
    <Link href="/testimonios" className="text-curly-negro hover:text-curly-dorado transition">Testimonios</Link>
    <Link href="/contacto" className="text-curly-negro hover:text-curly-dorado transition">Contacto</Link>
    <Link href="/reservar" className="text-curly-dorado font-semibold hover:underline">Reservar</Link>
  </nav>
</header>

        <main className="min-h-screen p-4">
          {children}
        </main>
        <footer className="p-4 border-t text-center text-sm text-muted-foreground">
          @MaravillaCurly {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  )
}
