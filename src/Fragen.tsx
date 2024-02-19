import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import video from './frageSWOT.mp4';
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
      { answerText: 'Engagement in der Gemeinschaft', isCorrect: true },
      { answerText: 'Rückgang der Einlagen', isCorrect: false },
      { answerText: 'Erhöhung der Betriebskosten', isCorrect: false },
      { answerText: 'Rückgang der Zinseneinnahmen', isCorrect: false },
    ],
  },
  // Weitere Fragen können hier hinzugefügt werden
];

const Fragen: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(60); // Timer startet bei 60 Sekunden

  

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      alert('Zeit abgelaufen!');
    }
  }, [timer]);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      alert('Richtige Antwort!');
    } else {
      alert('Falsche Antwort!');
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(60); // Reset Timer für die nächste Frage
    } else {
      alert('Quiz beendet!');
    }
  };

  return (
    <Container className="mt-5">
      
      <Row className="justify-content-center">
        <Col md={8}>
          <div>
            <h1>My Custom Player</h1>
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
            <Card.Footer>
              Verbleibende Zeit: {timer} Sekunden
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Fragen;
