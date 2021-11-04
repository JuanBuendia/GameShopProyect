import './App.css';
import { useState } from 'react';
import Listado from './componenteLista';

function App(){
  const [nombrePersona, setNombrePersona] = useState('');
  const saludarFunction=()=>{
    let aux = document.getElementById('txtName').value;
    alert("Hola " + aux);
    console.log("OK")
  }
  return (
    <div className="App">
      <h1>HOLA MUNDO</h1>      
      <input type="text" id="txtName" onChange={e=> setNombrePersona(e.target.value)}/>
      <button id="btnSaludo" onClick={saludarFunction}>Saludar</button>
      <p>{nombrePersona}</p>
      <Listado></Listado>
    </div>
  );
}

export default App;
