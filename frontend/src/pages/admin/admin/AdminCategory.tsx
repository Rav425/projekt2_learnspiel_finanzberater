import React from 'react'
import Sidebar from "../../../components/Sidebar";
import { useNavigate } from 'react-router-dom';

export default function AdminCategory() {
  const navigate = useNavigate();

  const addCategory = () => {
    navigate('/adminAddCategory');
  }

  const updateCategory = (event: any, category: string) => {
    event.stopPropagation();
    navigate(`/adminCategory/${category}`);
  }
  return (
    <div className='flex'>
        <Sidebar />
        <div className="w-3/4 h-fit m-1.5 p-2">
          <h1 className='text-xl bold'>Kategorien</h1>

          {/* Kategorie Cards */}
          <div className="max-w-md rounded overflow-hidden shadow-lg bg-white p-4 m-2 transform transition-transform duration-500 ease-in-out hover:scale-1250 cursor-pointer">
          {/* <Icon className="text-gray-700 h-6 w-6"/> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Risikomanagement</div> 
            <ul className="text-gray-700 text-base">
              <li>Risikobewertung</li>
              <li>Kontinuierliche Überwachung</li>
              <li>Absicherungsstrategien</li>    
            </ul>

            <div className="flex my-auto mx-0.5">
              <div className="my-0.5 mx-2 bold text-green-400 cursor-pointer text-center" onClick={(event) => updateCategory(event, category)}>{`Updaten`}</div>
            </div>
          </div>
    </div>

        </div>
    </div>
  )
}
