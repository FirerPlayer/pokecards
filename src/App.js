import "./App.scss";
import Card from "./components/card.js";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [pokeGroups, setPokeGroups] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [selectedPokemon, setSelectedPokemon] = useState("");
	const [inputPokemon, setInputPokemon] = useState("");
	const [currPage, setCurrPage] = useState(
		`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`
	);

	let handlePokemon = (event) => {
		const query = `https://pokeapi.co/api/v2/pokemon/${event.targe.value}`;
		console.log(query);
	};

	useEffect(() => {
		axios
			.get(currPage)
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
	}, [currPage]);

	return (
		<div className=" bg-blue-400 pb-40 flex flex-col">
			<h1 className=" antialiased font-pokemon text-center title text-[clamp(1em,1em+10vw,6em)]  text-[#FECA1B] mb-10 -mt-5">
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
					onKeyDown={(ev) => {
						if (ev.key === "Enter") {
							console.log(ev.target.value);
						}
					}}
				></input>
			</div>
			{loading ? (
				<div className="h-full w-full -mb-2"></div>
			) : (
				<>
					<div className="self-center bg-black">
						<div className="flex flexs-row w-fit h-fit justify-center items-center gap-3">
							<div
								className="p-2 w-fit h-fit bg-white rounded-md"
								onClick={(ev) => {
									axios.get(currPage).then((res) => {
										if (res.data.previous) {
											setCurrPage(res.data.previous);
										}
									});
								}}
							>
								{/* previous icon */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 19.5L8.25 12l7.5-7.5"
									/>
								</svg>
							</div>
							<div
								className="p-2 w-fit h-fit bg-white rounded-md"
								onClick={(ev) => {
									axios.get(currPage).then((res) => {
										if (res.data.next) {
											setCurrPage(res.data.next);
										}
									});
								}}
							>
								{/* next icon */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</div>
						</div>
					</div>
				</>
			)}

			{error ? error : null}
		</div>
	);
}

export default App;
