import React from 'react'
import img1 from '../assets/1img.png'
import img2 from '../assets/2img.png'

export default function EZeitreihenanalyse() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
    Zeitreihenanalyse
    </h1>

    <div className="space-y-8">
      <p className="text-lg leading-relaxed">
      Die Zeitreihenanalyse ist ein Verfahren zur Beschreibung von Zeitverläufen, dass sich mit den Abhängigkeiten und Veränderungen einer Zeitreihe befasst. Dabei wird oft die Zeitreihe in verschiedene Komponenten zerlegt, um den Verlauf besser zu verstehen. 
      Die Hauptziele der Zeitreihenanalyse lassen sich in drei Bereiche einteilen: <br />
      Prognose: Dabei geht es darum, zukünftige Entwicklungen auf Basis historischer Zeitreihendaten vorherzusagen. <br/>
      Analyse: Hier steht das Verständnis im Mittelpunkt, indem man die Ursachen erkennt und die bisherige Entwicklung detailliert beschreibt.<br/>
      Kontrolle: um die Abweichungen zwischen den tatsächlichen (Ist) und erwarteten (Soll) Größen auszugleichen.
      </p>

      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
        Hauptkomponenten einer Zeitreihe
        </h2>
        <p className="text-lg leading-relaxed mb-4">
        Der Trend der Zeitreihe (Tt): stellt die Änderung bzw. die Gesamtentwicklung im Laufe der Zeit dar. Ein Beispiel dazu ist der steigende Energiebedarf in vielen Ländern.<br/>
        Saisonalität (St): betrachtet die saisonalen Effekte zu bestimmten Zeitpunkten, die sich vom allgemeinen Trend unterscheiden. z.B: der hohe Energieverbrauch im Winter aufgrund von Heizkosten und Beleuchtung.<br/>
        Autokorrelation (At): beschreibt, wie der Wert zu einem Zeitpunkt, von den vorherigen Zeitpunkten abhängt und modelliert die Änderungen, die nicht durch den Trend oder saisonale Effekte erklärt werden können.<br/>
        </p>
        <h3 className='text-2xl font-semibold text-blue-600 mb-3'>Instrumente der Zeitreihe-Analyse</h3>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-3">
          Marktforschung
        </h3>
        <h4 className='mt-2 mb-2'>Linien Diagram</h4>
        <p className="text-lg leading-relaxed mb-4">
        Visualisierung bzw. grafische Darstellung der Zeitreihe, zum Beispiel mit einem Liniendiagramm, um die Entwicklungen im Zeitablauf zu zeigen
        </p>


      </div>

      <img src={img1} className='mt-2' alt="" />
      <img src={img2} className='mt-2' alt="" />

      

      </div>
  </div>
  )
}
