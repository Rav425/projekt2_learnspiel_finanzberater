// App.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ImageRisiko from '../assets/Risikomanagement.png';

const Risiko: React.FC = () => {
  const navigate = useNavigate();
  const cardStyle = {
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 123, 255, 0.6)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
    ':hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
    }
  };
  const handleCardClick = (route: string) => {
    navigate(route);
  };
  const textStyle = {
    textAlign: 'justify' as const, // TypeScript erwartet hier eine genaue Zuweisung
    color: '#343a40', // Dunkelgraue Schriftfarbe
    fontFamily: '"Open Sans", Arial, sans-serif', // Moderne, lesbare Schriftart
    fontSize: '1rem', // Standardgröße
    lineHeight: 1.6, // Mehr Zeilenabstand für bessere Lesbarkeit
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)', // Leichter Schatten für Tiefe
    marginBottom: '20px' // Abstand zum unteren Rand
  };
//   const imageStyle = {
    
//     width: '800px',
//     height: '250px',
    
//   };
  
  return (
    <Container className="risiko-container">
      <Row className="justify-content-md-center text-center my-5">
        <Col lg={12}>
          <h1>Risikomanagement</h1>
          <p style={{
            textAlign: 'justify',
            color: '#343a40',
            fontFamily: '"Open Sans", Arial, sans-serif',
            fontSize: '1rem',
            lineHeight: 1.6,
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px'
          }}>
            {/* Text */}
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center text-center">
      <p style={textStyle}>
            Unter dem Begriff Risikomanagement versteht man die systematische Analyse, Bewertung, Behandlung und Steuerung von Unternehmensrisiken. Der Risikomanagementprozess besteht aus zwei Hauptteilen, nämlich dem strategischen und dem operativen Teil. Das strategische Risikomanagement beinhaltet die regelmäßige Identifikation und Bewertung von Risiken sowie die Formulierung und Überprüfung der Strategie in größeren Zeitabständen. Alle Risiken, die die Organisation beeinflussen könnten, werden bedingungslos identifiziert. Bei der Risikobewertung wird festgestellt, ob das Risiko als unwesentlich eingestuft und vernachlässigt oder in das operative Management aufgenommen werden sollte.
          </p>
      </Row>
      <Row className="justify-content-md-center text-center">
        <Col lg={12}>
          <img src={ImageRisiko} alt="Risikomanagement" style={{ width: '800px', height: '250px' }} />
        </Col>
      </Row>

      <Row className="justify-content-md-center text-center my-5">
        <Col md={4} className="mb-3">
          <Card style={cardStyle} onClick={() => handleCardClick('/risikoidentifikation')}>
            <Card.Body>
              <Card.Title>Risikoidentifikation</Card.Title>
              <Card.Text>
                {/* Beschreibung */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card style={cardStyle} onClick={() => handleCardClick('/Risikobewertung')}>
            <Card.Body>
              <Card.Title>Risikobewertung</Card.Title>
              <Card.Text>
                {/* Beschreibung */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card style={cardStyle} onClick={() => handleCardClick('/Risikostrategie')}>
            <Card.Body>
              <Card.Title>Risikostrategie</Card.Title>
              <Card.Text>
                {/* Beschreibung */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Risiko;