import { createContext, useReducer } from "react";
import questions from '../data';
import shuffleAnswers from "../helpers";

const initialState = {
    questions,
    currentQuestionIndex: 0,
    showResults:  false,
    correctAnswerCount : 0,
    answers : shuffleAnswers(questions[0]),
    currentAnswer: ''
};

const reducer = (state, action) => {
    
    switch (action.type){
        case "NEXT-BUTTON" :{
            const showResults = state.currentQuestionIndex === state.questions.length - 1
            const currentQuestionIndex = showResults ? 
                                         state.currentQuestionIndex : 
                                         state.currentQuestionIndex + 1
            const  answers = state.showResults
            ?[]
            :shuffleAnswers(questions[currentQuestionIndex])
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer:""
            }
        }
        case "RESTART-BUTTON" : {
            return initialState
        }
        case "SELECT-ANSWER":{

           const correctAnswerCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer?
                                 state.correctAnswerCount + 1
                                 :state.correctAnswerCount;
           
           return{
            ...state,
            correctAnswerCount,
            currentAnswer:action.payload
           }
        }
        default :
          return state;
    }
   
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) =>{
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}