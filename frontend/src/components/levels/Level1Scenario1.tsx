import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

interface AnswerOption {
    answerText: string;
    isCorrect: boolean;
  }
  
  interface Question {
    questionText: string;
    answerOptions: AnswerOption[];
  }

const questions : Question[] = [
    {
        questionText: "1. Frage: Was ist Finanz im Geschäftskundenkontext? Bitte wählen Sie die richtige Antwort aus (5 Punkte)",
        "answerOptions": [
            { answerText: "Die Bereitstellung von Finanzdienstleistungen und -produkten durch Banken und andere Finanzinstitute an Unternehmen", isCorrect: true },
            { answerText: "Die Verwaltung von Kapital und finanziellen Ressourcen innerhalb eines Unternehmens", isCorrect: false },
            { answerText: "Die Bilanzierung und Berichterstattung über finanzielle Transaktionen in einem Unternehmen", isCorrect: false }
        ]
    },
    {
        questionText: "2. Frage: Bietet Finanzberatung eine breite Palette von Beratungsaspekten an, darunter Versicherungs-, Vorsorge-, Vermögens- und Anlagenberatung, Immobilienberatung sowie Schuldnerberatung? (5 Punkte)",
        "answerOptions": [
            { answerText: "Richtig", isCorrect: true },
            { answerText: "FALSCH", isCorrect: false }
        ]
    },
    {
        questionText: "3. Frage: Was umfasst die Bedeutung von Liquidität im Kontext eines Unternehmens? Bitte wählen Sie die richtige Antwort aus (5 Punkte)",
        "answerOptions": [
            { answerText: "Die Fähigkeit eines Unternehmens, langfristige Verbindlichkeiten zu begleichen", isCorrect: false },
            { answerText: "Die Fähigkeit eines Unternehmens, kurzfristige Verbindlichkeiten mit vorhandenen liquiden Mitteln zu begleichen", isCorrect: true },
            { answerText: "Die Fähigkeit eines Unternehmens, langfristige Investitionen zu tätigen", isCorrect: false }
        ]
    },
    {
        questionText: "4. Frage: Was umfasst die Bedeutung von Liquidität im Kontext eines Unternehmens? Bitte wählen Sie die richtige Antwort aus (5 Punkte)",
        "answerOptions": [
            { answerText: "Die Fähigkeit eines Unternehmens, langfristige Verbindlichkeiten zu begleichen.", isCorrect: false },
            { answerText: "Die Fähigkeit eines Unternehmens, kurzfristige Verbindlichkeiten mit vorhandenen liquiden Mitteln zu begleichen.", isCorrect: true },
            { answerText: "Die Fähigkeit eines Unternehmens, langfristige Investitionen zu tätigen.", isCorrect: false }
        ]
    },
    {
        questionText: "5. Frage: Was bezeichnet Compliance und welche Bedeutung hat sie für Unternehmen und Organisationen? Wählen Sie die richtige Antwort aus. (5 Punkte)",
        "answerOptions": [
            { answerText: "Compliance bezeichnet die missbräuchliche Umgehung von Gesetzen und Richtlinien in Unternehmen und Organisationen, um wirtschaftliche Vorteile zu erlangen", isCorrect: false },
            { answerText: "Compliance bezeichnet die konsequente Befolgung von Gesetzen, Richtlinien, Normen und freiwilligen Verpflichtungen in Unternehmen und Organisationen, um rechtliche und ethische Standards einzuhalten", isCorrect: true },
            { answerText: "Compliance bezeichnet die Vernachlässigung von rechtlichen Vorgaben und ethischen Standards in Unternehmen und Organisationen, um Gewinne zu maximieren", isCorrect: false }
        ]
    },
    {
        questionText: "7. Welche Antwort ist richtig? Was ist die Kreditwürdigkeit und welches Ziel verfolgt sie? (5 Punkte)",
        "answerOptions": [
            { answerText: "Die Kreditwürdigkeit ist ein Maß dafür, wie zuverlässig ein potenzieller Kreditnehmer seine finanziellen Verpflichtungen erfüllen kann, und zielt darauf ab, das Risiko eines Zahlungsausfalls zu minimieren.", isCorrect: true },
            { answerText: "Die Kreditwürdigkeit bezeichnet die finanzielle Stabilität eines Kreditgebers und zielt darauf ab, den potenziellen Gewinn aus Kreditvergaben zu maximieren.", isCorrect: false },
            { answerText: "Die Kreditwürdigkeit ist eine rechtliche Regelung, die die Bedingungen für die Kreditvergabe festlegt und zielt darauf ab, die Verbraucher vor ausbeuterischen Kreditpraktiken zu schützen.", isCorrect: false }
        ]
    },
    {
        questionText: "8. Die Investitionsbewertung ist entscheidend, um die Rentabilität und den Nutzen von Investitionen zu bewerten. Dafür werden Techniken wie die Kapitalwertmethode, die interne Zinsfußmethode und die Amortisationsdauer angewendet. Bitte wählen Sie die richtige Antwort aus (5 Punkte)",
        "answerOptions": [
            { answerText: "Richtig",isCorrect: true },
            { answerText: "Falsch", isCorrect: false }
        ]
    },
    {
        questionText: "9. Welche Arten von Anleihen gibt es? Bitte wählen Sie die richtige Antwort aus (5 Punkte)",
        "answerOptions": [
            { answerText: "Staatsanleihen und Unternehmensanleihen", isCorrect: true },
            { answerText: "Aktienanleihen und Hybridanleihen", isCorrect: false },
            { answerText: "Pfandbriefe und Floater-Anleihen", isCorrect: true },
            { answerText: "Schuldverschreibungen und Wandelanleihen", isCorrect: false },
            { answerText: "Zerobonds (Nullkupon-Anleihen) und Anleihen mit variabler Verzinsung", isCorrect: false }
        ]
    },
    {
        questionText: "10. Was umfasst das Steuersystem eines Landes und welche Funktion hat es? Wählen Sie die richtige Antwort (5 Punkte)",
        "answerOptions": [
            { answerText: "Das Steuersystem eines Landes umfasst die Gesamtheit aller Steuerarten und regelt, wie Steuern erhoben, festgesetzt und eingezogen werden.", isCorrect: true },
            { answerText: "Das Steuersystem eines Landes umfasst nur eine bestimmte Steuerart, wie zum Beispiel die Einkommensteuer.", isCorrect: false },
            { answerText: "Das Steuersystem eines Landes regelt ausschließlich die Verteilung von Einkommen und Vermögen in der Bevölkerung.",isCorrect: false }
        ]
    }
];


export default function Level1Scenario1() {

const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0);
const [correctAnswers, setCorrectAnswers] = useState<number>(0);

const [showResult, setShowResult] = useState<boolean>(false);



    const [isAnswerSelected, setAnswerSelected] = useState(null);
    const [isInputChecked, setInputChecked] = useState(false);
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const navigate = useNavigate();

    const handleInputChange = (index: number) => {
        setAnswerSelected(index);
        setInputChecked(true);
    };

    const goNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setInputChecked(true);
            setAnswerSelected(null);
           
        } else {
            navigate('/Level1Scenario2');
        }
    };
    const handleAnswerSelection = (isCorrect, boolean) => {
        if (isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setIncorrectAnswers(incorrectAnswers + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            navigate('/rangliste', { state: { correctAnswers, incorrectAnswers } }); // Weiterleitung zur Rangliste mit Ergebnissen
        }
 
    };

    const goBackToTheory = () => {
        navigate('/theory');
    };
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
            navigate('/Level1Scenario2');
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
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="w-9/12 bg-white rounded-sm">
                <div className="p-6">
                    <div className="grid grid-col-4 gap-6">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-3xl">1:00</p>
                            <span>für diese Frage</span>
                        </div>
                        <div className="flex justify-end">
                            <button className="border" onClick={goBackToTheory}>
                            {/* Richtige Antworten: {(correctAnswers)}<br />
                  Falsche Antworten: {incorrectAnswers} */}
                            </button>
                        </div>
                        <div className="relative pt-1 my-4">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div
                                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                    className="shadow-none flex flex-col justify-center text-center whitespace-nowrap text-white bg-orange-500 rounded"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-gray-300 rounded-sm w-2/4">
                            <p className="p-4">{questions[currentQuestion].questionText}</p>
                        </div>
                        <div className="block w-2/4">
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <div className="border-2 border-gray-200 pl-2 py-3 hover:bg-sky-300 hover:bg-opacity-50 mb-2">
                                    <input
                                        onChange={() => handleInputChange(index)}
                                        checked={isAnswerSelected === index}
                                        id={`checkbox_id${index}`}
                                        className="pl-4"
                                        type="checkbox"
                                        name=""
                                    />
                                    <label className="pl-5 cursor-pointer">{answerOption.answerText}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={goNextQuestion}
                        disabled={!isInputChecked}
                        className={`text-lg py-2 w-36 outline-none my-3 float-right ${
                            isInputChecked ? 'bg-blue-500 cursor-pointer' : 'bg-blue-500 cursor-not-allowed opacity-50'
                        }`}
                    >
              
                
                        Weiter
                    </button>
                </div>
            </div>
        </div>
    );
}
