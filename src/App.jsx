/* eslint-disable no-unused-vars */
import {data} from "./data/data.js";
import { useState } from 'react'
import ImcCalc from './components/ImcCalc'
import './App.css'
import ImcTable from "./components/ImcTable";



function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault()

    console.log(height, weight)
    if (!weight || !height) return;

    console.log("executou")

  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")
  
  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
          <ImcTable/>
      )}
    </div>
  );
}

export default App
