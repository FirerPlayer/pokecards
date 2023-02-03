import "./card.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingCard from "./LoadingCard";

class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.abilities = data.abilities;
    this.stats = {
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
    };
    this.type = data.types[0].type.name;
    this.spriteUrl = data.sprites.other["official-artwork"].front_default;
  }
}

let upperFirst = (str) => str.at(0).toUpperCase() + str.slice(1);

function Ability(props) {
  const [drc, setDrc] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let getFlavorText = async () => {
      const flavor_text = await axios
        .get(props.ability.url)
        .then((response) => {
          setLoading(false);
          setError("");
          return response.data.flavor_text_entries.find(
            (obj) => obj.language.name == "en"
          ).flavor_text;
        })
        .catch((error) => {
          setLoading(false);
          setError("");
          return "";
        });
      setDrc(flavor_text);
    };
    getFlavorText();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="load-back w-8 h-9 rounded-2xl"></div>
      ) : (
        <div className="tooltip flex flex-col bg-white w-8 h-9 rounded-2xl mt-3 text-center font-pokemon text-xl">
          {props.nb + 1}
          <div className="toolText flex flex-col self-center px-2 bg-[#FFCC05] rounded-lg border-b-2 border-black">
            <h5 className="font-ubunto md:text-lg text-sm text-black first-letter:uppercase bg-white w-fit self-center rounded-xl px-2">
              {props.ability.name}
              <br></br>
            </h5>
            <h5 className="font-ubunto text-xs md:text-sm min-w-[calc(8em+3vw)]">
              {drc}
            </h5>
          </div>
        </div>
      )}
      {error ? error : null}
    </div>
  );
}

function Card({ url }) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async (url) => {
      const data = await axios
        .get(url)
        .then((res) => {
          setLoading(false);
          return res.data;
        })
        .catch((err) => {
          console.log(err.message);
          return "";
        });
      setPokemon(new Pokemon(data));
    };

    getPokemon(url);
  }, [pokemon]);

  return !loading ? (
    <div className="titanium hover:z-30 h-fit rounded-lg py-2 pt-0 border-2 border-white flex flex-col hover:shadow-[11px_11px_34px_-4px_rgba(0,0,0,0.75)] hover:scale-100 shadow-[11px_11px_5px_-4px_rgba(0,0,0,0)] transition-[1s]">
      <h2 className=" font-pokemon max-w-[170px] self-center pokeFont mb-3 first-letter:uppercase">
        {pokemon.name}
      </h2>
      <div className="flex flex-row">
        <div className="flex flex-col justify-start gap-2">
          <div className="h-fit">
            <img
              src={`pokemonTypes/70px-${upperFirst(pokemon.type)}IC_BDSP.png`}
              width="86px"
            ></img>
          </div>
          <div className="flex flex-col bg-lime-400 w-fit px-2 rounded-r-full">
            <a className="pokeFont font-pokemon text-sm self-centert">HP</a>
            <a className="self-center font-ubunto text-xl -ml-[5px]">
              {pokemon.stats.hp}
            </a>
          </div>
          <div className="flex flex-col bg-red-600 w-fit px-2 rounded-r-full">
            <a className="pokeFont font-pokemon text-sm self-centert">Attack</a>
            <a className="self-center font-ubunto text-xl">
              {pokemon.stats.attack}
            </a>
          </div>
          <div className="flex flex-col bg-cyan-400 w-fit px-2 rounded-r-full">
            <a className="pokeFont font-pokemon text-sm self-centert">
              Defense
            </a>
            <a className="self-center font-ubunto text-xl">
              {pokemon.stats.defense}
            </a>
          </div>
          <div className="flex flex-col bg-orange-400 w-fit px-2 rounded-r-full">
            <a className="pokeFont font-pokemon text-sm self-centert">Speed</a>
            <a className="self-center font-ubunto text-xl">
              {pokemon.stats.speed}
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className=" rounded-full w-fit h-fit px-0">
            <img
              className="md:w-[170px] w-[140px]"
              src={pokemon.spriteUrl ? pokemon.spriteUrl : "./pokeDefault.png"}
              alt={""}
            ></img>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-around gap-1 mb-0">
        {pokemon.abilities.map((e, i) => {
          return <Ability key={i} nb={i} ability={e.ability} />;
        })}
      </div>
    </div>
  ) : (
    <LoadingCard></LoadingCard>
  );
}

export default Card;
