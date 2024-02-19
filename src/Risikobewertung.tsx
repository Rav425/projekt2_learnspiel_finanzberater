import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ImageFMEA from './FMEA-Tabelle.png';
import ImageVarianz from './varianz Standardabweichung.png';
import ImageKovarianz from './Kovarianz.png';
import ImageKorrelation from './Korrelationskoeffizient.png';
const Risikobewertung: React.FC = () => {
  return (
    <Container fluid className="Risikobewertung">
      <Row>
        <Col>
          <h2>Risikobewertung</h2>
          <p>
          Der Kundenberater muss das Risiko bewerten zu können, bei der Risikobewertung müssen verschiedene Aspekte berücksichtigt werden. Die Methoden, die verwendet werden können, sind Risikobewertung mit FMEA und Risikomatrix und Risikobewertung mit statischer Analyse          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="analysis-column">
          <h3>FMEA und Risikomatrix</h3> 
          
          

        <p>Ein von vielen Methoden, die der Kundenberater verwenden kann, um Risiko zu bewerten, ist FMEA. FMEA steht für Failure Mode and Effects Analysis. Das Hauptziel der FMEA besteht darin, Fehler zu verhindern sowie sie nach ihrem Auftreten zu erkennen und zu korrigieren. Dies geschieht durch frühzeitiges Erkennen und Bewerten möglicher Fehlerursachen und ist damit ein Qualitätsplanungsinstrument.</p>
<p>Mit Hilfe von Risikomatrix kann der Kundenberater FMEA berechnen. Die Risikomatrix, auch bekannt als Risikograph, wird verwendet, um die Wahrscheinlichkeit des Auftretens eines Fehlers und das Maß des Schadens einfach grafisch darzustellen. Risikomatrix ist ein in der FMEA verwendetes Tool zur Beschreibung von Risikostufen auf Basis der Risikoprioritätszahl (RPZ). Bei der Bewertung des Risikos ist 1 akzeptierbar und 4 oder 5 nicht akzeptierbar.</p>
<Col lg={12}>
          <img src={ImageFMEA} alt="SWOT" style={{ width: '600px', height: '150px' }} />
        </Col>
          
        <p>Die Formel für die Berechnung der Risikoprioritätszahl (RPZ) lautet:</p>
<p>RPZ = A x B x E</p>

<ul>
  <li><strong>Auftretenswahrscheinlichkeit (A):</strong> Je höher die Bewertung von A ist, desto wahrscheinlicher ist das Auftreten des betrachteten Fehlers. A = 10 (häufiges Auftreten)</li>
  <li><strong>Bedeutung (B):</strong> Je höher die Bewertung von B ist, desto gravierender ist die Auswirkung des Fehlers. B = 10 (schwerer Fehler)</li>
  <li><strong>Entdeckungswahrscheinlichkeit (E):</strong> Je höher die Bewertung von E ist, desto geringer ist die Entdeckungswahrscheinlichkeit des Fehlers. E = 10 (Entdeckung unwahrscheinlich)</li>
</ul>

<p>Eine Entdeckungswahrscheinlichkeit (E) von 1 bedeutet, dass der Fehler mit einer Wahrscheinlichkeit von 99,99% entdeckt wird. Bei E = 10 kann der Fehler nur mit einer Wahrscheinlichkeit oder auch Sicherheit von maximal 90% nachgewiesen werden.</p>
<p>Ein Risiko bezeichnet als kritisch, wenn Fehler mit einer Risikoprioritätszahl von mindestens 125 sind, und sollte vermeiden werden.</p>
           
            {/* Rest des SWOT-Textes */}
           
          
        </Col>
        <Col md={6} className="analysis-column">
          <h3>Risikobewertung mit statischer Analyse</h3>
          
<p>Varianz und Standardabweichung
Die Standardabweichung und Varianz werden als Maß für das Risiko oder die Volatilität verwendet. Je höher die Standardabweichung einer Anlage ist, desto größer ist die Schwankung des Vermögenswerts im Laufe der Zeit, was als höheres Risiko interpretiert werden kann</p>
<Col lg={12}>
          <img src={ImageVarianz} alt="varianz" style={{ width: '600px', height: '150px' }} />
        </Col>
        <h3><strong>Kovarianz und Korrelationskoeffizient</strong></h3>

<p>Kovarianz und Korrelationskoeffizient werden verwendet, um die Abhängigkeit zwischen 2 Märkten zu berücksichtigen. Der Kundenberater kann diese Methoden benutzen, um richtige Entscheidungen zu treffen.</p>
<Col lg={12}><p><strong>Kovarianz:</strong></p>
          <img src={ImageKovarianz }alt="Kovarianz" style={{ width: '400px', height: '100px' }} />
        </Col>
        
<ul>
  <li>Cov &gt; 0: Die Variablen bewegen sich in die gleiche Richtung.</li>
  <li>Cov &lt; 0: Die Variablen bewegen sich in entgegengesetzte Richtungen.</li>
  <li>Cov = 0: Es besteht keine lineare Beziehung zwischen den Variablen.</li>
</ul>


<Col lg={12}><p><strong>Korrelationskoeffizient:</strong></p>
          <img src={ImageKorrelation }alt="Korrelation" style={{ width: '400px', height: '100px' }} />
        </Col>
        <ul>
  <li>r &gt; 0: Positive Beziehung</li>
  <li>r &lt; 0: Negative Beziehung</li>
  <li>r = 0: Keine lineare Beziehung</li>
</ul>
<h2>Value at Risk (VaR)</h2>

<p><strong>Value at Risk (VaR)</strong> ist eine finanzielle Kennzahl, die verwendet wird, um das maximale Risiko abzuschätzen, dem eine Investition oder ein Portfolio über einen bestimmten Zeitraum mit einem bestimmten Vertrauensniveau ausgesetzt sein könnte. VaR misst den größtmöglichen Verlust, der unter normalen Marktbedingungen und innerhalb eines bestimmten Zeitrahmens, wie einem Tag oder einem Monat, nicht überschritten werden soll. Diese Metrik ermöglicht es, das Marktrisiko numerisch zu quantifizieren, wodurch Investoren und Risikomanager Risiken über verschiedene Anlagen oder Portfolios hinweg kommunizieren und vergleichen können.</p>

<p><strong>Historische Methode:</strong></p>
<p>Bei der historischen Methode des Value at Risk (VaR) nutzt man Marktdaten der letzten 250 Tage, um den maximalen Verlust zu schätzen. Der drittschlechteste Wert dieser Periode bestimmt den VaR mit 99% Sicherheit.</p>


        </Col>
      </Row>
      {/* Weitere Rows und Cols entsprechend dem Bild */}
    </Container>
  );
};

export default Risikobewertung;
