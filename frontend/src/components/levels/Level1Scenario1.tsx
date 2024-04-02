import React, {useState, useEffect} from 'react'
import { IoMdTime } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import correctNotification from '../../assets/audio/correct-answer.mp3';
import wrongNotification from '../../assets/audio/wrong-answer.mp3';
import buttonNotification from '../../assets/audio/button-sound.mp3'
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

import { updateUserProgress } from '../../api/apiCalls';

const questions = [
    {
        questionText: 'Was ist Finanz im Geschäftskundenkontext? Bitte wählen Sie die richtige Antwort aus', // 5 Punkte
        answerOptions: [
            {answerText:'Die Bereitstellung von Finanzdienstleistungen und -produkten durch Banken und andere Finanzinstitute an Unternehmen.', isCorrect: true},
            {answerText:'Die Verwaltung von Kapital und finanziellen Ressourcen innerhalb eines Unternehmens. ', isCorrect: false},
            {answerText:'Die Bilanzierung und Berichterstattung über finanzielle Transaktionen in einem Unternehmen. ', isCorrect: false},
        ],

    },
    {
        questionText: "Bietet Finanzberatung eine breite Palette von Beratungsaspekten an, darunter Versicherungs-, Vorsorge-, Vermögens- und Anlagenberatung, Immobilienberatung sowie Schuldnerberatung?",    // 5 Punkte
        answerOptions: [
            {answerText:'Richtig', isCorrect: true},
            {answerText:'Falsch', isCorrect: false},
        ],
    },
    {
        questionText: 'Was umfasst die Bedeutung von Liquidität im Kontext eines Unternehmens? Bitte wählen Sie die richtige Antwort aus.', // 5 Punkte
        answerOptions: [
            {answerText:'Die Fähigkeit eines Unternehmens, langfristige Verbindlichkeiten zu begleichen.', isCorrect: false},
            {answerText:'Die Fähigkeit eines Unternehmens, kurzfristige Verbindlichkeiten mit vorhandenen liquiden Mitteln zu begleichen.', isCorrect: true},
            {answerText:'Die Fähigkeit eines Unternehmens, langfristige Investitionen zu tätigen.', isCorrect: false},
        ],
    },
    {
        questionText: 'Was bezeichnet Compliance und welche Bedeutung hat sie für Unternehmen und Organisationen? Wählen Sie die richtige Antwort aus. ', // 5 Punkte
        answerOptions: [
            {answerText: 'Compliance bezeichnet die missbräuchliche Umgehung von Gesetzen und Richtlinien in Unternehmen und Organisationen, um wirtschaftliche Vorteile zu erlangen.', isCorrect: false},
            {answerText: 'Compliance bezeichnet die konsequente Befolgung von Gesetzen, Richtlinien, Normen und freiwilligen Verpflichtungen in Unternehmen und Organisationen, um rechtliche und ethische Standards einzuhalten.', isCorrect: true},
            {answerText: 'Compliance bezeichnet die Vernachlässigung von rechtlichen Vorgaben und ethischen Standards in Unternehmen und Organisationen, um Gewinne zu maximieren', isCorrect: false},
        ]
    },

    {
        questionText: 'Was ist die Kreditwürdigkeit und welches Ziel verfolgt sie?', // 5 Punkte
        answerOptions: [
            {answerText: 'Die Kreditwürdigkeit ist ein Maß dafür, wie zuverlässig ein potenzieller Kreditnehmer seine finanziellen Verpflichtungen erfüllen kann, und zielt darauf ab, das Risiko eines Zahlungsausfalls zu minimieren.', isCorrect: true},
            {answerText: 'Die Kreditwürdigkeit bezeichnet die finanzielle Stabilität eines Kreditgebers und zielt darauf ab, den potenziellen Gewinn aus Kreditvergaben zu maximieren.', isCorrect: false},
            {answerText: 'Die Kreditwürdigkeit ist eine rechtliche Regelung, die die Bedingungen für die Kreditvergabe festlegt und zielt darauf ab, die Verbraucher vor ausbeuterischen Kreditpraktiken zu schützen.', isCorrect: false},
        ]
    },

    {
        questionText: 'Die Investitionsbewertung ist entscheidend, um die Rentabilität und den Nutzen von Investitionen zu bewerten. Dafür werden Techniken wie die Kapitalwertmethode, die interne Zinsfußmethode und die Amortisationsdauer angewendet. Bitte wählen Sie die richtige Antwort aus ', // 5 Punkte
        answerOptions: [
            {answerText: 'Richtig', isCorrect: true},
            {answerText: 'Falsch', isCorrect: false},
        ]
    },

    {
        questionText: 'Welche Arten von Anleihen gibt es? Bitte wählen Sie die richtige Antwort aus ', // 5 Punkte
        answerOptions: [
            {answerText: 'Staatsanleihen und Unternehmensanleihen', isCorrect: true},
            {answerText: 'Aktienanleihen und Hybridanleihen ', isCorrect: false},
            {answerText: 'Pfandbriefe und Floater-Anleihen', isCorrect: true},
            {answerText: 'Schuldverschreibungen und Wandelanleihen ', isCorrect: false},
            {answerText: 'Zerobonds (Nullkupon-Anleihen) und Anleihen mit variabler Verzinsung ', isCorrect: false},
        ]
    },
    
];

export default function Level1Scenario1() {
    const [isAnswerSelected, setAnswerSelected] = useState(null);
    // const [isInputChecked, setInputChecked] = useState(false);
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputChecked(event.target.checked)
    // }

    const onAnswerClick = (event) => {
        console.log(event.target.innerHTML);
    }

    const [showScore, setShowScore] = useState(false); // Zustand, um den Score anzuzeigen

    const START_TIME = 120;
    const initialMinutes = Math.floor(START_TIME / 60);
    const initialSeconds = START_TIME % 60;

    const [remainingTime, setRemainingTime] = useState({
        minutes: initialMinutes < 10 ? `0${initialMinutes}` : `${initialMinutes}`,
        seconds: initialSeconds < 10 ? `0${initialSeconds}` : `${initialSeconds}`
    });

   
    useEffect(() => {
        let minutes = Math.floor(START_TIME / 60);
        let seconds = START_TIME % 60;
        let isComponentMounted = true; // Zustand, um zu überprüfen, ob die Komponente gemountet ist
    
        const interval = setInterval(() => {
            if (!isComponentMounted) {
                return clearInterval(interval);
            }
    
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                clearInterval(interval);
                alert('Die Zeit ist abgelaufen');
                this.endQuiz();
            }
    
            setRemainingTime({
                minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
                seconds: seconds < 10 ? `0${seconds}` : `${seconds}`
            });
        }, 1000);
    
        return () => {
            isComponentMounted = false; // Setzen den Zustand auf false, wenn die Komponente unmountet wird
            clearInterval(interval);
        };
    }, []);
    
    const correctSound = document.getElementById('correct-sound') as HTMLAudioElement
    const wrongSound = document.getElementById('wrong-sound') as HTMLAudioElement
    const buttonSound = document.getElementById('button-sound') as HTMLAudioElement
    const [score, setScore] = useState(0);
    const handleInputChange = (index: number) => {
        setAnswerSelected(index)
        // setInputChecked(true)

        if (questions[currentQuestion].answerOptions[index].isCorrect) {
            toast.success('Richtige Antwort!');
            setScore(score + 2);

            setTimeout(() => {
                correctSound.play();
            }, 500)
        } else {
            toast.error('Falsche Antwort!');
            setTimeout(() => {
                wrongSound.play();
            })
        }

        setTimeout(() => {
            goNextQuestion();
        }, 1500);
        
    }

    const playButtonSound = () => {
        buttonSound.play();
    }


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const goNextQuestion = () => {
        playButtonSound();
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            // setInputChecked(false);
            setAnswerSelected(null);
        }
        else {
           endQuiz();
        //    clearInterval(interval);
            // setShowScore(true);
        }
    }
    const goPreviousQuestion = () => {
        const previousQuestion = currentQuestion - 1;
        if (previousQuestion >= 0) {
            setCurrentQuestion(previousQuestion);
            // setInputChecked(false);
            setAnswerSelected(null);
        }
    }
    
    // end the quiz
    const endQuiz = () => {
        alert('Der Quiz ist beendet!')
        // const {state} = this;

        // const playerStats = {
        //     score: state.score,
        //     questions: state.questions,
        //     correctAnswers: state.correctAnswers,
        //     wrongAnswers: state.wrongAnswers
        // };
        // console.log(playerStats);


        // const userToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('access_token='));
        // if (!userToken) {
        //   toast.error('Bitte melden Sie sich an, um Ihre Punkte zu speichern.');
        //   return;
        // }

        const userId = currentUser?.benutzer_ID;

        updateUserProgress(userId, score);
        // location.href = '/startseite';

    }

    // stand 30.03.24
    // Funktion, um den Gesamtscore am Ende des Levels zu speichern
    const currentUser = useAppSelector((state: RootState) => state.user.currentUser)
//   const saveLevelScore = async () => {
//     try {
//     //   const userToken = localStorage.getItem('access_token'); // TODO: Holen Sie die tatsächliche Benutzer-ID, z.B. aus dem Zustand oder Context
//     const userToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('access_token='));
//       const response = await fetch('/api/progress/save-progress', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // TODO: Authentifizierungstoken 
//           'Authorization': `Bearer ${userToken}`
//         },
//         body: JSON.stringify({ userId: currentUser.benutzer_Id, totalPoints: score }),
//       });

//       if (!response.ok) {
//         throw new Error('Score update failed');
//       }

//       const data = await response.json();
//       console.log(data);
      
//       toast.success('Deine Punkte wurden gespeichert!');
//     } catch (error) {
//       toast.error('Fehler beim Speichern der Punkte.');
//       console.error(error);
//     }
//   };

// Test 2
// const saveLevelScore = async () => {
//     try {
//       const cookieValue = document.cookie.split(';').find(cookie => cookie.trim().startsWith('access_token='));
//       if (cookieValue) {
//         // Entfernen des Prefix 'access_token='
//         const userToken = cookieValue.split('=')[1];
  
//         const response = await fetch('/api/progress/save-progress/${userId}', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${userToken}`
//           },
//           body: JSON.stringify({ points: score }),
//         });
  
//         if (!response.ok) {
//           throw new Error('Fehler beim Speichern des Scores');
//         }
  
//         // Verarbeitung der Serverantwort
//         const data = await response.json();
//         console.log('Score erfolgreich gespeichert:', data);
//       } else {
//         console.error('Benutzertoken nicht gefunden.');
//       }
//     } catch (error) {
//       console.error('Fehler beim Speichern des Levelscores:', error);
//     }
//   };

// const saveLevelScore = async () => {
//     try {
//       // Hier nehmen wir an, dass 'userId' und 'score' verfügbar sind
//       // 'userId' muss aus dem aktuellen Benutzerzustand oder einer ähnlichen Quelle bezogen werden
//       const userId = currentUser.benutzer_ID; // Stellen Sie sicher, dass dies der richtige Pfad zur Benutzer-ID ist
//       const response = await fetch(`/api/progress/save-progress/${userId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ points: score }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Fehler beim Speichern des Scores');
//       }
  
//       // Verarbeitung der Serverantwort
//       const data = await response.json();
//       console.log('Score erfolgreich gespeichert:', data);
//       toast.success('Deine Punkte wurden gespeichert!');
  
//     } catch (error) {
//       console.error('Fehler beim Speichern des Levelscores:', error);
//       toast.error('Fehler beim Speichern der Punkte.');
//     }
//   };
  
  // Stellen Sie sicher, dass diese Funktion am Ende des Quiz aufgerufen wird, z.B. nach der letzten Frage oder wenn die Zeit abgelaufen ist
  
  

  return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        {showScore ? (
            <div className="">Du hast 1 von {questions}</div>
        ) : (

            <div className='w-9/12 bg-white rounded-sm'>
                <ToastContainer />
                <audio id='correct-sound' src={correctNotification} />
                <audio id='wrong-sound' src={wrongNotification} />
                <audio id='button-sound' src={buttonNotification} />
                <div className='p-6'>
                    <div className='grid grid-col-4 gap-6'>
                        <div className="flex items-center gap-2">
                            <IoMdTime size={32}/>
                            <div className="flex gap-1">
                                <span className='font-bold text-3xl'>{remainingTime.minutes}</span>
                                <span className='font-bold text-3xl'>:</span>
                                <span className='font-bold text-3xl'>{remainingTime.seconds}</span>
                            </div>
                            <span>für diesen Quiz</span>
                        </div>
                        <div>
                            <div><span className="text-2xl font-bold mr-2">Frage</span><span className='text-2xl font-bold'>{currentQuestion + 1}</span> von <span className='text-1xl font-semibold'>{questions.length}</span></div>
                            <div>Du hast {score} von {questions.length *2} Punkten erreicht!</div>
                        </div>
                        <div className="relative pt-1 my-4">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style={{width: `${((currentQuestion + 1) / questions.length ) * 100}%`}} className="shadow-none flex flex-col justify-center text-center whitespace-nowrap text-white bg-orange-500 rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-gray-300 rounded-sm w-2/4">
                            <p className='p-4'>{questions[currentQuestion].questionText}</p>
                        </div>
                        <div className="block w-2/4">
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => <div className="border-2 border-gray-200 pl-2 py-3 hover:bg-sky-300 hover:bg-opacity-50 mb-2"><label onClick={onAnswerClick}  className='pr-5 cursor-pointer' ><input onChange={() => handleInputChange(index)} checked={isAnswerSelected === index} id={`checkbox_id${index}`} className='pl-4 ml-4 mr-3' type="checkbox" name="" />{answerOption.answerText}</label></div>) }
                        </div>
                    </div> 
                    <button onClick={goNextQuestion}  className={`ml-4 text-lg py-2 w-36 outline-none my-3 float-right bg-green-500 cursor-pointer'`}>Weiter</button>
                    <button onClick={goPreviousQuestion} disabled={currentQuestion === 0} className={`text-lg py-2 w-36 outline-none my-3 float-right ${currentQuestion === 0 ? 'bg-gray-500 cursor-not-allowed opacity-50' : 
                     'bg-blue-500 cursor-pointer'}`}>Zurück</button>
                </div>
            </div>
        )}
    </div>
  )
}

