import { useState } from 'react'

function App() {
const [display, setDisplay] = useState('0')
const [total, setTotal] = useState('')

const handleNumber = (e) => {
  const number = e.target.textContent  
  if (display === '0') {
    setDisplay(number)
  } else {
    setDisplay(display + number)
  } 
}

const handleOperation = (e) => {
  const operator = e.target.textContent  
  if (total) {    
    setDisplay(total + ' ' + operator + ' ')    
  } else{
    setDisplay(display + ' ' + operator + ' ')
  } if (display == '0') {
    setDisplay(operator)
  } 
}

const handleCalc = () => {
  setTotal(eval(display))   
}

const handleClear = () => {
  setTotal('')
  setDisplay('0')
}

const handleDecimal = () => {
 const arr = display.split(' ') 
 const lastNumb = arr[arr.length - 1]
  if (!lastNumb.includes('.')){
    setDisplay(display + '.')
  }
}

  return (
    <div className="app">     
      <div className='wrapper'>
        <div id='display' className='inputScreen'>{display}</div>
        <div id='display' className='calcScreen'>{total}</div>
        <div className='container'>
          <button className='grid-item item-a' id='clear' onClick={handleClear} >C</button>
          <button className='grid-item' id='divide' onClick={handleOperation} >/</button>
          <button className='grid-item' id='multiply' onClick={handleOperation} >*</button>
          <button className='grid-item' id='seven' onClick={handleNumber} >7</button>
          <button className='grid-item' id='eight' onClick={handleNumber} >8</button>
          <button className='grid-item' id='nine' onClick={handleNumber} >9</button>
          <button className='grid-item' id='subtract' onClick={handleOperation} >-</button>
          <button className='grid-item' id='four' onClick={handleNumber} >4</button>
          <button className='grid-item' id='five' onClick={handleNumber} >5</button>
          <button className='grid-item' id='six' onClick={handleNumber} >6</button>
          <button className='grid-item' id='add' onClick={handleOperation} >+</button>
          <button className='grid-item' id='one' onClick={handleNumber} >1</button>
          <button className='grid-item' id='two' onClick={handleNumber} >2</button>
          <button className='grid-item' id='three' onClick={handleNumber} >3</button>          
          <button className='grid-item item-a' id='zero' onClick={handleNumber} >0</button>
          <button className='grid-item item-b' id='equals' onClick={handleCalc} >=</button>          
          <button className='grid-item' id='decimal' onClick={handleDecimal} >.</button>          
        </div>
      </div>
    </div>
  )
}

export default App
