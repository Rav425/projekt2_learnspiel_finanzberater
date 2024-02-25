import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBook, faQuestionCircle, faComments } from '@fortawesome/free-solid-svg-icons';

const IntroductionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBoxClick = (boxName: string) => {
    console.log(`${boxName} Box wurde geklickt.`);
    navigate(`/${boxName.toLowerCase()}`);
  };

  return (
    <div className="container mt-5">
      <h1>Fachkenntnisse</h1>
      <div className="d-flex flex-wrap justify-content-between">
        {/* Box 1 */}
        <Card className="m-2" style={{ width: '18rem' }} onClick={() => handleBoxClick('ThemaFinanzen')}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faChartLine} /> Thema "Finanzen"</Card.Title>
            <Button variant="primary">Erfahren Sie mehr</Button>
          </Card.Body>
        </Card>

        {/* Box 2 */}
        <Card className="m-2" style={{ width: '18rem' }} onClick={() => handleBoxClick('Finanzberatung')}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faBook} /> Finanzberatung</Card.Title>
            <Button variant="primary">Erfahren Sie mehr</Button>
          </Card.Body>
        </Card>

        {/* Box 3 */}
        <Card className="m-2" style={{ width: '18rem' }} onClick={() => handleBoxClick('WichtigeBegriffe')}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faQuestionCircle} /> Wichtige Begriffe und Definitionen</Card.Title>
            <Button variant="primary">Erfahren Sie mehr</Button>
          </Card.Body>
        </Card>

        {/* Box 4 */}
        <Card className="m-2" style={{ width: '18rem' }} onClick={() => handleBoxClick('WiesoFinanzberatung')}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faComments} /> Wieso Finanzberatung?</Card.Title>
            <Button variant="primary">Erfahren Sie mehr</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default IntroductionPage;