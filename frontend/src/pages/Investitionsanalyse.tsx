import React from 'react'
import img from '../assets/aaimg.png';

const styles = {
  h1: {
    textAlign: "center" as "center",
  },
  h2h3h4: { // Dies wird nicht verwendet, aber ich lasse es für konsistente Struktur hier
    color: 'rgb(9, 95, 255)',
  },
  p: {
    fontFamily: "'Times New Roman', Times, serif",
  },
  ul: {
    listStyleType: 'disc', // Aktiviere Punkte für Listen
    paddingLeft: '20px', // Füge Platz links hininzu, damit die Punkte sichtbar sind
  },
  li: {
    marginBottom: '10px',
  },
};

export default function Investitionsanalyse() {
  return (
    <div className="container">
    <h1 className="font-bold text-center"  >Investitionsanalyse</h1>
    <p style={styles.p}>Es ist eine der Hauptsäule der Finanzplanung. Da handelt es sich um die Bereitstellung von Informationen, somit man entscheiden kann, ob in einem Finanzprodukt investiert werden soll oder nicht. Folgende Punkte sollen berücksichtigt werden:</p>
    <ul style={styles.ul}>
      <li style={styles.li}>Datensammlung über den betreffenden Vermögenswert.</li>
      <li style={styles.li}>Risikobewertung Verlustwahrscheinlichkeit berechnen.</li>
      <li style={styles.li}>Lohnt es sich das Risiko einzugehen? darum wird die potenzielle Rendite mit dem Risiko verglichen.</li>
    </ul>
    <img src="3img.png" alt="" style={{ width: '200px', height: 'auto' }} />
    <p style={styles.p}>Man soll zur Kenntnis nehmen, dass jede Investition mit einem potenziellen Risiko verbunden ist, und unterschiedliche Investitionen haben unterschiedliche Risikoniveaus. für Investitionsanalyse stehen viele Verfahren zur Verfügung z.B.:</p>
    {/* Stelle sicher, dass der Pfad zu deinem Bild korrekt ist oder ersetze `imageSrc` durch deine direkte Bild-URL */}
    <img src="3img.png" alt="" style={{ width: '200px', height: 'auto' }} />
    <div>
      {/* Weitere Inhalte */}
      <img src= {img} alt="" style={{ width: '70%', height: '90%' }} />
    </div>
    
  </div>
  )
}
