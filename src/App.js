import React from "react";

import CVInput from "./components/CVInput";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Curriculum vitae</p>
      </header>
      <div>
        <CVInput />
      </div>
    </div>
  );
}

export default App;
