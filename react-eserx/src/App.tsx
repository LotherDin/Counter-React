
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  function onClickPlus() {
    setState(state + 1);
  }
  function onClickMinus() {
    if (state > 0) {
      setState(state - 1);
    }
    
  }
  const counterStyle = {
    color: state === 0 ? 'red' : 'black',
  };

  return (
    <div>
      <button onClick={onClickPlus}>aggiungi</button>
      <span style={counterStyle}>{state}</span>
      <button onClick={onClickMinus}>diminuisci</button>
    </div>
  )
}

export default App;
