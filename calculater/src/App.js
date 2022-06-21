
import './App.css';
import { useState } from 'react';
import Navbar  from './component/Navbar.js';

function App() {

  const [Fnumber, setFnumber] = useState('');
  const [Snumber, setSnumber] = useState('');
  const [Result, setResult] = useState('');


  const addclick = (e) => { if(Fnumber !== '' && Snumber !== '')
    setResult(parseInt(Fnumber)+ parseInt(Snumber)); };

  const minclick = (e) => { if(Fnumber !== '' && Snumber !== '')
  setResult(parseInt(Fnumber)- parseInt(Snumber)); };

  const mulclick = (e) => { if(Fnumber !== '' && Snumber !== '')
    setResult(parseInt(Fnumber)* parseInt(Snumber)); };

  const divclick = (e) => { if(Fnumber !== '' && Snumber !== '')
  setResult(parseInt(Fnumber)/ parseInt(Snumber)); };

  const modclick = (e) => { if(Fnumber !== '' && Snumber !== '')
  setResult(parseInt(Fnumber)% parseInt(Snumber)); };

  return (
    <>
    <Navbar Mynav='My Calculator App'/>
    <div className="App">

     <h1>Calculator</h1>
    <input onChange={(e) => setFnumber(e.target.value)} value={Fnumber} className="form-control" type="text" placeholder="Enter frist number " />
    <input onChange={(e) => setSnumber(e.target.value)} value={Snumber} className="form-control" type="text" placeholder="Enter second number " />

    <button onClick={addclick} type="button" className="btn btn-secondary">+</button>
    <button onClick={minclick}type="button" className="btn btn-secondary">-</button>
    <button onClick={mulclick} type="button" className="btn btn-secondary">*</button>
    <button onClick={divclick} type="button" className="btn btn-secondary">/</button>
    <button onClick={modclick} type="button" className="btn btn-secondary">%</button>
   
     
    <input onChange={(e) => setResult(e.target.value)} value={Result} readOnly className="form-control"   type="text" />

    </div>

    </>
  );
}

export default App;
