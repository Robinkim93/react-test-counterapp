import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="container">
      <div className="number">
        <p>{counter}</p>
      </div>
      <div className="button__container">
        <button
          className="plustbutton"
          disabled={disabled}
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <button
          className="minustbutton"
          disabled={disabled}
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
      </div>
      <div className="onoffbutton">
        <button className="switchbutton" onClick={() => setDisabled(!disabled)}>
          on/off
        </button>
      </div>
    </div>
  );
}

export default App;
