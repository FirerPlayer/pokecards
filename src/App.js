import './App.scss';
import Card from "./components/card.js"


function App() {
	return (
		<div className="bg-blue-400">
			<h1 className=' antialiased font-pokemon text-center pokeFont text-8xl text-[#FECA1B] mb-10'>Pokecards</h1>
			<div className='m-0 px-[6%]'>
				<Card sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt="0" />
			</div>
		</div>
	);
}

export default App;

/* {pokesFronts.map((element, index) => {
					return <Card />
				})} */