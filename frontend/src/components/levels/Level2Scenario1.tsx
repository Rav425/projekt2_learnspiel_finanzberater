import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import video from '../../assets/frageSWOT.mp4';


interface AnswerOption {
    answerText: string;
    isCorrect: boolean;
  }
  
  interface Question {
    questionText: string;
    answerOptions: AnswerOption[];
  }
  
  const questions: Question[] = [
    {
      questionText: 'Was ist eine der Hauptstärken von "BlueWave Fisheries", die ihnen einen Vorteil bei der nachhaltigen Fischerei bietet?',
      answerOptions: [
        { answerText: 'Zugang zu fortschrittlicher Technologie', isCorrect: false },
        { answerText: 'Erfahrung und lokales Fachwissen', isCorrect: true },
        { answerText: 'Beziehungen zu internationalen Lieferanten', isCorrect: false },
        { answerText: 'Große Produktionskapazität', isCorrect: false },
      ],
    },
    {
      questionText: 'Was ist eine der Schwächen von "BlueWave Fisheries", die ihre Wettbewerbsfähigkeit auf dem Markt einschränkt?',
      answerOptions: [
        { answerText: 'Mangelndes Engagement für Nachhaltigkeit', isCorrect: false },
        { answerText: 'Überinvestition in Werbung', isCorrect: false },
        { answerText: 'Begrenzte Ressourcen und Zugang zu Technologie', isCorrect: true },
        { answerText: 'Zu viel Produktdiversifizierung', isCorrect: false },
  
      ],
      
      
    },
  
    {
      questionText: 'Welche Gelegenheit könnte "BlueWave Fisheries" nutzen, um seine Marktposition zu verbessern?',
      answerOptions: [
        { answerText: 'Erhöhung der Anzahl der Fischfangboote', isCorrect: false },
        { answerText: 'Partnerschaften mit Naturschutzorganisationen eingehen', isCorrect: true },
        { answerText: 'Senkung der Nachhaltigkeitsstandards, um Kosten zu reduzieren', isCorrect: false },
        { answerText: 'Konzentration auf den Verkauf von Nicht-Fischereiprodukten' , isCorrect: false },
  
      ],
      
      
    },
    {
      questionText: 'Welche externe Bedrohung steht "BlueWave Fisheries" gegenüber?',
      answerOptions: [
        { answerText: 'Zunehmendes Interesse der Verbraucher an nachhaltigen Produkten', isCorrect: false },
        { answerText: 'Sinkende Brennstoffpreise', isCorrect: true },
        { answerText: 'Wettbewerb von großen Unternehmen', isCorrect: false },
        { answerText: 'Verfügbarkeit von Schulungen zur nachhaltigen Fischerei' , isCorrect: false },
  
      ],
      
      
    },
    // Weitere Fragen können hier hinzugefügt werden
  ];
  
  const Level2Scenario1: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0); // Zustandsvariable für korrekte Antworten
    const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0); // Zustandsvariable für inkorrekte Antworten
    const [showResult, setShowResult] = useState<boolean>(false);
  
    const handleAnswerOptionClick = (isCorrect: boolean) => {
      if (isCorrect) {
        setCorrectAnswers(correctAnswers + 1);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResult(true);
      }
    };
  
    if (showResult) {
      return (
        <Container className="mt-5">
          <Row>
            <Col>
              <Card>
                <Card.Header>Quiz beendet</Card.Header>
                <Card.Body>
                  <Card.Title>Gratulation, Sie haben das Quiz beendet!</Card.Title>
                  <Card.Text>
                    Richtige Antworten: {correctAnswers}<br />
                    Falsche Antworten: {incorrectAnswers}
                  </Card.Text>
                  <Button variant="primary" onClick={() => window.location.reload()}>Quiz neu starten</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <div>
              <video width="750" height="500" controls>
                <source src={video} type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
              </video>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>Frage {currentQuestion + 1}</Card.Header>
              <Card.Body>
                <Card.Title>{questions[currentQuestion].questionText}</Card.Title>
                {questions[currentQuestion].answerOptions.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    className="d-block mb-2"
                    onClick={() => handleAnswerOptionClick(option.isCorrect)}
                  >
                    {option.answerText}
                  </Button>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  

export default Level2Scenario1;