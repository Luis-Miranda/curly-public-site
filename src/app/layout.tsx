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
        <header className="flex justify-between items-center p-4 border-b">
          <Link href="/">
            <h1 className="text-xl font-bold">Curly</h1>
          </Link>
          <nav className="space-x-4">
            <Link href="/servicios">Servicios</Link>
            <Link href="/productos">Productos</Link>
            <Link href="/testimonios">Testimonios</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/reservar">Reservar</Link>
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
