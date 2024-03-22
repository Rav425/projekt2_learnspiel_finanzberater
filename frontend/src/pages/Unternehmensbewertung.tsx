import React from 'react'
import img5 from '../assets/5img.png'
export default function Unternehmensbewertung() {
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
     <h1 className='text-4xl font-extrabold text-center text-gray-800 mb-12'>Unternehmensbewertung</h1>
    <p className='mb-3'>
        Zusammenfassend versteht man unter dem “Unternehmenswert” den potenziellen Preis eines Unternehmens. Dieser Preis kann entweder als der tatsächliche Preis (der wirklich gezahlt wird) oder als ein möglicher Preis (ein theoretisch denkbarer Preis) betrachtet werden. 

Es gibt zwei Grundformen von potenziellen Preisen (Unternehmenswerten), abhängig vom Bewertungszweck: 
    </p>
<h2 className='text-3xl font-bold text-blue-700 mb-4'>Grenzpreis</h2>
<p className='mb-3'>
    Hier interessiert, innerhalb welcher Grenzen der tatsächliche Preis liegen könnte. 

    Man fragt nach dem maximalen Preis, den ein potenzieller Käufer möglicherweise zahlen würde, und dem minimalen Preis, den ein potenzieller Verkäufer unbedingt verlangen möchte. 
</p>
<h2 className='text-3xl font-bold text-blue-700 mb-4'>Schiedspreis</h2>
<p className='mb-3'>
    Wenn der Grenzpreis eines potenziellen Käufers beispielsweise bei 150 Geldeinheiten (GE) liegt und der Grenzpreis eines potenziellen Verkäufers bei 100 GE, dann steht fest, dass der tatsächliche Preis innerhalb dieser Preisgrenzen liegen muss. 

    Es kann interessant sein, die Höhe des potenziellen Preises weiter einzuschränken. In diesem Fall fragt man, bei welchem Preis zwischen 100 GE und 150 GE eine Einigung zwischen Käufer und Verkäufer zu erwarten ist. Der Unternehmensbewerter kann einen Vorschlag für einen solchen Einigungspreis unterbreiten, der dann als der vom “Schiedsrichter” bestimmte Unternehmenswert gilt
</p>

<h2 className='text-3xl font-bold text-blue-700 mb-4'>Wann wird Unternehmensbewertung benötigt?</h2>
<li>Wenn eine Veränderung der Eigentümerstruktur eines Unternehmens bevorsteht. Dies kann nicht nur bei Kauf- und Verkaufstransaktionen der Fall sein, sondern auch, wenn Gesellschafter ausscheiden und abgefunden werden müssen, neue Gesellschafter in ein Unternehmen eintreten, Verschmelzungen stattfinden oder Unternehmen gegründet werden. </li>
<li>Zu Argumentationszwecken bei Sanierungsverhandlungen, Investitionsrechnung oder zur Überprüfung der Kreditwürdigkeit.  </li>

<h2 className='text-3xl font-bold text-blue-700 mb-4'>Methoden zur Unternehmenswerten</h2>

<h3 className='text-2xl font-bold text-blue-700 mb-4'>Substanzverfahren</h3>
<p className='mb-3'>
    beschäftigt sich mit der Berechnung des Unternehmenswerts durch eine isolierte Bewertung der einzelnen Vermögensgegenstände und Schulden zu einem spezifischen Stichtag. Beim Substanzwertverfahren liegt der Fokus auf dem gemeinen Wert aller Vermögenswerte und Verbindlichkeiten. Dabei werden immaterielle Wirtschaftsgüter, für die keine direkten Bilanzwerte existieren, außer Acht gelassen. 
Es ist entscheidend zu beachten, dass der Substanzwert nur dann sinnvoll ist, wenn er den Ertragswert übersteigt. Andernfalls sollte man weitere Verluste vermeiden oder sich auf eine drohende Zahlungsunfähigkeit vorbereiten.
Die Formel für die Berechnung des Substanzwert lautet:   


<li>Substanzwert = Wert der einzelnen Vermögensgegenstände – Wert der Schulden </li>

<li>Substanzwert = (Betriebsnotwendiges Vermögen + Nicht betriebsnotwendiges Vermögen) – Verbindlichkeiten – Rückstellungen </li>

</p>

<h4 className='text-blue-700 mb-3'>Beispiel</h4>
<table>
    <tr>
      <th>Vermögenswerte</th>
      <th>Wert in Euro</th>
    </tr>
    <tr>
      <td>Immbobilien</td>
      <td>500.000</td>
    </tr>
    <tr>
      <td>Fahrzeuge </td>
      <td>100.000</td>
    </tr>
    <tr>
        <td>Maschinen </td>
        <td>300.000</td>
      </tr>
      <tr>
        <td>Lizenzen </td>
        <td>200.000</td>
      </tr>
      <tr>
        <td>Kundenbindungen </td>
        <td>150.000</td>
      </tr>
      <tr>
        <td>Verbindlichkeiten</td>
        <td>400.000</td>
      </tr>
      <tr>
        <td>Rückstellungen </td>
        <td>50.000</td>
      </tr>
  </table>

  <h5>Lösung</h5>
  <p>
    Substanzwert = (500.000 + 100.000 + 300.000 + 200.000 + 150.000) – 400.000 – 50.000 

    Substanzwert = 800.000 – 450.000 = 350.000 
    <br />
    Der Substanzwert dieses Unternehmens beträgt 350.000 Euro
  </p>

  <h3>Discounted Cash Flow (DCF)- Verfahren</h3>
  <p>
    Das DCF-Verfahren nutzt die Kapitalwertmethode aus der dynamischen Investitionsrechnung als Grundlage. Hierbei werden die zukünftigen Zahlungsströme auf den Bewertungszeitpunkt diskontiert, wobei die Anfangsauszahlung abgezogen wird, um den Nettokapitalwert zu ermitteln.  
    <br />

<h4 className='text-blue-700 mb-3'>Beispiel</h4>
Wir nehmen an, dass eine Investition startet mit einer Anfangsauszahlung von 100 zum Zeitpunkt t=0, gefolgt von Einzahlungen von je 20 zu den Zeitpunkten t=1 bis t=3 und einer zusätzlichen Rückzahlung von 100 zum Zeitpunkt t=3.  

Bei einem Abzinsungssatz von 10% ergibt sich ein positiver Nettokapitalwert und zeigt an, dass die Investition aus finanzieller Sicht rentabel ist.  
  </p>
  <img src={img5} alt="" />
  <p>
    Dies resultiert aus der Tatsache, dass die summierten, auf den aktuellen Zeitpunkt diskontierten Rückflüsse die Anfangsauszahlung übersteigen, was bedeutet, dass die Rendite der Investition den zugrunde liegenden Diskontierungszinssatz - in diesem Fall 10% - überschreitet
  </p>

  <h3>Venture Capital Methode</h3>
  <p>
    Die Venture-Capital-Methode wird hauptsächlich für Startups angewendet, da sie das Discounted Cashflow-Verfahren mit dem Multiplikatoren-Verfahren kombiniert, was bei jungen Unternehmen ohne stabilen Gewinn sinnvoll ist. Startups haben oft wenig Kapital und kein sofortiger Cashflow. Die Methode betrachtet das Unternehmen aus Sicht des potenziellen Investors oder Käufer und schätzt einen möglichen Verkaufspreis zu einem bestimmten Zeitpunkt (Exit). Aspekte der Wertermittlung sind die Renditeerwartung, die benötigte Zeit bis zum Exit und der Liquiditätsbedarf. Auch die Prognose des geplanten Umsatzes in den kommenden Jahren und der branchenübliche Multiplikator sind wichtig für die Bestimmung des Unternehmenswerts. 
  </p>

  <h4 className='text-blue-700 mb-3'>Beispiel</h4>
  <p>
    ein fiktives Biotech-Startup betrachtet, das aktuell einen Liquiditätsbedarf von 2 Millionen Euro hat. Es plant, in fünf Jahren einen Umsatz von 30 Millionen Euro und einen EBIT von 7,5 Millionen Euro zu erzielen. 

In der Biotech-Branche ist ein üblicher Multiplikator für die Berechnung des zukünftigen Unternehmenswerts entweder das 3-fache des Umsatzes oder das 12-fache des EBIT. 

Ein VC-Investor erwartet aufgrund des hohen Risikos eine Rendite von 50 % für seine Investition.  

</p>
<p>
    EBIT x EBIT-Multiplikator = Exiterlös 

    7,5 Mio. Euro x 12 = 90 Mio. Euro 
</p>

<p>

Der prognostizierte Unternehmenswert zum Exit in fünf Jahren beträgt 90 Millionen Euro. Der Investor erwartet, dass seine Investition in Höhe von 2 Millionen Euro nach 5 Jahren einen Betrag von 15,188 Millionen Euro einbringen wird. 

(Künftiger Wert der Investition x 100) / Exiterlös = Höhe der Beteiligung des Investors 

(15,188 Mio. Euro x 100) / 90 Mio. Euro = 16,87 % 
</p>
<br />
Die Investition entspricht somit knapp 17 % des erwarteten zukünftigen Unternehmenswerts von 90 Millionen Euro. Somit kann man (Post-Money-Value) berechnen:  
<br />
<p>
(Liquiditätsbedarf / Höhe der Beteiligung) x 100 = Post-Money-Value 

(2 Mio. Euro / 16,87 %) x 100 = ca. 11,85 Mio. Euro 

Der Post-Money-Value des Startups liegt bei rund 11,85 Millionen Euro. Nach Abzug der Investitionssumme von 2 Millionen Euro ergibt sich ein Pre-Money-Value von etwa 9,8 Millionen Euro
  </p>
        {/* <img src={img4} alt=""></img> */}
    </div>
  )
}
