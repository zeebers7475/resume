import './App.css';
import React, { useState } from "react"

function App() {

    const [mode, setMode] = useState({
      name: "Dark",
      boolean: true
  })

  const toggleLD = () => {
      if(mode.boolean === true) setMode({
          name: "Light",
          boolean: false
      })
      if(mode.boolean === false ) setMode({
          name: "Dark",
          boolean: true
      })
  }


  return (
    <div className="App">
      <header className={mode}>
      <button className={mode.name} onClick={() => toggleLD()}>{mode.name}</button>
        <h1>
          My name is Kristian Acevedo
        </h1>
      </header>
    </div>
  );
}

export default App;
