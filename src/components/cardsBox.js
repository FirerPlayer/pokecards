function CardsBox(props) {
	return (
		<div>
			<div className="m-0 flex flex-row flex-wrap gap-6 justify-center px-12">
				{props.pokeGroups.map((e, i) => {
					return <Card key={i} pokemonUrl={e.url} />;
				})}
			</div>
		</div>
	);
}

export default CardsBox;
