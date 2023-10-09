import { useState } from 'react';
import './App.css';

import Keyboard from "./Components/Keyboard";
import Dispaly from './Components/Dispaly';
function App() {
  const [input,setInput]=useState("");
  return (
    <div className="App">
      <Dispaly value={input}/>
      <Keyboard setInput={setInput}/>
    </div>
  );
}

export default App;
