'use client'

export default function ProductosDestacados() {
  const productos = [
    {
      nombre: 'Crema activadora de rizos',
      descripcion: 'Define y da forma a tus rizos sin frizz.',
    },
    {
      nombre: 'Shampoo sin sulfatos',
      descripcion: 'Limpieza suave que protege la hidratación natural.',
    },
    {
      nombre: 'Mascarilla hidratante',
      descripcion: 'Nutrición profunda para rizos resecos.',
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Productos destacados</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {productos.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-curly-negro mb-2">{p.nombre}</h3>
            <p className="text-gray-700">{p.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
