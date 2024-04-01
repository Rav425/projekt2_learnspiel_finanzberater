import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";


export default function Login() {
  // Zustand für die Sichtbarkeit des Passwort zu verwalten.
  const [visible, setVisible] = useState(false);

  interface FormData {
    username?: string;
    password?: string;
  }

  const [formData, setFormData] = useState<FormData>({});
  const { loading, error: errorMessage} = useAppSelector((state) => state.user);

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      dispatch(signInStart());
      if (!formData.username || !formData.password) {
        return dispatch(signInFailure("Bitte füllen Sie alle Felder aus"));
      }
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      } )
      const data = await response.json()
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (response.ok) {
        dispatch(signInSuccess(data));
        navigate('/startseite');
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(signInFailure(error.message));
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="max-w-[500px] w-full mx-auto p-4 bg-white rounded-md">
        <h2 className="text-center text-3xl font-bold py-2">Willkommen zurück</h2>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">Benutzername</label>
          <input className="border border-gray-400 p-2 focus:outline-blue-300 text-gray-800" id="username" type="text" onChange={handleChange}/>
        </div>
        <div className="flex flex-col py-2 relative">
          <label className="mb-1 font-semibold">Passwort</label>
          <div className="relative ">
            <input className="w-full border border-gray-400 p-2 focus:outline-blue-300" id="password" type={visible ? "text" : "password"} onChange={handleChange}/>
            <div className="absolute flex items-center p-2 right-0 top-0 bottom-0 cursor-pointer" onClick={() => setVisible(!visible)}>
              {
                visible ? <FaEye /> : <FaEyeSlash />
              }
            </div>
          </div>
        </div>
        <span className="flex items-center">
          <input className="mr-2" type="checkbox" defaultChecked onChange={handleChange}/> Angemeldet bleiben
        </span>
        <button className="text-lg w-full my-4 py-2 bg-sky-700 hover:bg-sky-600 text-white">{loading ? 'Lädt...' : 'Anmelden'}</button>
        <p className="text-center">
          Sie haben noch kein Konto?
          <Link to="/sign-up" className="ml-2 font-semibold text-sky-600 hover:underline">
            Jetzt registrieren
          </Link>
        </p>
        {
          errorMessage && <div className="mt-5 font-semibold text-red-600 p-2 rounded-md">{errorMessage}</div>
        }
      </form>
    </div>
  );
}

