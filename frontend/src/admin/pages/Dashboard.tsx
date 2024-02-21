import React from "react";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-gray-100 h-screen w-full">
        {/* <div className="text-center py-10"> */}
        <div className=" text-center py-10">
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 justify-items-center">

            <div className="col-span-1 bg-sky-600 text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform w-full">
              <p className="text-5xl">1</p>
              <p className="text-xl">Spieler</p>
            </div>

            <div className="col-span-1 bg-sky-600 text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform w-full">
              <p className="text-5xl">3</p>
              <p className="text-xl">Kategorien</p>
            </div>

            <div className="col-span-1 bg-sky-600 text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform w-full">
              <p className="text-5xl">40</p>
              <p className="text-xl">Fragen</p>
            </div>

            <div className="col-span-1 bg-sky-600 text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform w-full">
              <p className="text-5xl">40</p>
              <p className="text-xl">Leaderboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
