import { useState, useEffect } from "react";
import "./App.css";
import ProductService from "./services";
import pattern from "/src/assets/pattern-divider-desktop.svg";
import dice from "/src/assets/icon-dice.svg";

const advice = new ProductService();
function App() {
  const [adviceArr, setAdviceArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newAdvice, setNewAdvice] = useState(false);

  useEffect(() => {
    setLoading(true);
    advice.fetchAdvice().then((res) => {
      if (res && res.response.ok) {
        setAdviceArr([res.advice]);
      }
    });
    setLoading(false);
    setNewAdvice(false);
  }, [newAdvice]);
  return (
    <div className="App">
      <div className="main-wrapper">
        {!loading ? (
          <div className="card">
            {adviceArr.map((item) => (
              <div className="card-advice">
                <h5>{`ADVICE #${item.id}`}</h5>
                <h3>{item.advice}</h3>
              </div>
            ))}
            <img src={pattern} className="divider" alt="pattern-divider" />

            <button onClick={() => setNewAdvice(true)} className="btn-div">
              <img src={dice} alt="" />
            </button>
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        .Coded by <a href="www.claytoncripe.com">Clayton Cripe</a>.
      </div>
    </div>
  );
}

export default App;
