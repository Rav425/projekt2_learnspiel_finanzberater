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
        <Card className="m-2" style={{ width: '18rem' }} onClick={() => handleBoxClick('inhalt1')}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faChartLine} /> Finanz, Finanzberatung, Bilanz, Cashflow"</Card.Title>
            <Button variant="primary">Erfahren Sie mehr</Button>
          </Card.Body>
        </Card>

        {/* Box 2 */}
        <Card className="m-2" style={{ width: '18rem' }} onClick={() => handleBoxClick('inhalt2')}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faBook} /> Pre Money und Post Money, Rendite, Diversifikation, ROI</Card.Title>
            <Button variant="primary">Erfahren Sie mehr</Button>
          </Card.Body>
        </Card>

        {/* Box 3 */}
        <Card className="m-2" style={{ width: '18rem' }} onClick={() => handleBoxClick('inhalt3')}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faQuestionCircle} /> Finanzierungsarten, Investitionsbewertung, Steuersysteme und -gesetze, Finanzplanung</Card.Title>
            <Button variant="primary">Erfahren Sie mehr</Button>
          </Card.Body>
        </Card>

        {/* Box 4 */}
        <Card className="m-2" style={{ width: '18rem' }} onClick={() => handleBoxClick('inhalt4')}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faComments} /> Insolvenzgeldvorfinanzierung, Compliance, Kreditwürdigkeit, Leasing, Die Gewinn- und Verlustrechnung (GuV)</Card.Title>
            <Button variant="primary">Erfahren Sie mehr</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default IntroductionPage;