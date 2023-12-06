import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function Login() {
  // Zustand für die Sichtbarkeit des Passwort zu verwalten.
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form action="" className="max-w-[500px] w-full mx-auto p-4 bg-white rounded-md">
        <h2 className="text-center text-3xl font-bold py-2">Willkommen zurück</h2>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">Benutzername</label>
          <input className="border border-gray-400 p-2 focus:outline-blue-300 text-gray-800" type="text" />
        </div>
        <div className="flex flex-col py-2 relative">
          <label className="mb-1 font-semibold">Passwort</label>
          <div className="relative ">
            <input className="w-full border border-gray-400 p-2 focus:outline-blue-300" type={visible ? "text" : "password"} />
            <div className="absolute flex items-center p-2 right-0 top-0 bottom-0 cursor-pointer" onClick={() => setVisible(!visible)}>
              {
                visible ? <FaEye /> : <FaEyeSlash />
              }
            </div>
          </div>
        </div>
        <span className="flex items-center">
          <input className="mr-2" type="checkbox" defaultChecked/> Angemeldet bleiben
        </span>
        <button className="text-lg w-full my-4 py-2 bg-sky-700 hover:bg-sky-600 text-white">Anmelden</button>
        <p className="text-center">
          Sie haben noch kein Konto?
          <Link to="/signup" className="ml-2 font-semibold text-sky-600 hover:underline">
            Jetzt registrieren
          </Link>
        </p>
      </form>
    </div>
  );
}

