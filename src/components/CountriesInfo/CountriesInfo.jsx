import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../utilities/api";
import { Link } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi"

const CountriesInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}`);

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();

        setCountry(data);
        setIsloading(false);
      } catch (error) {
        setIsloading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <>
    <button>
        <Link to="/"><BiArrowBack /></Link>
    </button>
    <div className="country__info__wrapper">

      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && { error }}

      {country?.map((country, index) => (
        <div className="country__info__container" key={index}>
          <div className="country__info-img">
            <img src={country.flags.png} alt="" />
          </div>

          <div className="country__info">
            <h3>{country.name.common}</h3>

            <div className="country__info-left">
              <h5>
                População:{" "}
                <span>
                  {country.population}
                </span>
              </h5>
              <h5>
                Região: <span>{country.region}</span>
              </h5>
              
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>

    </>
  );
};

export default CountriesInfo;
