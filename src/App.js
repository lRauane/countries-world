import "./app.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/allcountries";
import CountriesInfo from "./components/CountriesInfo/CountriesInfo";

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the world</h5>
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