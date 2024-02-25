import React from 'react'
import towsMatrix from '../assets/TOWS-Matrix.png';
import absicherungsstrategie from '../assets/absicherungsstrategie.png';
export default function Risikostrategie() {
  return (
    <div className='text-center my-5 p-4'>
        <h1 className='font-bold text-3xl mb-4'>Risikostrategie</h1>
        <p className='mb-3 text-2xl'>Risikostrategien, einschließlich der Nutzung der TOWS-Matrix und Absicherungsstrategien wie Futures, Forwards, Swaps und Optionen, dienen dazu, Organisationen bei der Identifikation und Minimierung potenzieller Risiken zu unterstützen. Die TOWS-Matrix hilft, strategische Pläne zu entwickeln, indem sie interne Stärken und Schwächen mit externen Chancen und Bedrohungen abgleicht, um Risiken proaktiv zu begegnen und Chancen zu nutzen. Absicherungsstrategien verwenden Finanzderivate, um Investitionen vor Preisvolatilität zu schützen, indem sie zukünftige Preise sichern oder durch Verträge das Risiko von Wertverlusten minimieren. Zusammen bieten diese Methoden ein umfassendes Toolkit für Risikomanagement und strategische Entscheidungsfindung.</p>

        <div className="flex justify-center gap-3">
            <div className="border-solid border-1 border-gray-500 w-1/2 p-2">
                <h2 className='font-bold mb-3 text-3xl'>TOWS-Matrix</h2>
                <p className='text-2xl'>
                Diese Methode ist ein strategisches Managementinstrument, das dazu dient, die internen und externen Faktoren zu analysieren, die eine Oraganisation beeinflussen. TOWS ist eine Abkürzung für Threats (Bedrohungen), Opportunities (Chancen), Weaknesses (Schwächen) und Strengths (Stärken). Diese Matrix kombiniert die Elemente der SWOT-Analyse, um effektivere Strategien zu entwickeln. Diese Matrix identifiziert potenzielle taktische Strategien, die angewendet werden können, um Chancen zu nutzen oder sich gegen Bedrohungen zu verteidigen, indem bestehende Stärken genutzt und Schwächen reduziert werden. Die TOWS-Matrix versucht, taktische Strategien basierend auf vier verschiedenen Positionen zu entwickeln.
                </p>
                <ul className='mt-2'>
                    <li className='font-semibold'>WO-Strategien</li>
                    <li className='font-semibold'>SO-Strategien</li>
                    <li className='font-semibold'>WT-Strategien</li>
                    <li className='font-semibold'>ST-Strategien</li>
                </ul>

                <img src={towsMatrix} alt="" />
                
            </div>
            <div className="border-solid border-1 border-gray-500 w-1/2 p-2">
                <h2 className='font-bold mb-3 text-3xl'>Absicherungsstrategie</h2>
                <p className='text-2xl mb-3'>
                Die Absicherungsstrategie, die als Synonym für die Hedging-Strategie genannt wird, ist eine in der Finanzwelt häufig angewandte Strategie, insbesondere um den Wert von Vermögenswerten zu schützen oder die Exposition gegenüber Wertschwankungen zu reduzieren. Diese Strategie beinhaltet den Einsatz von Finanzinstrumenten wie derivative Finanzinstrumenten (Futures, Swaps und Optionen), um den Wert von Investitionen oder Transaktionen vor unerwünschten Preisänderungen zu schützen..
                </p>
                <img src={absicherungsstrategie} alt="" />
                
            </div>
        
        </div>
    </div>
  )
}
