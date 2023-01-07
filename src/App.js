import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/allcountries";
import CountriesInfo from "./components/CountriesInfo/CountriesInfo";
import {GiWorld} from "react-icons/gi";

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Países pelo mundo <GiWorld /></h5>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountriesInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;