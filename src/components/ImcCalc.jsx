import "./ImcCalc.css";
const ImcCalc = () => {
  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="forms-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 70,5"
            />
          </div>
              </div>
              <div className="action-control">
                  <button>calcular</button>
                  <button>limpar</button>
              </div>
      </form>
    </div>
  );
};

export default ImcCalc;
