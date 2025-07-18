'use client'

export default function Testimonios() {
  const testimonios = [
    {
      nombre: 'Ana López',
      mensaje:
        'Nunca había sentido mis rizos tan definidos y sanos. ¡Amo la experiencia Curly!',
    },
    {
      nombre: 'Mariana Ruiz',
      mensaje:
        'El corte en seco fue lo mejor que me ha pasado. ¡Entienden perfecto mi tipo de rizo!',
    },
    {
      nombre: 'Claudia Herrera',
      mensaje:
        'Siempre salgo feliz. Atención excelente y productos de calidad.',
    },
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Testimonios</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonios.map((t, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <p className="text-gray-800 italic">"{t.mensaje}"</p>
            <p className="mt-4 font-bold text-right text-curly-dorado">– {t.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
