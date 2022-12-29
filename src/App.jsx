import { useState } from 'react'


function App() {

  return (
    <div className="app">
     
      <div className='wrapper'>
        <div id='display' className='calcScreen'>sd</div>
        <div id='display' className='inputScreen'>sd</div>
        <div className='container'>
          <button className='grid-item item-a' id='clear'>C</button>
          <button className='grid-item' id='divide'>/</button>
          <button className='grid-item' id='multiply'>x</button>
          <button className='grid-item' id='seven'>7</button>
          <button className='grid-item' id='nine'>9</button>
          <button className='grid-item' id='eight'>8</button>
          <button className='grid-item' id='subtract'>-</button>
          <button className='grid-item' id='four'>4</button>
          <button className='grid-item' id='five'>5</button>
          <button className='grid-item' id='six'>6</button>
          <button className='grid-item' id='add'>+</button>
          <button className='grid-item' id='one'>1</button>
          <button className='grid-item' id='two'>2</button>
          <button className='grid-item' id='three'>3</button>          
          <button className='grid-item item-a' id='zero'>0</button>
          <button className='grid-item item-b' id='equals'>=</button>          
          <button className='grid-item' id='decimal'>.</button>          
        </div>
      </div>
    </div>
  )
}

export default App
