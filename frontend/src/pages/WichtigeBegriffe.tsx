import React from 'react'
import { Link } from 'react-router-dom'

export default function WichtigeBegriffe() {
  return (
    <div className='w-4/5 mx-auto my-0 text center'>
        <h1 className=' text-center font-bold text-5xl m-4'>Wichtige Begriffe und Definitionen</h1>

        <div className="flex justify-center items-center p-5 m-20 text-2xl">
            <button className="bg-black w-fit p-3 border-solid border-2 rounded-3xl text-white text-2xl hover:bg-green-400"><Link to="/inhalt1">Finanz, Finanzberatung, Bilanz, Cashflow</Link></button>
        </div>
        <div className="flex justify-center items-center p-5 m-20 text-2xl">
            <button className="bg-black w-fit p-3 border-solid border-2 rounded-3xl text-white text-2xl hover:bg-green-400"><Link to="/inhalt2">Pre Money und Post Money, Rendite, Diversifikation, ROI</Link></button>
        </div>
        <div className="flex justify-center items-center p-5 m-20 text-2xl">
            <button className="bg-black w-fit p-3 border-solid border-2 rounded-3xl text-white text-2xl hover:bg-green-400"><Link to="/inhalt3">Finanzierungsarten, Investitionsbewertung, Steuersysteme und -gesetze, Finanzplanung</Link></button>
        </div>
        <div className="flex justify-center items-center p-5 m-20 text-2xl">
            <button className="bg-black w-fit p-3 border-solid border-2 rounded-3xl text-white text-2xl hover:bg-green-400"><Link to="/inhalt4">Insolvenzgeldvorfinanzierung, Compliance, Kreditwürdigkeit, Leasing, Die Gewinn- und Verlustrechnung (GuV)</Link></button>
        </div>
    </div>
  )
}
