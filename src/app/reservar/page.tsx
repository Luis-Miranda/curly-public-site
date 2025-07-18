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
    alert('¡Cita registrada! Te contactaremos para confirmarla.')
  }

  return (
    <main className="min-h-screen px-6 py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Reserva tu cita</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre completo"
          required
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Tu WhatsApp"
          required
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <select
          name="sucursal"
          required
          className="w-full border p-3 rounded"
          onChange={handleChange}
        >
          <option value="">Selecciona una sucursal</option>
          <option value="Portales">Portales</option>
          <option value="División del Norte">División del Norte</option>
        </select>
        <select
          name="especialista"
          required
          className="w-full border p-3 rounded"
          onChange={handleChange}
        >
          <option value="">Selecciona especialista</option>
          <option value="Especialista 1">Especialista 1</option>
          <option value="Especialista 2">Especialista 2</option>
        </select>
        <input
          type="date"
          name="fecha"
          required
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <input
          type="time"
          name="hora"
          required
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Reservar cita
        </button>
      </form>
    </main>
  )
}
