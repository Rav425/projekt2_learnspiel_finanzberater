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
    {   projekte: [
        {
            titel: 'Projekt Effizienz: Sichere Investition mit garantierter Rendite',
            ziel: 'Investiere in eine bewährte Technologie zur Steigerung der Energieeffizienz in bestehenden Industrieanlagen, die sofortige Einsparungen und eine stabile Rendite verspricht.',
            investionsdetails: 'Anfangsinvestition: 800.000 Euro Erwartete Rendite: 10% pro Jahr Risikofaktoren: Sehr gering; Technologie ist bewährt und hat eine starke Marktnachfrage.Zeit bis zum Break-Even: 3 Jahre Zusätzlicher Vorteil: Staatliche Förderungen für Energieeffizienzprojekte.'
        },
        {
            titel: 'Projekt Risiko: Spekulative Investition mit hohem Gewinnpotenzial',
            ziel: 'Investiere in die Entwicklung eines innovativen, aber unerprobten neuen Produkts, das den Markt revolutionieren könnte, wenn es erfolgreich ist.',
            investionsdetails: 'Anfangsinvestition: 800.000 Euro rwartete Rendite: 50% pro Jahr (nur bei Erfolg; hohe Wahrscheinlichkeit eines Totalverlusts)Risikofaktoren: Sehr hoch; das Produkt ist noch in der Forschungsphase, und es gibt keine Garantie für technischen Erfolg oder Marktanerkennung. Zeit bis zum Break-Even: Unbestimmt; könnte innerhalb von 2 Jahren sein bei Erfolg oder nie, wenn das Produkt scheitert.'
                        },
    ],
        questionText: 'Welches Projekt empfehlen Sie dem Kunden? Projekt Effizienz, mit garantierter Rendite und geringem Risiko, oder Projekt Risiko, mit hohem Gewinnpotenzial aber auch der Gefahr eines Totalverlusts', // 5 Punkte
        answerOptions: [
            {answerText:'Projekt Effizienz', isCorrect: true},
            {answerText:'Projekt Risiko', isCorrect: false},
        ],

    },

    {
        projekte: [
            {
                titel: 'Projekt Stabilität: Expansion in bestehende Märkte',
                ziel: 'Konsolidiere die Position des Startups durch Expansion in geografische Regionen mit bekannter hoher Nachfrage nach bestehenden Produkten.',
                investionsdetails: 'Anfangsinvestition: 600.000 Euro Erwartete Rendite: 12% pro Jahr Risikofaktoren: Mittel; abhängig von der Marktdurchdringung und lokalen Wettbewerbern. Zeit bis zum Break-Even: 4 Jahre Marktbedingungen: Stabile Nachfrage nach den Produkten des Startups in den Zielregionen.'
            },
            {
                titel: 'Projekt Trend: Investition in eine Trendtechnologie',
                ziel: 'Investiere in eine neue, trendige Technologie, die potenziell eine hohe Nachfrage generieren könnte, aber derzeit noch nicht etabliert ist.',
                investionsdetails: 'Anfangsinvestition: 600.000 Euro Erwartete Rendite: 30% pro Jahr (hypothetisch, basierend auf Marktschätzungen). Risikofaktoren: Sehr hoch; das Marktpotenzial ist ungewiss, und es gibt keine Garantie für den technologischen Erfolg oder die Akzeptanz durch den Verbraucher. Zeit bis zum Break-Even: Unbestimmt; könnte sehr schnell sein bei Erfolg oder nie, wenn die Technologie nicht ankommt. Marktbedingungen: Hohe Unsicherheit und Spekulationen um die neue Technologie.'
            },

        ],
            questionText: 'Angesichts der stabilen Marktbedingungen und der bekannten hohen Nachfrage, welches Projekt würden Sie für das Startup empfehlen: das sichere und stabile Projekt Stabilität oder das unsichere, aber potenziell lukrative Projekt Trend?',

        answerOptions: [
            {answerText:'Projekt Stabilität', isCorrect: true},
            {answerText:'Projekt Trend', isCorrect: false},
        ],
    },
    
    {
        projekte: [
            {
                titel: 'Projekt GreenWave: Nachhaltige Produktlinie',
                ziel: 'Entwicklung und Markteinführung einer neuen Produktlinie, die sich auf Nachhaltigkeit und Umweltverträglichkeit konzentriert.',
                investionsdetails: 'Anfangsinvestition: 700.000 Euro. Erwartete Rendite: 15% pro Jahr Risikofaktoren: Moderat; Bedarf an Verbraucherbildung und Marktentwicklung für nachhaltige Produkte. Zeit bis zum Break-Even: 5 Jahre. Unternehmensanpassung: Passt perfekt zur Unternehmensmission, Nachhaltigkeit in den Mittelpunkt zu stellen.'
            },
            {
                titel: 'Projekt DigitalLeap: Digitale Transformation',
                ziel: 'Vollständige digitale Transformation der Geschäftsprozesse und Einführung neuer Technologien zur Steigerung der Effizienz.',
                investionsdetails: 'Anfangsinvestition: 700.000 Euro. Erwartete Rendite: 20% pro Jahr. Risikofaktoren: Hoch; erfordert umfangreiche Schulungen und möglicherweise kulturelle Veränderungen im Unternehmen. Zeit bis zum Break-Even: 4 Jahre. Unternehmensanpassung: Erfordert eine signifikante strategische Neuausrichtung, falls das Unternehmen bisher nicht technologiezentriert war.'
            },
        ],
        questionText: 'Welches Projekt passt besser zur langfristigen Vision des Unternehmens und seinen Kernkompetenzen: Projekt GreenWave mit dem Fokus auf Nachhaltigkeit oder Projekt DigitalLeap, das eine umfassende digitale Transformation verlangt?',

        answerOptions: [
            {answerText:'Projekt GreenWave', isCorrect: true},
            {answerText:'Projekt DigitalLeap', isCorrect: false},
        ],
    },
    
    {
        projekte: [
            {
                titel: 'Projekt SafeHarbor: Risikoarme Expansion',
                ziel: 'Erweiterung der Geschäftstätigkeit in benachbarte Märkte mit ähnlichen kulturellen und wirtschaftlichen Bedingungen, um Risiken zu minimieren.',
                investionsdetails: 'Anfangsinvestition: 300.000 Euro. Erwartete Rendite: 8% pro Jahr Risikofaktoren: Niedrig; gut verstandene Märkte und niedrige Einstiegsbarrieren.. Zeit bis zum Break-Even: 3 Jahre.'
            },
            {
                titel: 'HighSeas: Risikoreiche, globale Expansion',
                ziel: 'Aggressives Vorstoßen in globale Märkte ohne vorherige Erfahrung oder etablierte Beziehungen, um schnell zu expandieren.',
                investionsdetails: 'Anfangsinvestition: 1 Million  Euro. Erwartete Rendite: 25% pro Jahr, wenn erfolgreich. Risikofaktoren: Sehr hoch; unbekannte Märkte, hohe Einstiegsbarrieren, und potenzielle kulturelle Missverständnisse. Zeit bis zum Break-Even: 5 Jahre oder länger.'
            },
        ],
        questionText: 'Angesichts der aktuellen wirtschaftlichen Unsicherheiten und des Risikoprofils des Unternehmens, welche Expansion würden Sie empfehlen: die risikoarme, wohlüberlegte Expansion durch Projekt SafeHarbor oder die risikoreiche, aggressive globale Expansion durch Projekt HighSeas?',

        answerOptions: [
            {answerText:'Projekt SafeHarbor', isCorrect: true},
            {answerText:'Projekt HighSeas', isCorrect: false},
        ],
    },

    {
        projekte: [
            {
                titel: 'Projekt DataGuard: Verstärkung der Datensicherheit',
                ziel: 'Implementierung fortschrittlicher Sicherheitssysteme und Datenschutzprotokolle, um Kundendaten zu schützen und das Vertrauen der Nutzer zu stärken.',
                investionsdetails: 'Anfangsinvestition: 400.000 Euro. Erwartete Rendite: 10% pro Jahr. Risikofaktoren: Mittel; erfordert kontinuierliche Investitionen, um mit den neuesten Sicherheitstechnologien Schritt zu halten. Zeit bis zum Break-Even: 4 Jahre. •	Langfristiger Vorteil: Stärkt das Kundenvertrauen und die Markenloyalität, was zu nachhaltigem Unternehmenswachstum führt.'
            },
            {
                titel: 'TrendChaser: Investition in flüchtige Technologietrends',
                ziel: 'Schnelle Adaption und Investition in aufkommende Technologietrends ohne gründliche Marktanalyse oder Sicherheitsbewertung.',
                investionsdetails: 'Anfangsinvestition: 400.000 Euro. Erwartete Rendite: Bis zu 30% pro Jahr, wenn der Trend erfolgreich ist. Risikofaktoren: Sehr hoch; Trends können schnell vergehen, und Investitionen können sich als nutzlos erweisen, wenn der Markt sich ändert. Zeit bis zum Break-Even: Unbestimmt; stark abhängig vom Erfolg des Trends.'
            },
        ],
        questionText: 'In einer Zeit, in der Datensicherheit und der Schutz von Kundendaten von höchster Bedeutung sind, welche Strategie empfehlen Sie: die Investition in robuste Sicherheitstechnologien durch Projekt DataGuard oder das Verfolgen flüchtiger Technologietrends durch Projekt TrendChaser?',

        answerOptions: [
            {answerText:'Projekt DataGuard', isCorrect: true},
            {answerText:'Projekt TrendChaser', isCorrect: false},
        ],
    },

    
];

export default function Level3() {
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

    const currentUser = useAppSelector((state: RootState) => state.user.currentUser)

    // end the quiz
    const endQuiz = () => {
        alert('Der Quiz ist beendet!')

        const userId = currentUser?.benutzer_ID;

        updateUserProgress(userId, score);
        // location.href = '/startseite';

    }
    
    // end the quiz
    // const endQuiz = () => {
    //     alert('Der Quiz ist beendet!')
    //     const {state} = this;

    //     const playerStats = {
    //         score: state.score,
    //         questions: state.questions,
    //         correctAnswers: state.correctAnswers,
    //         wrongAnswers: state.wrongAnswers
    //     };
    //     console.log(playerStats);
    //     location.href = '/startseite';

    // }

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
                        <div className="relative pt-1 mb-4">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style={{width: `${((currentQuestion + 1) / questions.length ) * 100}%`}} className="shadow-none flex flex-col justify-center text-center whitespace-nowrap text-white bg-orange-500 rounded"></div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <div className="flex gap-2">
                            {questions[currentQuestion].projekte.map((projekt, index) => (
        <div key={index} className="border-2 border-gray-200 p-4 mb-2">
            <h1 className="text-xl font-bold">{projekt.titel}</h1>
            <p>{projekt.ziel}</p>
            <p>{projekt.investionsdetails}</p>
        </div>
    ))}
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

