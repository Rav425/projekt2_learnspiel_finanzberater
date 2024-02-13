import React, { useState } from 'react';
// import { useTimer } from 'react-timer-hook';
// import Countdown from '../countdown/Countdown';
import { MdOutlineTimer } from 'react-icons/md';    

export default function Level1Quiz1() {
    // Provisorische Fragen um für Textzwecke
    const questions = [
        {
            questionText: 'Welche spezifischen Kennzahlen und Indikatoren würden Sie analysieren, um die aktuelle finanzielle Situation des Unternehmens im Kontext der steigenden Inflation zu verstehen?',
            answerOptions: [
                {answerText:'Umsatzwachstum und Marktführerschaft'},
                {answerText:'Liquiditätsreserven und Verschuldungsgrad'},
                {answerText:'Mitarbeiterzufriedenheit und Betriebskosten'},
                {answerText:'Kundenzufriedenheit Innovationskraft'},
            ],
        },
        {
            questionText: "Welche Geschäftsbereiche oder Vermögenswerte des Unternehmens könnten besonders von Inflationbetroffen sein und wie würden Sie diese Risiken quantifizieren?",
            answerOptions: [
                {answerText:'Kurzfristige Verbindlichkeiten und Warenbestände'},
                {answerText:'Immobilien und langfristige Schulden'},
                {answerText:'Kundenbeziehung und Markenwert'},
                {answerText:'Mitarbeiterengagement und Schulungsprogramm'},
            ],
        },
        {
            questionText: 'Welche konkreten Absicherungsstrategien würden Sie dem Geschäftsführer vorschlagen, um das Unternehmen vor den Auswirkungen der Inflation zu schätzen?',
            answerOptions: [
                {answerText:'Erhörung der langfristigen Schulden'},
                {answerText:'Investition in inflationsgeschützte Wertpapiere'},
                {answerText:'Beibehaltung der aktuellen Finanzstruktur'},
                {answerText:'Expansion in neue, stabile Märkte'},
            ],
        },
    ];
    // const [isButtonClickable, setIsButtonClickable] = useState(false);
    const [isAnswerSelected, setAnswerSelected] = useState(null);
    const [isInputChecked, setInputChecked] = useState(false);
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputChecked(event.target.checked)
    // }
    const handleInputChange = (index: number) => {
        setAnswerSelected(index)
        setInputChecked(true)
    }
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const goNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setInputChecked(false);
            setAnswerSelected(null);
        }
        else {
            alert('Quiz beendet')
            location.href = '/level1Scenario1'
        }
    }
  return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className='w-9/12 bg-white rounded-sm'>
            <div className='p-6'>
                <div className='grid grid-col-4 gap-6'>
                    <div className="flex items-center gap-2">
                        {/* <Countdown /> */}
                        <MdOutlineTimer size={28} />
                        <p className="font-bold text-3xl">00:30</p>
                        <span>für diese Frage</span>
                    </div>
                    <div className="flex justify-end">
                    <button className='border'>Zurück zur Theorie</button>
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
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => <div className="border-2 border-gray-200 pl-2 py-3 hover:bg-sky-300 hover:bg-opacity-50 mb-2"><input onChange={() => handleInputChange(index)} checked={isAnswerSelected === index} id={`checkbox_id${index}`} className='pl-4' type="checkbox" name="" /><label className='pl-5 cursor-pointer' >{answerOption.answerText}</label></div>) }
                    </div>
                </div> 
                <button onClick={goNextQuestion} disabled={!isInputChecked} className={`text-lg py-2 w-36 outline-none my-3 float-right ${isInputChecked ? 'bg-blue-500 cursor-pointer' : 'bg-blue-500 cursor-not-allowed opacity-50'}`}>Weiter</button>
            </div>
        </div>
    </div>
  )
}

