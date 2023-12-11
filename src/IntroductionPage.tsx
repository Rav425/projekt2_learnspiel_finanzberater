import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroductionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBoxClick = (boxName: string) => {
    console.log(`${boxName} Box wurde geklickt.`);
    // Hier könnten Sie beispielsweise navigieren oder eine andere Aktion durchführen
    // navigate(`/${boxName.toLowerCase()}`);
  };

  return (
    <div className="container mt-5">
      <h1>Fachkenntnisse</h1>
      <div className="d-flex flex-wrap justify-content-between">
        {/* Box 1 */}
        <div className="p-3" style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleBoxClick('ThemaFinanzen')}>
          <h3>Thema "Finanzen"</h3>
        </div>

        {/* Box 2 */}
        <div className="p-3" style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleBoxClick('Finanzberatung')}>
          <h3>Finanzberatung</h3>
        </div>

        {/* Box 3 */}
        <div className="p-3" style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleBoxClick('WichtigeBegriffe')}>
          <h3>Wichtige Begriffe und Definitionen</h3>
        </div>

        {/* Box 4 */}
        <div className="p-3" style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleBoxClick('WiesoFinanzberatung')}>
          <h3>Wieso Finanzberatung?</h3>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
