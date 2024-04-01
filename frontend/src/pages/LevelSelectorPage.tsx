import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './LevelSelectorPage.css'; // Ihr CSS-Dateipfad

const LevelSelectorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLevelClick = (level: string) => {
    switch (level) {
      case '1':
        navigate('/level1Scenario1'); // Navigieren zur Einführungsseite
        break;
      case '2':
        navigate('/level2'); // Navigieren zur Fähigkeiten-Seite
        break;
        default:
      case '3':
        navigate('/level3_new'); // Navigieren zur Level-3-Seite
        break;
    console.log(`Level ${level} wurde gewählt.`);
    // navigate(`/level/${level}`);
  }
  };

  return (
    <Container fluid className="level-selector-container">
      <Row className="justify-content-center align-items-center text-center">
        <Col>
          <h1 className="display-4 mb-4">Wählen Sie Ihr Level</h1>
          <p className="lead mb-5">
            Steigern Sie Ihre Fähigkeiten schrittweise. Wählen Sie ein Level, das Ihrer Erfahrung entspricht.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {[1, 2, 3].map((level) => (
          <Col md={4} key={level} className="mb-4">
            <Card className="level-card" onClick={() => handleLevelClick(`${level}`)}>
              <Card.Body>
                <Card.Title>Level {level}</Card.Title>
                <Card.Text>
                  {level === 1 && 'Ideal für Anfänger und Neulinge.'}
                  {level === 2 && 'Für diejenigen, die eine Herausforderung suchen.'}
                  {level === 3 && 'Expertenlevel, nur für die Mutigsten.'}
                </Card.Text>
                <Button variant="outline-light" onClick={() => handleLevelClick(`${level}`)}>
                  Start Level {level}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LevelSelectorPage;







