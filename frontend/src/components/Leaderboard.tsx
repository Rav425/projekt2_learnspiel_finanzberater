import React from 'react'
// import firstPlaceRibbon from '../assets/first-place-ribbon.png' 
// import secondPlaceRibbon from '../assets/second-place-ribbon.png' 
// import thirdPlaceRibbon from '../assets/third-place-ribbon.png'
export default function Leaderboard() {
  return (

    
    <div className="flex justify-center gap-[48px] px-6">
        <div className="w-1/2 flex flex-col items-center">
             <img  src="/leaderboard.svg" width={95} height={95} alt="" />

             <h1 className='text-center text-2xl font-bold text-neutral-800 my-6'>Leaderboard</h1>

             <p className='text-center text-lg mb-6 text-gray-500'>Sehen Sie wo Sie im Vergleich zu anderen stehen.</p>
             <div className="mb-4 h-5 bg-red-500"></div>
             {/* TODO: Rangliste der Spieler hinzufügen */}

             <div className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50">
                <span className="font-bold text-lime-700 mr-4">1</span>
                <img src="https://via.placeholder.com/50" className='rounded-full ml-3 mr-6' alt="Profilbild" />  {/*Profilebild hinzufügen*/}
                <p className='font-bold text-neutral-800 flex-1'>Max Mustermann</p>
                <p>100 %</p>

             </div>

        </div>
    </div>
  )
}
