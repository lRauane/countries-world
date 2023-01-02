import React from "react";

const FilterCountry = ({onSelect}) => {
  const selectHandler = e =>{
    const regionName = e.target.value
    onSelect(regionName)
  }

  return (
    <select onChange={selectHandler}>
      <option>Filtrar por Região</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europa">Europa</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default FilterCountry;
