import { useReducer, useState } from "react";

import { QuesionsType, StateType } from "./Types";

import QuizBox, { scoreStyle } from "./QuizBox";

import { Link } from "react-router-dom";

import { btn } from "./Start";

type QuizPropsType = {

    questions: QuesionsType[];

}

type CorrectType = {

    type: "correct";

    payload: {correct: number};

}

type IncorrectType = {

    type: "incorrect";

    payload: {correct: number, incorrect: number};

}

type ResetType = {

    type: "reset";

}

type ActionType = CorrectType | IncorrectType | ResetType;

const initialState = {

    "answer-1": "#69B5C9",

    "answer-2": "#69B5C9",

    "answer-3": "#69B5C9",

    "answer-4": "#69B5C9",

    isClicked: false,

    score: 0

}

const reducer = (state: StateType, action: ActionType) => {

    switch (action.type) {

        case "correct":

            return { 
                
                ...state,
                
                [`answer-${action.payload.correct}`]: "green",

                isClicked: true,

                score: state.score + 1
            
            };

        case "incorrect":

            return { 
                
                ...state,
                
                [`answer-${action.payload.correct}`]: "green", 

                [`answer-${action.payload.incorrect}`]: "red",

                isClicked: true,

                score: state.score
            
            };

        case "reset":

            return {...initialState, score: state.score};
    
        default:

            return state;

    }

}

function Quiz({ questions }: QuizPropsType) {

   console.log("Quiz..."); 

    const [index, setIndex] = useState(0);

    const question = questions[index];

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(question);

    const handleClick = (numberOfAnswer: number) => {

        console.log("handleClick...");

        const answersObj = {
        
            "answer-1": question["answer-1"],
        
            "answer-2": question["answer-2"],
        
            "answer-3": question["answer-3"],
        
            "answer-4": question["answer-4"],
            
        }

        const prop = `answer-${ numberOfAnswer }` as keyof typeof answersObj;

        const selectedAnswer = question[prop];

        const rightAnwser = question["right-anwser"];

        if (selectedAnswer === rightAnwser) {

            dispatch({ type: "correct", payload: { correct: numberOfAnswer } });

        } else {

            const answers = Object.keys(answersObj);

            let numberOfRightAnswer = 1;

            for (let index = 0; index < answers.length; index++) {

                const prop = answers[index] as keyof typeof answersObj;

                if (answersObj[prop] === rightAnwser) numberOfRightAnswer = index + 1;
                
            }

            dispatch({ 
                
                type: "incorrect", 
                
                payload: { correct: numberOfRightAnswer, incorrect: numberOfAnswer }
            
            });

        }

    }

    const handleNext = () => {

        console.log("handleNext...");

        dispatch({ type: "reset" });

        setIndex(prevIndex => prevIndex + 1);

    }

    if (index === questions.length) {

        return (

            <section>
                
                <h3 style={ { ...scoreStyle, marginBottom: "10px" } }>Score: { state.score }</h3>

                <Link to={"/"} style={ btn }>
                    
                    Re-pass The Quiz
                    
                </Link>
                
            </section>

        )

    } else {

        return <QuizBox 
        
            state={ state }
            
            index={ index }
            
            question={ question }
            
            handleClick={ handleClick }

            handleNext={ handleNext }
            
        />

    }

}

export default Quiz;
