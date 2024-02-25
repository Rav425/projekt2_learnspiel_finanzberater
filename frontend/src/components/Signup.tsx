import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../../redux/user/userSlice";
import { RootState } from "../../redux/store";

export default function Signup() {
  // Zustand für die Sichtbarkeit des Passwort zu verwalten.
  const [visible, setVisible] = useState(false);

  interface FormData {
    firstname?: string;
    lastname?: string;
    nickname?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }

  const [formData, setFormData] = useState<FormData>({});
  // const [formData, setFormData] = useState({})
  const { loading, error: errorMessage} = useSelector((state: RootState) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData);
    if (!formData.firstname || !formData.lastname || !formData.nickname || !formData.email || !formData.password || !formData.confirmPassword) {
      return dispatch(signInFailure("Bitte füllen Sie alle Felder aus"));
    }
    try {
      console.log(formData);
      dispatch(signInStart());
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      } )
      if (!response.ok) {
        const data = await response.json()
        console.log(data)
        if (data.success === false) {
          return dispatch(signInFailure(data.message));
        }
        dispatch(signInSuccess(data));

      }else {
        navigate('/');
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
        <h2 className="text-center text-3xl font-bold py-2">Registrierung</h2>
        <div className="grid sm:gap-0 sm:grid-cols-1 md:gap-4 md:grid-cols-2 ">
          <div className="flex flex-col py-2">
            <label className="mb-1 font-semibold">Vorname</label>
            <input className="border border-gray-400 p-2 focus:outline-blue-300 text-gray-800" type="text" id="firstname" onChange={handleChange} />
          </div>
          <div className="flex flex-col py-2">
            <label className="mb-1 font-semibold">Nachname</label>
            <input className="border border-gray-400 p-2 focus:outline-blue-300 text-gray-800" type="text" id="lastname" onChange={handleChange} />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">Benutzername</label>
          <input className="border border-gray-400 p-2  focus:outline-blue-300 text-gray-800" type="text" id="nickname" onChange={handleChange} />
        </div>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">E-Mail-Adresse</label>
          <input className="border border-gray-400 p-2 focus:outline-blue-300 text-gray-800" type="text" id="email" onChange={handleChange} />
        </div>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">Passwort</label>
            <input className="border border-gray-400 p-2 focus:outline-blue-300" type="password" id="password" onChange={handleChange} />
        </div>
        <div className="flex flex-col py-2">
          <label className="mb-1 font-semibold">Passwort bestätigen</label>
          <div className="relative">
            <input className="w-full border border-gray-400 p-2 focus:outline-blue-300" type={visible ? "text" : "password"} id="confirmPassword" onChange={handleChange} />
            <div className="absolute flex items-center p-2 right-0 top-0 bottom-0 cursor-pointer" onClick={() => setVisible(!visible)}>
              {
                visible ? <FaEye /> : <FaEyeSlash />
              }
            </div>
          </div>
        </div>
        <button disabled={loading} className="text-lg w-full my-4 py-2 bg-sky-700 hover:bg-sky-600 text-white">{loading ? 'Lädt...' : 'Registrieren'}</button>
        <p className="text-center">
          Sie haben bereits ein Konto?
          <Link to="/" className="ml-2 font-semibold text-sky-600 hover:underline">
            Jetzt Anmelden
          </Link>
        </p>
        {errorMessage && <div className="mt-5 bg-red-200 text-red-600 font-bold p-2 rounded-md">{errorMessage}</div>}
      </form>
    </div>
  );
}