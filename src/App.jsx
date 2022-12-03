import { useState, useEffect } from "react";
import "./App.css";
import ProductService from "./services";

const advice = new ProductService();
function App() {
  const [adviceArr, setAdviceArr] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    advice.fetchAdvice().then((res) => {
      console.log(res);
      if (res && res.response.ok) {
        setAdviceArr([res.advice]);
      }
    });
    setLoading(false);
  }, []);
  return (
    <div className="App">
      <div className="main-wrapper">
        {!loading ? (
          <div>
            {adviceArr.map((item) => (
              <div className="card">
                <h5>{item.id}</h5>
                <h3>{item.advice}</h3>
              </div>
            ))}
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
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
