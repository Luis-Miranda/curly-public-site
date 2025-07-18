'use client'

export default function ServiciosDestacados() {
  const servicios = [
    {
      nombre: 'Definición de rizos',
      descripcion: 'Realce natural de tus rizos con técnicas especializadas.',
      imagen: 'https://source.unsplash.com/600x400/?curly-hair',
    },
    {
      nombre: 'Corte en seco',
      descripcion: 'Corte según el patrón natural de tus rizos, sin sorpresas.',
      imagen: 'https://source.unsplash.com/600x400/?haircut',
    },
    {
      nombre: 'Hidratación profunda',
      descripcion: 'Tratamientos intensivos para rizos suaves y brillantes.',
      imagen: 'https://source.unsplash.com/600x400/?hair-treatment',
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Servicios Destacados</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {servicios.map((servicio) => (
          <div
            key={servicio.nombre}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{servicio.nombre}</h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
