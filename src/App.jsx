import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('');
  const [calculation, setCalculation] = useState([]);


  const calculate = (calcArray) => {
    let calculation = [...calcArray];

    // multiplication & division 
    for (let i = calculation.length - 1; i >= 0; i--) {
      if (calculation[i] === '*' || calculation[i] === '/') {
        let first_num = Number(calculation[i - 1]);
        let second_num = Number(calculation[i + 1]);
        let result;
        if (calculation[i] === '*') {
          result = first_num * second_num;
        } else if (calculation[i] === '/') {
          result = first_num / second_num;
        }
        calculation.splice(i - 1, 3, result);
        i--; 
      }
    }

    // addition & subtraction
    let calc_len = calculation.length;
    while (calc_len > 1){
      let first_num = Number(calculation[0]);
      let second_num = Number(calculation[2]);
      let result;
      if(calculation[1] === '+') {
        result = first_num + second_num;
      } else if (calculation[1] === '-') {
        result = first_num - second_num;
      } else {
          break;
      }
      calculation.splice(0, 3, result);
      calc_len = calculation.length;
    }
    
        setInput(calculation[0].toString());


  }


  const handleNumberClick = (number) => {
    switch (number) {
      case 1:
        setInput(input + '1');
        break;
      case 2:
        setInput(input + '2');
        break;
      case 3:
        setInput(input + '3');
        break;
      case 4:
        setInput(input + '4');
        break;
      case 5:
        setInput(input + '5');
        break;
      case 6:
        setInput(input + '6');
        break;
      case 7:
        setInput(input + '7');
        break;
      case 8:
        setInput(input + '8');
        break;
      case 9:
        setInput(input + '9');
        break;
      case 0:
        setInput(input + '0');
        break;
      case '+':
        setCalculation([...calculation, Number(input),'+']);
        setInput('');
        break;
      case '-':
        setCalculation([...calculation, Number(input),'-']);
        setInput('');
        break;
      case '*':
        setCalculation([...calculation, Number(input),'*']);
        setInput('');
        break;
      case 'C':
        setInput('');
        setCalculation([]);
        break;
      case '/':
        setCalculation([...calculation, Number(input),'/']);
        setInput('');
        break;
      case '=':
        if (input.trim() !== '') {
          const updatedCalculation = [...calculation, Number(input)];
          setCalculation(updatedCalculation);
          calculate(updatedCalculation);
          setCalculation([]);
        }
        break;
      default:
        break;

    }
  }

  return (
    <main className="App">
      <div className="calculator">
        <section className='input_container'>
          <input 
          type="number" 
          className='input' 
          value={input} 
          onChange={e => setInput(e.target.value)}
          />
        </section>
        <section className="button_container">
          <section className='numbers'>
            <button className='number_btn' onClick={() => handleNumberClick(7)}>7</button>
            <button className='number_btn' onClick={() => handleNumberClick(8)}>8</button>
            <button className='number_btn' onClick={() => handleNumberClick(9)}>9</button>
            <button className='number_btn' onClick={() => handleNumberClick(4)}>4</button>
            <button className='number_btn' onClick={() => handleNumberClick(5)}>5</button>
            <button className='number_btn' onClick={() => handleNumberClick(6)}>6</button>
            <button className='number_btn' onClick={() => handleNumberClick(1)}>1</button>
            <button className='number_btn' onClick={() => handleNumberClick(2)}>2</button>
            <button className='number_btn' onClick={() => handleNumberClick(3)}>3</button>
            <button className='number_btn' onClick={() => handleNumberClick('C')}>C</button>
            <button className='number_btn' onClick={() => handleNumberClick(0)}>0</button>
            <button className='number_btn' onClick={() => handleNumberClick('=')}>=</button>
          </section>
          <section className='operations'>
            <button className='operation_btn' onClick={() => handleNumberClick('+')}>+</button>
            <button className='operation_btn' onClick={() => handleNumberClick('-')}>-</button>
            <button className='operation_btn' onClick={() => handleNumberClick('*')}>*</button>
            <button className='operation_btn' onClick={() => handleNumberClick('/')}>/</button>
          </section>
        </section>
      </div>
    </main>
  )
}

export default App
