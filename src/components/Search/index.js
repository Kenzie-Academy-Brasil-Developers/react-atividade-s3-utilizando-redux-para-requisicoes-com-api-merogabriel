import React, { useState } from "react";
import { addDigimonThunk } from "../../store/modules/digimons/thunks";
import { useDispatch } from "react-redux";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonThunk(input, setError));
    // setInput("");
  };

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          placeholder="Procure seu Digimon"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
        <span> {error && <p> Pokemon não encontrado </p>} </span>
      </div>
    </div>
  );
};

export default Search;
