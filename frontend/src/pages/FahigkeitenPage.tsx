import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { MdShowChart as IconChartLine, MdSecurity as IconShieldAlt, MdPerson as IconUser } from 'react-icons/md'; // Importiert Icons von React Icons

import profileImage from '../assets/Bildschirmfoto 2024-01-29 um 22.02.21.png';
// import Risiko from './risiko';


const FahigkeitenPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
    position: 'fixed',
    bottom: startAnimation ? '20px' : '-300px',
    left: startAnimation ? 'calc(50% - 100px)' : '0%',
    transition: 'left 1s ease-out, bottom 1s ease-out',
    zIndex: 5,
  };

  const cards = [
    {
      title: 'Analytische Fähigkeiten',
      icon: <IconChartLine size="2em" />, // Verwendet React Icons
      content: ['Marktforschung', 'Szenario-Analyse'],
      path: '/analytische-faehigkeiten',
    },
    {
      title: 'Risikomanagement',
      icon: <IconShieldAlt size="2em" />, // Verwendet React Icons
      content: ['Risikobewertung', 'Kontinuierliche Überwachung', 'Absicherungsstrategien'],
      path: '/risikomanagement',
    },
    {
      title: 'Kundenberatung',
      icon: <IconUser size="2em" />, // Verwendet React Icons
      content: ['Kundenbedürfnisse verstehen', 'Gute Kommunikationsfähigkeiten', 'Lösungsorientierte Beratung'],
      path: '/kundenberatung',
    },
  ];

  return (
    <Container fluid style={{ marginTop: '50px', position: 'relative' }}>
      <Row className="justify-content-md-center">
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
            {card.icon} {/* Anzeige des Icons */}
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