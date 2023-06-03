import React, { useState } from 'react'
import './Calculator.css';
const Calculator = () => {

    


    
      const [output, setOutput] = useState('');
    
      const display = (num) => {
        setOutput(output + num);
      };
    
      const calculate = () => {
        try {
          const outputObj = JSON.parse(output);
         setOutput(JSON.stringify(outputObj));

        } catch (error) {
          alert('Invalid expression');
        }
      };
    
      const clear = () => {
        setOutput('');
      };
    
      const del = () => {
        setOutput(output.slice(0, -1));
      };
    
  
    

  return (
    <div>
        <h3> Calculator </h3>
      <div className="container">
        
      
      <div className="calculator">
        <input type="text" placeholder="0" value={output} onChange={() => {}} />
        <button onClick={clear}>cl</button>
        <button onClick={del}>Del</button>
        <button onClick={() => display('%')}>%</button>
        <button onClick={() => display('/')}>/</button>
        <button onClick={() => display('7')}>7</button>
        <button onClick={() => display('8')}>8</button>
        <button onClick={() => display('9')}>9</button>
        <button onClick={() => display('*')}>*</button>
        <button onClick={() => display('4')}>4</button>
        <button onClick={() => display('5')}>5</button>
        <button onClick={() => display('6')}>6</button>
        <button onClick={() => display('-')}>-</button>
        <button onClick={() => display('1')}>1</button>
        <button onClick={() => display('2')}>2</button>
        <button onClick={() => display('3')}>3</button>
        <button onClick={() => display('+')}>+</button>
        <button onClick={() => display('.')}>.</button>
        <button onClick={() => display('0')}>0</button>
        <button onClick={calculate} className="equal">
          =
        </button>


</div>
        </div>
    </div>
  )
}

export default Calculator


