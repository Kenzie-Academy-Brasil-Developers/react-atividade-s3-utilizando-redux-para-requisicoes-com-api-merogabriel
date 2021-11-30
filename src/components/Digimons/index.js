import React from "react";
import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <ul>
        {digimons.map(
          (digimon, index) => (
            <li key={index}>{digimon.name}</li>
          )
          // console.log(digimons)
        )}
      </ul>
    </div>
  );
};

export default Digimons;
