import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'

export default function AdminAddCategory() {
    const [formData, setFormData] = useState({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.id]: e.target.value.trim()})
    };

  return (
    <div className='flex'>
        <Sidebar />

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <form >
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Kategorie hinzufügen</h2>

          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Bezeichnung</label>
          <input
            type="text"
            id="bezeichnung"
            onChange={handleChange}
            placeholder="Füge eine Kategoriebezeichnung hinzu"
            className="mt-1 mb-4 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Beschreibung</label>
          <textarea
            id="beschreibung"
            onChange={handleChange}
            placeholder="Füge eine Beschreibung hinzu"
            // rows="4"
            className="mt-1 mb-4 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white p-2 rounded hover:bg-sky-700"
          >
            Add
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}
