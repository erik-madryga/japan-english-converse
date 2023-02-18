import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import DrygaModal from './Components/DrygaModal'

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='DrygaModal'>
          <button onClick={() => setShow(true)}>Guess What?</button>
          <DrygaModal onClose={() => setShow(false)} show={show}/>
        </div>
      </header>
    </div>
  );
}

export default App;
