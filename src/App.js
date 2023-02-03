import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import toast, { Toaster } from "react-hot-toast";
import CardPages from "./components/CardsPages";
import Card from "./components/Card";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [inputPokemon, setInputPokemon] = useState("");

  const notifyError = () => toast.error("Pokemon not found");
  const notifySucess = () => toast.success("Find out!");

  let searchPokemon = (name) => {
    const query = `https://pokeapi.co/api/v2/pokemon/${name}`;
    if (name.length >= 3) {
      axios
        .get(query)
        .then((res) => {
          setSelectedPokemon(query);
          notifySucess();
        })
        .catch((err) => {
          setSelectedPokemon("");
          notifyError();
        });
    } else {
      notifyError();
      setSelectedPokemon("");
    }
  };

  return (
    <div className="flex flex-col unselect">
      <h1 className="antialiased font-pokemon text-center title text-[clamp(1em,1em+10vw,6em)]  text-[#FECA1B] mb-10 -mt-2 md:-mt-5">
        Pokécards
      </h1>
      <SearchInput
        onChange={(ev) => {
          setInputPokemon(ev.target.value);
        }}
        onSearch={(ev) => {
          searchPokemon(inputPokemon);
        }}
      />
      {selectedPokemon ? (
        <div className="self-center w-[272px] h-[350px] ">
          <Card url={selectedPokemon}></Card>
        </div>
      ) : (
        <CardPages />
      )}

      <Toaster position="top-right" />
    </div>
  );
}

export default App;
