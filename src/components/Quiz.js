import React, { useContext } from 'react'
import { QuizContext } from '../contexts/quiz'
import '../index.css'
import Question from './Question';

const Quiz = () =>{

    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <div className='quiz'>
            {
                !quizState.showResults ?
                <>
                   <div className='score'>
                        Question { quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                   </div>
                   <Question />
                   <div className='next-button' onClick={() => {dispatch({type : "NEXT-BUTTON"})}}>Next Button</div>
                </>:
                <div className='results'>
                    <div className='congratulations'>Congratulations</div>
                    <div className='results-info'>
                        <div>You have completed the quiz </div>
                        <div>You ave got {quizState.correctAnswerCount} of {quizState.questions.length} right.</div>
                    </div>
                    <div className='next-button restart-button' onClick={() => {dispatch({type : "RESTART-BUTTON"})}}>Restart</div>
                </div>
            }
        </div>
    )
}

export default Quiz