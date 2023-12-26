import { Route, Routes } from "react-router-dom";

import Start from "./components/Start";

import Questions from "./components/Questions";

function App() {

  console.log("App...");
  
  return (

    <div className="App">

      <Routes>

        <Route path="/" element={ <Start /> } />

        <Route path="/quiz" element={ <Questions /> } />

      </Routes>

    </div>

  );

}

export default App;
