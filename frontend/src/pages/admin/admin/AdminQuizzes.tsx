import React from 'react'
import Sidebar from '../../../components/Sidebar'

export default function AdminQuizzes() {
    // const quizzesReducer = useSelector((state) => state.quizzesReducer);
    // const [quizzes, setQuizzes] = useState(quizzesReducer.quizzes);
  return (
    <div className='flex'>
        <Sidebar />
        <div className="ml-3 w-3/4 p-2">
          <h2 className='font-bold '>Quizzes</h2>
          {/* {quizzes ? ( */}
            {/* quizzes.length === 0  ? ( */}
              <h3>Es sind keine Quizz vorhanden. Fügen Sie ein hinzu!</h3>
            {/* ) : ( */}
            {/* //   quizzes.map((quiz, index) => { */}
                {/* <div className="mt-1.5 border-gray-400 justify-center" key={index}> */}
                <div className="mt-1.5 border rounded-md p-3 border-gray-400 justify-center">
                  {/* <div className="font-bold">{quiz.title}</div> */}
                  <div className="font-bold">SWOT-Analyse</div>
                  {/* <span className='text-gray-300'>{quiz.category.title}</span> */}
                  <span className='text-gray-300'>Risikomanagement</span>
                  <p className='mb-4'>Beschreibung des Quiz</p>

                  <div className="flex flex-wrap m-1.5">
                    <div className="my-0 mx-1 h-9 w-24 rounded-md text-center text-white bg-green-500">
                    {`Fragen`}
                    </div>
                    <div className="my-0 mx-1 h-9 w-24 p-0.5 rounded-md border border-gray-600 text-center ">
                    {/* {`Punkte: ${quiz.numOfQuestions * 5}`} */}
                    Punkte: 100
                    </div>
                    <div className="my-0 mx-1 h-9 w-24 p-0.5 rounded-md border border-gray-600 text-center">
                    {/* {`${quiz.numOfQuestions} Fragen`} */}
                    10 Fragen
                    </div>
                    <div className="my-0 mx-1 h-9 w-24 rounded-md text-center text-white bg-green-500" onClick={() =>
                              updateQuizHandler(quiz.title, quiz.quizId)
                            }>{`Ändern`}</div>
                  </div>
                </div>
            {/* //   }) */}
            {/* ) */}
          {/* ) : ()} */}

          {/* Neuen Quiz hinzufügen */}
          <button
          className="block w-1/5 my-5 mx-auto text-white bg-green-400"
        //   onClick={addNewQuizHandler}
        >
          Add Quiz
        </button>
        </div>
    </div>
  )
}
