import { btn, heading } from "./Start";

import { QuesionsType, StateType } from "./Types";

type QuizBoxProps = {

    state: StateType;

    index: number;

    question: QuesionsType;

    handleClick: (numberOfAnswer: number) => void;

    handleNext: () => void;

}

export const scoreStyle: React.CSSProperties = {

    textAlign: "center",

    letterSpacing: "1px",

    fontSize: "24px",

    color: "white"

}

const quizBox: React.CSSProperties = {

    width: "600px",

    maxWidth: "100%",

    padding: "20px",

    margin: "20px auto",

    backgroundColor: "#EBFDFE",

    borderRadius: "4px"

}

const quesionsCounter: React.CSSProperties = {

    marginBottom: "10px",

    textAlign: "center",

    letterSpacing: "1px",

    fontSize: "18px"

}

const questionStyle: React.CSSProperties = {

    marginBottom: "10px",

    letterSpacing: "1px",

    lineHeight: 1.7

}

const questionBtn: React.CSSProperties = {

    width: "100%",

    height: "40px",

    marginBottom: "10px",

    border: "none",

    borderRadius: "4px",

    fontSize: "17px",

    letterSpacing: "1px",

    color: "white",

    cursor: "pointer"

}

function QuizBox({ state, index, question, handleClick, handleNext }: QuizBoxProps) {

    console.log("QuizBox...")

    return (

        <section>

            <div className="container">

                <h2 style={ heading }>React Quiz</h2>

                <h3 style={ scoreStyle }>Score: { state.score }</h3>

                <div style={ quizBox }>
                
                    <h4 style={ quesionsCounter }>Question {index + 1} / 5</h4>

                    <h3 style={ questionStyle }>{ question.quesion }</h3>

                    <button disabled={ state.isClicked } onClick={ () => handleClick(1) }
                    
                        style={{ backgroundColor: state["answer-1"], ...questionBtn }}>
                        
                        { question["answer-1"] }
                        
                    </button>

                    <button disabled={ state.isClicked } onClick={ () => handleClick(2) }
                    
                    style={{ backgroundColor: state["answer-2"], ...questionBtn }}>
                        
                        { question["answer-2"] }
                        
                    </button>

                    <button disabled={ state.isClicked } onClick={ () => handleClick(3) }
                    
                    style={{ backgroundColor: state["answer-3"], ...questionBtn }}>
                        
                        { question["answer-3"] }
                        
                    </button>

                    <button disabled={ state.isClicked } onClick={ () => handleClick(4) }
                    
                    style={{ backgroundColor: state["answer-4"], ...questionBtn }}>
                        
                        { question["answer-4"] }
                        
                    </button>

                </div>

                { state.isClicked && <button 
                
                    onClick={ handleNext } style={ btn }
                
                > Next </button> }

            </div>

        </section>
   
    );

}

export default QuizBox
