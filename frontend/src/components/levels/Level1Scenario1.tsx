import React, {useState} from 'react'

const questions = [
    {
        questionText: 'Was kann als Hauptstärke von einer Bank im Umgang mit den Auswirkungen von COVID-19 betrachtet werden?',
        answerOptions: [
            {answerText:'Engagement in der Gemeinschaft', isCorrect: true},
            {answerText:'Rückgang der Einlagen', isCorrect: false},
            {answerText:'Erhöhung der Betriebskosten', isCorrect: false},
            {answerText:'Rückgang der Zinseneinahmen', isCorrect: false},
        ],

    },
    {
        questionText: "Was kann als die Hauptschwäche von Bank im Kontext von COVID-19 betrachtet werden?",
        answerOptions: [
            {answerText:'Rückgang des Engagements in der Gemeinschaft', isCorrect: false},
            {answerText:'Mangelnde Vielfalt der Einnahmequellen', isCorrect: true},
            {answerText:'Erhöhung der Werbung für digitale Produkte', isCorrect: false},
            {answerText:' Erhöhung der Betriebskosten', isCorrect: false},
        ],
    },
    {
        questionText: 'Was kann als die Hauptchance betrachtet werden, die von Bank genutzt wird, um dieser Situation zu begegnen?',
        answerOptions: [
            {answerText:' Erhöhung der Betriebskosten', isCorrect: false},
            {answerText:'Erhöhung der Werbung für digitale Produkte', isCorrect: true},
            {answerText:' Rückgang des Engagements in der Gemeinschaft', isCorrect: false},
            {answerText:'Rückgang der Einnahmen', isCorrect: false},
        ],
    },
    {
        questionText: 'Was kann als die Hauptbedrohung für Bank im Umgang mit den Auswirkungen von COVID-19 betrachtet werden?',
        answerOptions: [
            {answerText: 'Erhöhung der Betriebskosten', isCorrect: true},
            {answerText: 'Rückgang des Kreditrisikos', isCorrect: false},
            {answerText: 'Rückgang der Zinseinnahmen', isCorrect: false},
            {answerText: 'Rückgang der wirtschaftlichen Aktivitäten', isCorrect: false},
        ]
    }
];

export default function Level1Scenario1() {
    const [isAnswerSelected, setAnswerSelected] = useState(null);
    const [isInputChecked, setInputChecked] = useState(false);
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputChecked(event.target.checked)
    // }
    const [showScore, setShowScore] = useState(false);
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
            // location.href = '/level1Quiz1'
            setShowScore(true);
        }
    }
  return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className='w-9/12 bg-white rounded-sm'>
            <div className='p-6'>
                <div className='grid grid-col-4 gap-6'>
                    <div className="flex items-center gap-2">
                        {/* <Countdown /> */}
                        <p className="font-bold text-3xl">1:00</p>
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

