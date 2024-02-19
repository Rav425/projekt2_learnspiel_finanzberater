import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageSWOT from '../assets/SWOT-Analyse.png';
import ImagePestel from '../assets/PESTEL-Analyse.png';

const Risikoidentifikation: React.FC = () => {
  return (
    <Container fluid className="risikoidentifikation">
      <Row>
        <Col>
          <h2>Risikoidentifikation</h2>
          <p>
          Risikoidentifikation ist erste Schritt, die vom Kundenberater durchgeführt wird, um das Risiko zu verhindern. Die Methoden, die verwendet werden können, sind SWOT-Analyse und PESTEL-Analyse. SWOT-Analyse und PESTEL-Analyse kommen als Methode auf eine Beschreibung oder Identifizierung von Risiken.            {/* Rest des einleitenden Textes */}
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="analysis-column">
          <h3>SWOT-Analyse</h3> 
          <Col lg={12}>
          <img src={ImageSWOT } alt="SWOT" style={{ width: '400px', height: '250px' }} />
        </Col>
          <p>SWOT-Analyse steht für Stärken (Strengths), Schwächen (Weaknesses), Chancen (Opportunities) und Bedrohungen (Threats). Der Kundenberater kann SWOT-Analyse verwenden, um Stärken, Schwächen, Chancen und Bedrohungen zu identifizieren oder beschreiben. Die Schwächen und Bedrohungen können als Risiken interpretiert werden, die mit TOWS-Matrix weiter analysiert werden können.</p>

<h3>Was bedeutet Stärken, Schwächen, Chance und Bedrohungen?</h3>
<ul>
  <li><strong>Stärken</strong> sind positive Eigenschaften oder Fähigkeiten, die einer Organisation oder Gruppe helfen, erfolgreich zu sein.</li>
  <li><strong>Schwächen</strong> sind Aspekte, die einer Gruppe oder Organisation fehlen oder sie daran hindern, gut zu handeln. Es ist wichtig, diese Schwächen zu erkennen, um große Fehler zu vermeiden und nicht zu viel auf sich zu nehmen.</li>
  <li><strong>Chancen</strong> sind Potenziale, die sich aus neuen Möglichkeiten, aktuellen Trends, Ereignissen und Ideen im technologischen und soziokulturellen Umfeld ergeben, die verwendet werden können.</li>
  <li><strong>Risiken</strong> sind mögliche Ereignisse oder Aspekte, die nicht kontrolliert werden können.</li>
</ul>
           
            {/* Rest des SWOT-Textes */}
           
          
        </Col>
        <Col md={6} className="analysis-column">
          <h3>PESTEL-Analyse</h3>
          
<p>PESTEL-Analyse steht für die politischen (political), wirtschaftlichen (Economic), sozialen (social), technologischen (technological), ökologische geografische (environmental) und rechtlichen (legal) Einflussfaktoren.</p>
<p>Die PESTEL-Analyse zählt wohl zu den bekanntesten strategischen Tools unserer Zeit. Mit Hilfe der PESTEL-Analyse ist es möglich das Unternehmensumfeld (das Makroumfeld) in Hinblick auf spezifische Marktgegebenheiten, (wahrscheinliche) Entwicklungen sowie deren Auswirkungen zu beschreiben und fundierte Entscheidungsgrundlagen für das Management zu schaffen.</p>
<Col lg={12}>
          <img src={ImagePestel } alt="Pestel" style={{ width: '600px', height: '650px' }} />
        </Col>
        </Col>
      </Row>
      {/* Weitere Rows und Cols entsprechend dem Bild */}
    </Container>
  );
};

export default Risikoidentifikation;