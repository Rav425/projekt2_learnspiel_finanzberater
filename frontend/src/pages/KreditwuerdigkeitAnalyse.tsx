import React from 'react'
import img4 from '../assets/4img.png'

export default function KreditwuerdigkeitAnalyse() {
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h1 className='text-4xl font-extrabold text-center text-gray-800 mb-12'>Kreditwürdigkeit-Analyse</h1>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>Ziel</h2>
        <p>
            Anhand der Kreditwürdigkeitsprüfung stellt man sicher, dass das Unternehmen die gewährten Kredite gemäß den Vereinbarungen zurückzahlen kann. Somit wird das Risiko von Krediten bewertet und wird bewiesen, ob das Unternehmen eine solide finanzielle Basis hat oder nicht. 
        </p>

        <h3>Was wird genau geprüft?</h3>
        <p>Da werden die wirtschaftlichen Bedingungen und Finanzdaten analysiert, das Management bewertet, die Branchensituation untersucht und kurz- und mittelfristiger Unternehmenspläne beurteilt. </p>
        <br/>
        <p>Es wird analysiert, ob Jahresabschlüsse, Zwischenzahlen und Pläne positive oder negative Veränderungen aufweisen, um die zukünftige Entwicklung des Unternehmens vorherzusagen. Die Hauptkriterien umfassen Rentabilität, Kapitalverhältnisse und Liquidität.</p>
        <br/>
        <p>Die Entwicklung des Unternehmens wird gegenüber der Branche verglichen</p>

        <p>
            Folgende Kriterien kann man auch bei der Kreditwürdigkeitsanalyse in Betracht nehmen:    
        </p>
        <img src={img4} alt=""></img>
    </div>
  )
}
