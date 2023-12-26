import { useEffect, useReducer } from "react";

import axios from "axios";

import Quiz from "./Quiz";

import { QuesionsType } from "./Types";

type StateType = {

    loading: boolean;

    error: string;

    quesions: QuesionsType[];

}

type SuccessActionType = {

    type: "Success";

    payload: QuesionsType[];

}

type FailedActionType = {

    type: "Failed";

}

type ActionType = SuccessActionType | FailedActionType;

const initialState = {

    loading: true,

    error: "",

    quesions: []

}

const reducer = (state: StateType, action: ActionType) => {

    switch (action.type) {

        case "Success":
            
            return {

                loading: false,

                error: "",
                
                quesions: action.payload
            
            }

        case "Failed":
            
            return {

                loading: false,

                error: "Errorrrrr!",
                
                quesions: []
            
            }
    
        default:

            return state;

    }

}

function Questions() {

    console.log("Questions...");

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log( "Loading: " + state.loading);

    useEffect(() => {

        console.log("useEffect...");

        axios.get<QuesionsType[]>("http://localhost:3000/quesions")

        .then(response => {

            console.log(response);

            dispatch({ type: "Success", payload: response.data })

        }).catch(error => {

            console.log(error);

            dispatch({ type: "Failed" });

        });

    }, []);
    
    if (state.loading) {

        return <div>"Loading..."</div>

    } else if (state.error) {

        return <div>{ state.error }</div>

    } else {

        return <Quiz questions={ state.quesions } />

    }

}

export default Questions;
