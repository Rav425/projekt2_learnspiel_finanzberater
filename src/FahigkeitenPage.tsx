import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import profileImage from './Bildschirmfoto 2024-01-29 um 22.02.21.png';
import Risiko from './risiko';

const FahigkeitenPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Startet die Animation beim ersten Laden
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000); // Verzögerung von 1 Sekunde vor der Animation
    return () => clearTimeout(timer);
  }, []);
  // Card-Styles
  const cardStyle = {
    backgroundColor: '#f8f9fa',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.05)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  };

  const iconStyle = {
    color: '#495057',
    marginBottom: '10px',
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    position: 'fixed', // Fixed, um sich relativ zum Viewport zu positionieren
    bottom: startAnimation ? '20px' : '-300px', // Startet unterhalb des Bildschirms
    left: startAnimation ? 'calc(50% - 100px)' : '0%', // Bewegt sich von links nach rechts
    transition: 'left 1s ease-out, bottom 1s ease-out', // Glatter Übergang für die Animation
    zIndex: 5, // Sichert, dass das Bild über anderen Elementen liegt
  };

  // Inhalte der Karten
  const cards = [
    {
      title: 'Analytische Fähigkeiten',
      icon: faChartLine,
      content: ['Marktforschung', 'Szenario-Analyse'],
      path: '/analytische-faehigkeiten',
    },
    {
      title: 'Risikomanagement',
      icon: faShieldAlt,
      content: ['Risikobewertung', 'Kontinuierliche Überwachung', 'Absicherungsstrategien'],
      path: '/risikomanagement',
    },
    {
      title: 'Kundenberatung',
      icon: faUser,
      content: ['Kundenbedürfnisse verstehen', 'Gute Kommunikationsfähigkeiten', 'Lösungsorientierte Beratung'],
      path: '/kundenberatung',
    },
  ];

  return (
    <Container fluid style={{ marginTop: '50px', position: 'relative' }}> {/* Relative Position für das absolute Kind-Element */}
      <Row className="justify-content-md-center">
        {/* Das Bild wird hier mit einer Animation eingefügt */}
        <img src={profileImage} alt="Profil" style={imageStyle} />
        {cards.map((card, index) => (
          <Col
            md={4}
            key={index}
            style={hoveredIndex === index ? cardHoverStyle : cardStyle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => navigate(card.path)}
          >
            <FontAwesomeIcon icon={card.icon} size="2x" style={iconStyle} />
            <h5>{card.title}</h5>
            <ul>
              {card.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FahigkeitenPage;
