import React from 'react'

function Answer({ answer, index,onSelectAnswer,correctAnswer,currentAnswer }) {

  const isCorectAnswer = currentAnswer && answer === correctAnswer;
  const isWrongAnswer = currentAnswer===answer && currentAnswer !== correctAnswer;
  const corectClass = isCorectAnswer ? "correct-answer": "";
  const wrongClass = isWrongAnswer ? "wrong-answer": "";
  const disabledClass = currentAnswer ? "disabled-answer": "";
  const letterMap = ['A', 'B', 'C','D'];

  return (
    <div className={`answer ${corectClass} ${wrongClass} ${disabledClass}`} onClick={() => onSelectAnswer(answer)}>
        <div className='answer-letter'>{letterMap[index]}</div>
        <div className='answer-text'>{answer}</div>
    </div>
  )
}

export default Answer