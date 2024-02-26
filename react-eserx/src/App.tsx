
import './App.css';
import { useState, useContext,createContext } from 'react';

interface CounterContextProps {
  count: number;
  incremento: () => void;
  decremento: () => void;
}

const CounterContext = createContext<CounterContextProps | undefined>(undefined);

function App() {
  const [count, setCount ] = useState(0);

 const incremento = () => {
    setCount(count + 1);
  };
  const decremento = () => {
    if(count > 0){
      setCount(count - 1);
    }
    
  };
  

  return (
    <div style={{textAlign: 'center'}}>
      <CounterContext.Provider value={{count, incremento, decremento}}>
        <Counter/>
        <Buttons/>
      </CounterContext.Provider>
      
     
    </div>
  );
}
const Counter = () => {
  const context = useContext(CounterContext);
  if(!context){
    throw new Error('Error');
  }
  const {count} = context;
  return (
    <div>
      <h1>{count}</h1>
    </div>
    
  )
}
const Buttons = () => {
  
 const context = useContext(CounterContext);
 if(!context){
   throw new Error('Error');
 }
 const {incremento, decremento} = context;
 
 return (
   <div>
     <button  onClick={incremento}>incremento</button>
     <button disabled={context.count === 0 ? true : false} onClick={decremento}>decremento</button>
   </div>
 )
}

export default App;
