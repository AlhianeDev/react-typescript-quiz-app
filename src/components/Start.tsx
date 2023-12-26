import React from "react";

import { Link } from "react-router-dom";

export const heading: React.CSSProperties = {

    marginBottom: "20px",

    textAlign: "center",

    fontSize: "40px",

    letterSpacing: "1px",

    color: "white"

}

export const btn: React.CSSProperties = {

    display: "block",

    padding: "8px 40px",

    width: "fit-content",

    margin: "0 auto",

    backgroundColor: "#FAD3AB",

    borderRadius: "4px",

    fontWeight: "600",

    letterSpacing: "1px",

    textDecoration: "none",

    fontSize: "18px",

    color: "black",

    cursor: "pointer"

}

function Start() {

    console.log("Start...");

    return (

        <section>

            <div className="container">

                <h2 style={ heading }>React Quiz</h2>

                <Link to={ "/quiz" } style={ btn }>Start</Link>

            </div>

        </section>

    );

}

export default Start;
