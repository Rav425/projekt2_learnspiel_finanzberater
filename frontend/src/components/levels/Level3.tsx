import React, { useEffect, useState } from 'react'
import { IoMdTime } from 'react-icons/io'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import correctNotification from '../../assets/audio/correct-answer.mp3';
import wrongNotification from '../../assets/audio/wrong-answer.mp3';
import buttonNotification from '../../assets/audio/button-sound.mp3'

// const szenarien = [
//     {
//         projekte: [
//             {
//                 titel: 'Projekt Effizienz: Sichere Investition mit garantierter Rendite',
//                 ziel: 'Investiere in eine bewährte Technologie zur Steigerung der Energieeffizienz in bestehenden Industrieanlagen, die sofortige Einsparungen und eine stabile Rendite verspricht.',
//                 investionsdetails: 'Anfangsinvestition: 800.000 Euro Erwartete Rendite: 10% pro Jahr Risikofaktoren: Sehr gering; Technologie ist bewährt und hat eine starke Marktnachfrage.Zeit bis zum Break-Even: 3 Jahre Zusätzlicher Vorteil: Staatliche Förderungen für Energieeffizienzprojekte.'
//             },
//             {
//                 titel: 'Projekt Risiko: Spekulative Investition mit hohem Gewinnpotenzial',
//                 ziel: 'Investiere in die Entwicklung eines innovativen, aber unerprobten neuen Produkts, das den Markt revolutionieren könnte, wenn es erfolgreich ist.',
//                 investionsdetails: 'Anfangsinvestition: 800.000 Euro rwartete Rendite: 50% pro Jahr (nur bei Erfolg; hohe Wahrscheinlichkeit eines Totalverlusts)Risikofaktoren: Sehr hoch; das Produkt ist noch in der Forschungsphase, und es gibt keine Garantie für technischen Erfolg oder Marktanerkennung. Zeit bis zum Break-Even: Unbestimmt; könnte innerhalb von 2 Jahren sein bei Erfolg oder nie, wenn das Produkt scheitert.'
//             },
//         ],
//         questionText: 'Welches Projekt empfehlen Sie dem Kunden? Projekt Effizienz, mit garantierter Rendite und geringem Risiko, oder Projekt Risiko, mit hohem Gewinnpotenzial aber auch der Gefahr eines Totalverlusts?',

//         answerOptions: [
//             {answerText:'Projekt Effizienz', isCorrect: true},
//             {answerText:'Projekt Risiko', isCorrect: false},
//         ],
//     },

//     {
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
//         questionText: 'Angesichts der stabilen Marktbedingungen und der bekannten hohen Nachfrage, welches Projekt würden Sie für das Startup empfehlen: das sichere und stabile Projekt Stabilität oder das unsichere, aber potenziell lukrative Projekt Trend?',

//         answerOptions: [
//             {answerText:'Projekt Stabilität', isCorrect: true},
//             {answerText:'Projekt Trend', isCorrect: false},
//         ],
//     },

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
    }
// ];

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
    const handleInputChange = (index: number) => {
        setAnswerSelected(index)
        // setInputChecked(true)

        if (szenarien[currentQuestion].answerOptions[index].isCorrect) {
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

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const goNextQuestion = () => {
        playButtonSound();
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < szenarien.length) {
            setCurrentQuestion(nextQuestion);
            // setInputChecked(false);
            setAnswerSelected(null);
        }
        else {
            alert('Sie haben das Ende des Quiz erreicht')
            location.href = '/startseite';
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
    // const endQuiz = () => {
    //     alert('Der Quiz ist beendet!')
    //     const {state} = this;

    //     const playerStats = {
    //         score: state.score,
    //         szenarien: state.szenarien,
    //         correctAnswers: state.correctAnswers,
    //         wrongAnswers: state.wrongAnswers
    //     };
    //     console.log(playerStats);
    //     location.href = '/startseite';

    // }


   

    

  return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        {showScore ? (
            <div className="">Du hast 1 von {szenarien}</div>
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
                            <div><span className="text-2xl font-bold mr-2">Frage</span><span className='text-2xl font-bold'>{currentQuestion + 1}</span> von <span className='text-1xl font-semibold'>{szenarien.length}</span></div>
                        </div>
                        <div className="relative pt-1 mb-4">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style={{width: `${((currentQuestion + 1) / szenarien.length ) * 100}%`}} className="shadow-none flex flex-col justify-center text-center whitespace-nowrap text-white bg-orange-500 rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-col-2 gap-3">projekte Inhaltsblock
                        <div className="">
                        {/* {szenarien[currentQuestion].projekte.map((projekt, index) => 
    // <div key={index}>
    //     <p className='font-bold text-2xl'>{projekt.titel}</p>
    //     <p>{projekt.ziel}</p>
    //     <p>{projekt.investionsdetails}</p>
    // </div>
)} */}
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-gray-300 rounded-sm w-2/4">
                            <p className='p-4'>{szenarien[currentQuestion].projekte}</p>
                            {/* {szenarien[currentQuestion].answerOptions.map((option, index) => 
                                 <p key={index} className='p-4'>{option.projekte}</p>
                             )}       */}
                        </div>
                        <div className="block w-2/4">
                            {szenarien[currentQuestion].answerOptions.map((answerOption, index) => <div className="border-2 border-gray-200 pl-2 py-3 hover:bg-sky-300 hover:bg-opacity-50 mb-2"><label onClick={onAnswerClick}  className='pr-5 cursor-pointer' ><input onChange={() => handleInputChange(index)} checked={isAnswerSelected === index} id={`checkbox_id${index}`} className='pl-4 ml-4 mr-3' type="checkbox" name="" />{answerOption.answerText}</label></div>) }
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