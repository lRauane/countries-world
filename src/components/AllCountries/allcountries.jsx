import { useState, useEffect } from "react";
import { apiURL } from "../utilities/api";
import Loading from "../utilities/Loads/load";
import SearchInput from "../search/search";

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
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);
      if (!res.ok) throw new error("pais não encontrado");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      setError(error.message)
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
      </div>
      <div className="country__bottom">
        {isLoading && !error && <h4>Carregando...</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {countries?.map((country) => (
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
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
