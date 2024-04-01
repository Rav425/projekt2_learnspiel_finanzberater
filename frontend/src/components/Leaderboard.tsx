
import React, { useEffect, useState } from 'react';
import firstPlaceRibbon from '../assets/first-place-ribbon.png'; 
import secondPlaceRibbon from '../assets/second-place-ribbon.png'; 
import thirdPlaceRibbon from '../assets/third-place-ribbon.png';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getAvatarInitials } from '../utils/functions';


export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  // const [currentUser, setCurrentUser] = useState(null);

  const currentUser = useSelector((state:RootState) => state.user.currentUser);

  useEffect(() => {
    fetch('/api/leaderboard') // Ersetzen Sie dies durch die URL Ihres Servers
      .then(response => response.json())
      .then(data => {
        setLeaderboardData(data.leaderboard)
        // currentUser(data.currentUser) // Replace setCurrentUser with currentUser
      });
  }, [currentUser]);

  // Funktion zur Ermittlung des Ribbon-Bildes basierend auf dem Rang
  const getRibbon = (rank) => {
    switch(rank) {
      case 1: return firstPlaceRibbon; // Pfad zu Ihrem ersten Platz Bild
      case 2: return secondPlaceRibbon; // Pfad zu Ihrem zweiten Platz Bild
      case 3: return thirdPlaceRibbon; // Pfad zu Ihrem dritten Platz Bild
      default: return ''; // Kein Bild für andere Plätze
    }
  };

  // const currentUserPosition = leaderboardData.findIndex(user => user === currentUser) + 1;

  return (
    <div className="flex justify-center gap-[48px] px-6">
      <div className="w-1/2 flex flex-col items-center">
        <img src="/leaderboard.svg" width={95} height={95} alt="" />
        <h1 className='text-center text-2xl font-bold text-neutral-800 my-6'>Leaderboard</h1>
        <p className='text-center text-lg mb-6 text-gray-500'>Sehen Sie, wo Sie im Vergleich zu anderen stehen.</p>
        
        {/* Header for title Rank und Punkte */}
        <div className="flex items-center w-full p-2 px-4 rounded-xl bg-gray-200">
  <span className="font-bold text-lg text-neutral-800 w-1/6">Position</span>
  <span className="font-bold text-lg text-neutral-800 w-1/3 text-center">Benutzer</span>
  <span className="font-bold text-lg text-neutral-800 w-2/4 text-right">Punkte</span>
</div>
        {/* Rangliste der Spieler */}
        {leaderboardData.map((player, index) => (
          <div key={index} className={`flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50 ${index < 3 ? 'bg-blue-50' : ''} ${currentUser && currentUser.vorname === player.vorname ? 'bg-green-200' : ''}`}>
            <div className="w-1/3">
            {index < 3 ? (
      <img src={getRibbon(index + 1)} className="w-9 h-9 mr-3" alt="Ribbon" />
    ) : (
      <span className={`font-bold text-lg ml-3  text-lime-700`}>{index + 1}.</span>
    )}
            </div>
            <div className="w-3/4 flex items-center gap-3">
              {/* <img src={player.profilbildUrl || 'https://via.placeholder.com/50'} className='w-10 h-10 rounded-full ' alt="Profilbild" /> */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white font-semibold">
                      <span id='username' className='flex items-center'>{getAvatarInitials(player.vorname)}</span>
              </div>
              <p className='font-bold text-neutral-800 flex-1'>{player.vorname}</p>
            </div>
            <div className="float-right">
              <p className='font-semibold text-lg bg-sky-200 px-2 py-0 rounded-xl'>{player.erg_punkte} </p>

            </div>
          </div>
        ))}

   
      </div>
    </div>
  );
}

