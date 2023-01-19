import "./App.scss";
import Card from "./components/card.js";
import { useState, useEffect } from "react";
import axios from "axios";

const itemTemplate = (item) => {
  return (
    <div className="country-item">
      <img
        alt={item.name}
        src={`images/flag/flag_placeholder.png`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        className={`flag flag-${item.code.toLowerCase()}`}
      />
      <div>{item.name}</div>
    </div>
  );
};

function App() {
  const [pokeGroups, setPokeGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [inputPokemon, setInputPokemon] = useState("");
  const [currPage, setCurrPage] = useState(0);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`)
      .then((response) => {
        setLoading(false);
        setPokeGroups(response.data.results);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPokeGroups({});
        setError("Alguma coisa deu errado.");
      });
  }, []);

  return (
    <div className=" bg-blue-400 pb-40 flex flex-col">
      <h1 className=" antialiased font-pokemon text-center title text-[clamp(1em,1em+10vw,8em)]  text-[#FECA1B] mb-10 pt-3">
        Pokecards
      </h1>
      <div className="self-center bg-white rounded-full flex flex-row hover:first:stroke-2 items-center justify-center w-1/4 min-w-min mb-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 stroke-1 transition-all ease-linear"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          className="h-8  text-lg bg-transparent focus:outline-none min-w-[195px] w-full caret-[#243c5a] pl-1 mr-2"
          placeholder="Search Pokemon"
          onChange={(e) => setInputPokemon(e.target.value)}
        ></input>
      </div>
      {loading ? (
        <div className="h-full w-full -mb-2"></div>
      ) : (
        <div className="m-0 flex flex-row flex-wrap gap-6 justify-center px-12">
          {pokeGroups.map((e, i) => {
            return <Card key={i} pokemonUrl={e.url} />;
          })}
        </div>
      )}
      {error ? error : null}
    </div>
  );
}

export default App;
