'use client'

export default function Contacto() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contáctanos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border p-3 rounded"
            required
          />
          <textarea
            placeholder="Mensaje"
            className="w-full border p-3 rounded h-32"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Enviar mensaje
          </button>
        </form>

        <iframe
          className="w-full h-64 md:h-full rounded-lg border"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=TU_API_KEY_AQUI&q=Av.+Víctor+Hugo+81,+Ciudad+de+México"
        ></iframe>
      </div>
    </section>
  )
}
