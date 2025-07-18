import Hero from '@/components/Hero'
import ServiciosDestacados from '@/components/ServiciosDestacados'
import Testimonios from '@/components/Testimonios'
import ProductosDestacados from '@/components/ProductosDestacados'
import Contacto from '@/components/Contacto'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServiciosDestacados />
      <Testimonios />
      <ProductosDestacados />
      <Contacto />
    </main>
  )
}
