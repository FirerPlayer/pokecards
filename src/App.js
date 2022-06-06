import './App.scss';
import Card from "./components/card.js"


function App() {
	return (
		<div className="App">
			<div className='cards'>
				<Card sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt="0" />
			</div>
		</div>
	);
}

export default App;

/* {pokesFronts.map((element, index) => {
					return <Card />
				})} */