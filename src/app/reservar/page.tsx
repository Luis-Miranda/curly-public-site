'use client'

import { useState } from 'react'

export default function ReservarPage() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    sucursal: '',
    especialista: '',
    fecha: '',
    hora: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado:', form)
    alert('¡Cita registrada! Te contactaremos pronto ✨')
  }

  return (
    <main className="min-h-screen px-4 py-12 bg-white text-black font-sans">
      <div className="p-4 bg-curly-dorado text-white rounded-lg text-center">
  Test dorado
</div>

      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-tight text-curly-negro">
          Agenda tu cita
        </h1>
        <p className="text-center text-curly-dorado text-lg mb-10">
          Reserva tu lugar para vivir la experiencia Curly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur border border-gray-200 shadow-lg p-8 rounded-2xl space-y-6"
        >
          <div>
            <label htmlFor="nombre" className="block mb-1 font-medium text-sm text-gray-800">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Ej. María López"
              required
              className="w-full border border-gray-300 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-curly-dorado"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block mb-1 font-medium text-sm text-gray-800">
              WhatsApp
            </label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="Ej. 55 1234 5678"
              required
              className="w-full border border-gray-300 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-curly-dorado"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="sucursal" className="block mb-1 font-medium text-sm text-gray-800">
              Sucursal
            </label>
            <select
              name="sucursal"
              id="sucursal"
              required
              className="w-full border border-gray-300 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-curly-dorado"
              onChange={handleChange}
            >
              <option value="">Selecciona una sucursal</option>
              <option value="Portales">Portales (Víctor Hugo 81)</option>
              <option value="División del Norte">División del Norte (4158, local 8)</option>
            </select>
          </div>

          <div>
            <label htmlFor="especialista" className="block mb-1 font-medium text-sm text-gray-800">
              Especialista
            </label>
            <select
              name="especialista"
              id="especialista"
              required
              className="w-full border border-gray-300 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-curly-dorado"
              onChange={handleChange}
            >
              <option value="">Selecciona especialista</option>
              <option value="Especialista 1">Especialista 1</option>
              <option value="Especialista 2">Especialista 2</option>
              <option value="Especialista 3">Especialista 3</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fecha" className="block mb-1 font-medium text-sm text-gray-800">
                Fecha
              </label>
              <input
                type="date"
                name="fecha"
                id="fecha"
                required
                className="w-full border border-gray-300 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-curly-dorado"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="hora" className="block mb-1 font-medium text-sm text-gray-800">
                Hora
              </label>
              <input
                type="time"
                name="hora"
                id="hora"
                required
                className="w-full border border-gray-300 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-curly-dorado"
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-curly-dorado text-black font-bold py-3 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Reservar cita
          </button>
        </form>
      </div>
    </main>
  )
}
