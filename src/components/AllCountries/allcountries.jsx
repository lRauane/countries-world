import { useState, useEffect } from "react";
import { apiURL } from "../utilities/api";
import SearchInput from "../search/search";
import FilterCountry from "../FilterCountry/filterCountry";
import { Link } from "react-router-dom";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}/all`);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      setCountries(data);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);
      if (!res.ok) throw new error("pais não encontrado");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`${apiURL}/region/${regionName}`);

      if (!res.ok) throw new Error("Falhou...");

      const data = await res.json();

      setIsLoading(false);
      setCountries(data);
    } catch (e) {
      setIsLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="all__country_wrraper">
      <div className="country__top">
        <div className="search">
          <SearchInput onSearch={getCountryByName} />
        </div>
        <div className="filter">
          <FilterCountry onSelect={getCountryByRegion} />
        </div>
      </div>
      <div className="country__bottom">
        {isLoading && !error && <h4>Carregando...</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {countries?.map((country) => (
          <Link to={`/country/${country.name.common}`}>
            <div className="Country__card">
              <div className="Country__img">
                <img src={country.flags.png} alt="" />
              </div>
              <div className="country__data">
                <h3>{country.name.common}</h3>
                <h6>População: {country.population}</h6>
                <h6>Região: {country.region}</h6>
                <h6>capital: {country.capital}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
