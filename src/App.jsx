import { data } from "./data/data.js";

import { useState } from "react";

import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

import "./App.css";

function App() {
  const calcImc = (e) => {
    e.preventDefault();

    // console.log(height, weight)
    // if (!weight || !height) return;

    console.log("executou");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable />}
    </div>
  );
}

export default App;
