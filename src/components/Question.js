import React, { useContext } from 'react'
import { QuizContext } from '../contexts/quiz';
import Answer from './Answer';

function Question() {

const [quizState, dispatch] = useContext(QuizContext);
const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
        <div className='question'>{currentQuestion.question}</div>
        <div className='answers'>
            {
                quizState.answers.map((answer, index) =>
                    (<Answer answer={answer} key={index} 
                             index={index} 
                             onSelectAnswer={() => dispatch({type : "SELECT-ANSWER", payload: answer})}
                             currentAnswer = {quizState.currentAnswer}
                             correctAnswer = {currentQuestion.correctAnswer}/>
                    )
                )
            }
        </div>
    </div>
  )
}

export default Question