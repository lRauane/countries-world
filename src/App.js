import "./app.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/allcountries";
import CountriesInfo from "./components/CountriesInfo/CountriesInfo";
import { BiWorld } from "react-icons/bi";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h4>
            Conheça o Mundo!
            <BiWorld />
          </h4>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country" element={<CountriesInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
