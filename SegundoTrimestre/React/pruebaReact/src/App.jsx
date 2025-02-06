import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
var miDiv=<div> Esto es un div </div>
var nombres = ["Marta", "Ramon", "Ana", "Rosa", "Moises","Teresa"]
var [numeroPulsaciones, setnumeroPulsaciones] = useState(0);
var miLista;
var listaNombres = nombres.map((nombre)=>{
  if(nombre[0]==="M"){
  return <li>{nombre}</li>
  }
})


function tratarEvento(){
  setnumeroPulsaciones(numeroPulsaciones+1)
} 
return (
  <>
  {numeroPulsaciones}
  <button onClick={tratarEvento}>Pulsar</button>
  </>
)
}
export default App
