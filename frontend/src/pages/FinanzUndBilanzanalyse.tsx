import React from 'react'
const styles = {
  h1: {
    textAlign: 'center' as 'center',
  },
  h2h3h4: {
    color: 'rgb(9, 95, 255)',
  },
  p: {
    fontFamily: "'Times New Roman', Times, serif",
  },
  ul: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  li: {
    marginBottom: '10px',
  },
};
export default function FinanzUndBilanzanalyse() {
  return (
    <div className="container">
      <h1 style={styles.h1}>Finanz- und Bilanzanalyse</h1>
      <h2 style={styles.h2h3h4}>Finanzanalyse</h2>
      <p style={styles.p}>Die Finanzanalyse zielt darauf ab, die finanzielle Lage eines Unternehmens zu beurteilen. Die Methoden der Finanzanalyse sollen es dem Analysten ermöglichen, ein genaues Urteil über die aktuelle und zukünftige wirtschaftliche Lage des Unternehmens zu treffen. Vor allem große Kreditgeber und Gesellschafter können üblicherweise Zugang zu Informationen erlangen, die ansonsten nur der Führung des Unternehmens zugänglich sind.</p>
      <h2 style={styles.h2h3h4}>Bilanzanalyse</h2>
      <p style={styles.p}>Die Bilanzanalyse beinhaltet die Analyse von Bilanzdaten, Gewinn- und Verlustrechnungen sowie gegebenenfalls des Anhangs und des Lageberichts, um Informationen über das Unternehmen zu erhalten. Ein Teil der Bilanzanalyse umfasst die Analyse und Bewertung dieser Daten hinsichtlich des Zeit-, Betriebs- oder Branchendurchschnitts. Die Bilanzanalyse beinhaltet die Bewertung der Liquidität oder Solvenz, die Beurteilung der Rentabilität und die Analyse von innerbetrieblichen Problemen. Die Ziele der Finanzanalyse sind eng mit der Bilanzanalyse verknüpft. Die Bilanzanalyse lässt sich entweder intern oder extern durchführen.</p>
      <h3 style={styles.h2h3h4}>Kennzahlenanalyse</h3>
      <p style={styles.p}>Es gilt als wichtigste Methode der Bilanz-& Finanzanalyse, die untersucht, wie hoch einzelne Bilanzpositionen sind, aus welchen Bestandteilen sie sich zusammensetzen, wie sie sich verändert haben und warum. Verschiedene Arten von Kennzahlen sind in dieser Methode der enthalten.</p>
      <h4 style={styles.h2h3h4}>Arten der Kennzahlen</h4>
      <ul style={styles.ul}>
        <li style={styles.li}>Absolute Zahlen: Kennzahlen können durch die Addition oder Subtraktion einzelner Positionen kombiniert werden, beispielsweise in der Cashflow-Rechnung oder Wertschöpfungsrechnung.</li>
        <li style={styles.li}>Verhältniszahlen: Dabei werden zwei absolute Zahlen geteilt, um Verhältniszahlen zu erhalten. Je nach Art der Beziehung können diese Kennzahlen unterschieden werden.</li>
        <li style={styles.li}>Gliederungszahlen: Es erfolgt eine Relationierung einer Teilmenge zur entsprechenden Gesamtgröße, wie zum Beispiel die Beziehung von Eigen- zu Gesamtkapital.</li>
        <li style={styles.li}>Beziehungszahlen: Die Größen werden in Beziehung zueinander gesetzt, ohne dass eine von ihnen als übergeordnete Gesamtgröße fungiert, wie das Verhältnis zwischen Anlage- und Umlaufvermögen.</li>
        <li style={styles.li}>Indexzahlen: Sie dokumentieren die zeitliche Entwicklung einer Größe. Häufig wird das Basisjahr auf 100 % festgelegt, um die zeitliche Entwicklung zu verdeutlichen.</li>
      </ul>
      <p>Es ist von Bedeutung, die Spezifika des zu analysierenden Unternehmens zu beachten. Man sollte die Gefahr von Zahlungsunfähigkeit erkennen und das Risiko für Kredite reduzieren. Eine Unterscheidung zwischen kurzfristiger und langfristiger Kreditvergabe zu machen ist erforderlich. Die Geldgeber von kurzfristigen Krediten haben Interesse an der Liquiditäts-, Vermögens- und Kapitalstruktur. Die Zukunftsaussichten, Ertragskraft und Rentabilität sind bei der langfristigen Kreditvergabe besonders wichtig.</p>
    </div>
  )
}
