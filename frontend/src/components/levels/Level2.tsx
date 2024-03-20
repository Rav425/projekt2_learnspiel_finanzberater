import React, {useState, useEffect} from 'react'
import { IoMdTime } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import correctNotification from '../../assets/audio/correct-answer.mp3';
import wrongNotification from '../../assets/audio/wrong-answer.mp3';
import buttonNotification from '../../assets/audio/button-sound.mp3'

const questions = [
    {
        questionText: 'Anna ist die Inhaberin eines kleinen Schmuckgeschäfts in einer belebten Einkaufsstraße. Sie möchte die finanzielle Leistung ihres Unternehmens analysieren und beschließt, eine Gewinn- und Verlustrechnung (GuV) für das vergangene Geschäftsjahr zu erstellen. Anna verwendet das Gesamtkostenverfahren für die Berechnung ihrer GuV. Sie hat die folgenden Daten für das Geschäftsjahr gesammelt: Gesamter Umsatz: 150.000 Euro, Kosten für Waren: 60.000 Euro, Miete für das Ladenlokal: 24.000 Euro, Gehälter für Mitarbeiter: 40.000 Euro, Werbekosten: 10.000 Euro, Sonstige Betriebsausgaben: 8.000 Euro. ',
       
        correctAnswer: 8000, // Angenommener korrekter Antwortwert für das Beispiel
    },
    {
        questionText: "Markus ist der Geschäftsführer eines kleinen IT-Unternehmens, das sich auf die Entwicklung von Softwarelösungen für kleine und mittelständische Unternehmen spezialisiert hat. Er möchte den Cashflow seines Unternehmens für das vergangene Geschäftsjahr berechnen, um die finanzielle Leistungsfähigkeit des Unternehmens zu analysieren und zukünftige Investitionsentscheidungen zu treffen.Einzahlungen: Softwarelizenzen 300.000 Euro, kundenspezifische Entwicklungen 200.000 Euro, Sonstige 50.000 Euro; Auszahlungen: Betriebskosten 150.000 Euro, Gehälter 200.000 Euro, Entwicklungskosten 100.000 Euro, Sonstige 50.000 Euro.",
        correctAnswer: 5000, // Angenommener korrekter Antwortwert für das Beispiel
    },
    
    {
        questionText: 'Ein Unternehmen, das sein Kapital gewinnbringend anlegen möchte, erwägt die Investition von 10.000 Euro in einen Sparbrief mit einem festen Zinssatz von 3% pro Jahr über fünf Jahre und möchte die erwartete Rendite dieser Anlage berechnen',
        correctAnswer: 15, // Angenommener korrekter Antwortwert für das Beispiel
    },
    {
    questionText: 'Ein Geschäftskunde plant, 50.000 Euro in ein etabliertes Technologieunternehmen mit einer durchschnittlichen jährlichen Rendite von 7% über die letzten Jahre zu investieren, hält die Investition für 5 Jahre, minimiert Risiken und versteht, dass Vergangenheitsperformance keine Garantie, aber ein Stabilitätsindikator ist.',
        correctAnswer: 82.768, //  Angenommener korrekter Antwortwert für das Beispiel
    },
    {
    questionText: 'Ein Startup sichert sich eine 1 Million Euro VC-Investition für 8% Firmenanteile. Dies setzt den Unternehmenswert nach der Investition (Post-Money-Value) auf 12,5 Millionen Euro.',
    correctAnswer: 12500000, // m Angenommener korrekter Antwortwert für das Beispiel
},
];

export default function Level2() {
    const [isAnswerSelected, setAnswerSelected] = useState(null);
    // const [isInputChecked, setInputChecked] = useState(false);
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputChecked(event.target.checked)
    // }

    const onAnswerClick = (event) => {
        console.log(event.target.innerHTML);
    }

    const [showScore, setShowScore] = useState(false);

    const START_TIME = 600;
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
                location.href = '/startseite';
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
    const [userAnswer, setUserAnswer] = useState('');
    const correctSound = document.getElementById('correct-sound') as HTMLAudioElement
    const wrongSound = document.getElementById('wrong-sound') as HTMLAudioElement
    const buttonSound = document.getElementById('button-sound') as HTMLAudioElement
    const handleInputChange = (index: number) => {
        setAnswerSelected(index)
        // setInputChecked(true)

        if (questions[currentQuestion].correctAnswer === Number(userAnswer)) {
            toast.success('Richtige Antwort!');
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
    const [score, setScore] = useState(0); 
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
            alert('Sie haben das Ende des Quiz erreicht')
            location.href = '/level1Quiz1'
            // setShowScore(true);
        }
        if (questions[currentQuestion].correctAnswer === Number(userAnswer)) {
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
    }
    const goPreviousQuestion = () => {
        const previousQuestion = currentQuestion - 1;
        if (previousQuestion >= 0) {
            setCurrentQuestion(previousQuestion);
            // setInputChecked(false);
            setAnswerSelected(null);
        }
    }

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
                        {/* <p>{questions[currentQuestion].questionText}</p> */}
                        <p>Schreiben Sie ihnen die Ergebnislösung. </p>
                            <input
                                type="number"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                className="mt-2 border-2 border-gray-200"
                            />
                            
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