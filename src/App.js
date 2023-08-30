import "./App.css";
import React, {useState} from 'react';

function App() {
const [currentNum, setCurrentNum] = useState(0)

  return (
    <div className="App">
      <div className="displayCard">
        <p>{currentNum}</p>
      </div>
      <div className="button-box">
        <button onClick={()=>setCurrentNum((prev)=>prev+1)}>PRESS</button>
        <button onClick={()=>setCurrentNum(0)}>RESET</button>
      </div>
    </div>
  );
}

export default App;
