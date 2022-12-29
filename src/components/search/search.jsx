import React, { useState } from "react";

const SearchInput = ({onSearch}) => {
   const [input, SetInput] = useState('');

   const submitHandler = (e) =>{
    e.preventDefault();
    onSearch(input)
   }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Pesquise um país..." value={input} onChange={(e) => SetInput(e.target.value)}/>
    </form>
  );
};

export default SearchInput;
