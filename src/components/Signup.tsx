import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form action="" className="max-w-[500px] w-full mx-auto p-4 bg-white rounded-md">
        <h2 className="text-center text-3xl font-bold py-2">Registrierung</h2>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">Vorname</label>
          <input className="border border-gray-400 p-2 focus:outline-blue-300 text-gray-800" type="text" />
        </div>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">Nachname</label>
          <input className="border border-gray-400 p-2 focus:outline-blue-300 text-gray-800" type="text" />
        </div>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">Benutzername</label>
          <input className="border border-gray-400 p-2  focus:outline-blue-300 text-gray-800" type="text" />
        </div>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">E-Mail-Adresse</label>
          <input className="border border-gray-400 p-2 focus:outline-blue-300 text-gray-800" type="text" />
        </div>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">Passwort</label>
          <input className="border border-gray-400 p-2 focus:outline-blue-300" type="password" />
        </div>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">Passwort bestätigen</label>
          <input className="border border-gray-400 p-2 focus:outline-blue-300" type="password" />
        </div>
        <button className="text-lg w-full my-4 py-2 bg-sky-700 hover:bg-sky-600 text-white">Registrieren</button>
        <p className="text-center">
          Sie haben bereits ein Konto?
          <Link to="/" className="ml-2 font-semibold text-sky-600 hover:underline">
            Jetzt Anmelden
          </Link>
        </p>
      </form>
    </div>
  );
}1