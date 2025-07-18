'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white text-center py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Vive la experiencia Curly
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Transforma tu cabello con nuestros expertos en rizos. Servicios personalizados, productos naturales y resultados que te enamoran.
      </p>
      <Link
        href="/reservar"
        className="inline-block bg-black text-white hover:bg-gray-800 transition px-6 py-3 rounded-full font-semibold"
      >
        Reservar cita
      </Link>
    </section>
  )
}
