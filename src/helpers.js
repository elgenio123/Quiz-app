const shuffleAnswers = (question) =>{
    const unShufflrdAnswers = [
        ...question.incorrectAnswers,
        question.correctAnswer
    ];
    return unShufflrdAnswers
           .map(answer => ({sort : Math.random(), value: answer}))
           .sort((a,b) => a.sort - b.sort)
           .map((obj) => obj.value)
}

export default shuffleAnswers;