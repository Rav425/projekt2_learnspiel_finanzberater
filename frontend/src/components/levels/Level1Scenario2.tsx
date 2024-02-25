import React, { useState } from 'react';
import styled from 'styled-components';

// Global Styles mit Google Fonts
const GlobalStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Roboto:wght@400;500;700&display=swap');
  font-family: 'Roboto', sans-serif;
`;

const Container = styled.div`
  max-width: 640px;
  margin: auto;
  padding: 2rem;
  background-color: #f9fafb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Input = styled.input`
  width: calc(100% - 1rem);
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 2px solid #e5e7eb;
  background-color: #fff;
  border-radius: 4px;
  font-size: 1rem;
`;



const Button = styled.button`
  width: calc(100% - 1rem);
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: #4F46E5;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.1rem;
  &:hover {
    background-color: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Result = styled.div`
  margin-top: 1rem;
  background-color: #fef3c7;
  padding: 1rem;
  border-radius: 4px;
  font-family: 'Merriweather', serif;
  font-size: 1rem;
`;

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #4F46E5;
`;

const Description = styled.p`
  font-family: 'Merriweather', serif;
  margin-bottom: 2rem;
`;

const Level1Scenario2: React.FC = () => {
    const [points, setPoints] = useState(0);
  const [currentTask, setCurrentTask] = useState(1);


  
  
  // Zustandsvariablen für die erste Aufgabe
  const [netProfit, setNetProfit] = useState('0');
  const [initialInvestment, setInitialInvestment] = useState('0');
  const [result, setResult] = useState<string | null>(null);

  const calculateROI = () => {
    
    const profit = parseFloat(netProfit);
    const investment = parseFloat(initialInvestment);
    if (!isNaN(profit) && !isNaN(investment) && investment > 0) {
      const roi = (profit / investment) * 100;
  
      if (roi === 50) {
        setResult(`Der ROI beträgt ${roi.toFixed(2)}%. Richtig! Die Antwort ist 1/2.`);
        setPoints(points + 1);
        setCurrentTask(2); // Navigiert zur nächsten Aufgabe, wenn die Antwort korrekt ist
      } else {
        setResult(`Der ROI beträgt ${roi.toFixed(2)}%.`);
        setCurrentTask(2); // Navigiert zur nächsten Aufgabe, unabhängig davon, ob die Antwort korrekt ist
      }
    } else {
      setResult('Bitte gültige Werte eingeben!');
    }
  };

  const calculateProfitLoss = () => {
    const totalRevenue = 150000;
    const totalCosts = 60000 + 24000 + 40000 + 10000 + 8000;
    const profitLoss = totalRevenue - totalCosts;
    return `Gewinn: ${profitLoss} Euro`;
  };
  const [userProfitLoss, setUserProfitLoss] = useState('');
  const [validationResult, setValidationResult] = useState<string | null>(null);

  const validateProfitLoss = () => {
    const expectedProfitLoss = 8000; // Erwarteter Gewinn basierend auf der Aufgabenstellung
    const userCalculation = parseFloat(userProfitLoss);
    if (!isNaN(userCalculation)) {
      if (userCalculation === expectedProfitLoss) {
        
        // setValidationResult('Richtig! Deine Berechnung ist korrekt.');
        setPoints(points + 1);
        setCurrentTask(2); // Navigiert zur nächsten Aufgabe, wenn die Antwort korrekt ist
      } else {
        // setValidationResult('Falsch. Bitte überprüfe deine Berechnung.');
        setCurrentTask(2); // Navigiert zur nächsten Aufgabe, unabhängig davon, ob die Antwort korrekt ist
      }
    } else {
      setValidationResult('Bitte gültige Werte eingeben!');
    }
  };

  const [cashflowEingabe, setCashflowEingabe] = useState(''); // Benutzereingabe für den Cashflow
  const [cashflowErgebnis, setCashflowErgebnis] = useState<string | null>(null); // Feedback zum Cashflow

  // Berechnung des Cashflows basierend auf festen Werten
  const calculateCashflow = () => {
    const berechneterCashflow = 300000 + 200000 + 50000 - 150000 - 200000 - 100000 - 50000;
    const benutzerCashflow = parseFloat(cashflowEingabe);

    if (berechneterCashflow === benutzerCashflow) {
    //   setCashflowErgebnis('Richtig! Dein berechneter Cashflow ist korrekt.');
      setPoints(points + 10); // Punkte hinzufügen, wenn die Antwort korrekt ist
      setCurrentTask(4); // Weiter zur nächsten Aufgabe
    } else {
      setCashflowErgebnis(`Falsch. Der korrekte Cashflow beträgt: ${berechneterCashflow} Euro.`);
    }
}
    // Berechnung der Rendite für einen Sparbrief mit festem Zinssatz
    const [renditeErgebnis, setRenditeErgebnis] = useState<string | null>(null);
    const [userRenditeInput, setUserRenditeInput] = useState('');
  
    const validiereRendite = () => {
      // Die erwartete Rendite ist 15%
      const userRendite = parseFloat(userRenditeInput);
      if (userRendite === 15) {
        setRenditeErgebnis('Richtig! Die berechnete Rendite von 15% ist korrekt.');
        setPoints(points + 20); // 20 Punkte für eine korrekte Antwort hinzufügen
        
      } else {
        setRenditeErgebnis(`Falsch. Die korrekte Rendite beträgt 15%, nicht ${userRendite}%.`);
      }
  };

  
  return (
    <GlobalStyle>
      <Container>
        {currentTask === 1 && (
          <>
            <Title>ROI</Title>
            <Description>Betrachten wir das Beispiel von John, der beschloss, ein kleines Café in einer belebten Innenstadt zu eröffnen. John schätzte eine anfängliche Investition von 100.000 US-Dollar, die Miete, Ausrüstung, Inventar- und Marketingausgaben umfasste. Im ersten Betriebsjahr erzielte John einen Umsatz von 200.000 US-Dollar und einen Nettogewinn von 50.000 US-Dollar, nach Abzug aller Ausgaben.</Description>
            <label htmlFor="initialInvestment">Anfängliche Investition (USD): </label>
            <Input
              id="initialInvestment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
            />
            <label htmlFor="netProfit">Nettogewinn (USD): </label>
            <Input
              id="netProfit"
              value={netProfit}
              onChange={(e) => setNetProfit(e.target.value)}
            />
            <Button onClick={calculateROI}>Antwort</Button>
            {result && <Result>{result}</Result>}
            <Button onClick={() => setCurrentTask(2)}>Weiter zur nächsten Aufgabe</Button>
          </>
        )}

        {currentTask === 2 && (
          <>
            <Title>Die Gewinn- und Verlustrechnung</Title>
            <Description>
      Anna ist die Inhaberin eines kleinen Schmuckgeschäfts in einer belebten Einkaufsstraße. Sie möchte die finanzielle Leistung ihres Unternehmens analysieren und beschließt, eine Gewinn- und Verlustrechnung (GuV) für das vergangene Geschäftsjahr zu erstellen.
      Anna verwendet das Gesamtkostenverfahren für die Berechnung ihrer GuV. Sie hat die folgenden Daten für das Geschäftsjahr gesammelt:
      <ul>
        <li>Gesamter Umsatz: 150.000 Euro</li>
        <li>Kosten für Waren: 60.000 Euro</li>
        <li>Miete für das Ladenlokal: 24.000 Euro</li>
        <li>Gehälter für Mitarbeiter: 40.000 Euro</li>
        <li>Werbekosten: 10.000 Euro</li>
        <li>Sonstige Betriebsausgaben: 8.000 Euro</li>
      </ul>
      Berechnen Sie den Gewinn oder Verlust.
    </Description>
            <Input
              type="text"
              placeholder="Dein berechneter Gewinn/Verlust in Euro"
              value={userProfitLoss}
              onChange={(e) => setUserProfitLoss(e.target.value)}
            />
            <Button onClick={validateProfitLoss}>Antwort</Button>
            <Button onClick={() => setCurrentTask(3)}>Weiter zur nächsten Aufgabe</Button>
            {validationResult && <Result>{validationResult}</Result>}
          </>
        )}
        {currentTask === 3 && (
          <>
            <Title>Cashflow-Berechnung</Title>
            <Description>
  Markus ist der Geschäftsführer eines kleinen IT-Unternehmens, das sich auf die Entwicklung von Softwarelösungen für kleine und mittelständische Unternehmen spezialisiert hat. Er möchte den Cashflow seines Unternehmens für das vergangene Geschäftsjahr berechnen, um die finanzielle Leistungsfähigkeit des Unternehmens zu analysieren und zukünftige Investitionsentscheidungen zu treffen.
  Die Einzahlungen betragen:
  <ul>
    <li>Einnahmen aus Softwarelizenzen: 300.000 Euro</li>
    <li>Einnahmen aus kundenspezifischen Entwicklungsprojekten: 200.000 Euro</li>
    <li>Sonstige Einnahmen: 50.000 Euro</li>
  </ul>
  Die Auszahlungen betragen:
  <ul>
    <li>Betriebskosten: 150.000 Euro</li>
    <li>Gehälter: 200.000 Euro</li>
    <li>Entwicklungskosten: 100.000 Euro</li>
    <li>Sonstige Ausgaben: 50.000 Euro</li>
  </ul>
  Berechnen Sie den Cashflow.
</Description>

<Input
            type="number"
            placeholder="Dein berechneter Cashflow in Euro"
            value={cashflowEingabe}
            onChange={(e) => setCashflowEingabe(e.target.value)}
          />
          <Button onClick={calculateCashflow}>Cashflow überprüfen</Button>
          {cashflowErgebnis && <div>{cashflowErgebnis}</div>}
          <Button onClick={() => setCurrentTask(currentTask + 1)}>Weiter zur nächsten Aufgabe</Button>
        </>
      )}

{currentTask === 4 && (
          <>
            <Title>Renditeberechnung</Title>
            <Description>
  Ein Unternehmen erwägt, in verschiedene Anlageoptionen zu investieren, um sein Kapital gewinnbringend anzulegen. Es möchte verstehen, wie es die Rendite seiner potenziellen Anlagen berechnen kann, um fundierte Entscheidungen zu treffen.
  Das Unternehmen interessiert sich für zwei verschiedene Anlageoptionen: einen Sparbrief mit festem Zinssatz und Aktien eines Technologieunternehmens.
  <ul> <li>Sparbrief:
  Das Unternehmen erwägt, 10.000 Euro in einen Sparbrief mit einem festen Zinssatz von 3% pro Jahr über einen Zeitraum von fünf Jahren zu investieren. Es möchte die erwartete Rendite dieser Anlage berechnen.
  Berechnen Sie die Rendite.</li></ul>
 
</Description>

<Input
            type="number"
            placeholder="Berechnete Rendite in %"
            value={userRenditeInput}
            onChange={(e) => setUserRenditeInput(e.target.value)}
          />
          <Button onClick={validiereRendite}>Rendite überprüfen</Button>
          {renditeErgebnis && <div>{renditeErgebnis}</div>}
          <p>Aktuelle Punktzahl: {points}</p>
        </>
      )}
      </Container>
    </GlobalStyle>
  );
};

export default Level1Scenario2;
