import React from "react";
import { Link } from "react-router-dom";

export default function AnalytischeMethodenInhalt() {
  return (
    <div className="my-4 mx-auto text-center">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Analytische Methoden
      </h1>
      <p className="mb-4">
        In der dynamischen und komplexen Welt der Finanzen sind analytische
        Fähigkeiten und das Verständnis für Zahlen unerlässlich. Es gibt eine
        Vielzahl von Methoden, die in verschiedenen Anwendungsbereichen
        eingesetzt werden können. In diesem Abschnitt werden wir einige der weit
        verbreiteten analytischen Methoden und Kenntnisse interpretieren.
      </p>
      <div className="flex justify-center space-x-4 flex-wrap">
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mb-3">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Marktforschung & Marktanalyse</div>
          </div>
          <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/marktforschung">Mehr Erfahren</Link>
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mb-3">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">EZeitreihenanalyse</div>
          </div>
          <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/ezeitreihenanalyse">Mehr Erfahren</Link>
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mb-3">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Investitionsanalyse</div>
          </div>
          <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/investitionsanalyse">Mehr Erfahren</Link>
            </button>
          </div>
        </div>
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mb-3">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Finanz-& Bilanzanalyse</div>
          </div>
          <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/finanz-und-bilanzanalyse">Mehr Erfahren</Link>
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mb-3">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Kreditwürdigkeit-Analyse</div>
          </div>
          <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/kreditwuerdigkeit">Mehr Erfahren</Link>
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mb-3">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Unternehmensbewertung</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/unternehmensbewertung">Mehr Erfahren</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
