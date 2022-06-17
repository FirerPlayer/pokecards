import "./card.scss"
function Ability(props) {
    return (<div class="tooltip flex flex-col tooltip bg-[#3761A8] w-12 h-12 rounded-[0%_100%_0%_100%_/_77%_20%_80%_23%] pt-1 mt-3 text-center font-pokemon text-xl pokeFont ">{props.nb + 1}
        <span class="toolText z-[10] self-center bg-red-400 w-[10vw] rounded-t-lg border-b-8 border-blue-400 ">{props.description}</span>
    </div>)
}

var k = 3
var arr = []
for (let i = 0; i < k; i++) {
    arr.push(i);

}

function Card(props) {
    const pokemon = props.pokemon


    return (
        <div className=" rounded-tl-2xl rounded-br-2xl py-3 border-2 border-white max-w-xs sm:max-w titanium flex flex-col hover:shadow-[11px_11px_34px_-4px_rgba(0,0,0,0.75)] hover:scale-100 shadow-[11px_11px_5px_-4px_rgba(0,0,0,0)] scale-[.98] transition-[1s]">
            <h2 className="pokeFont mb-3 w-fit self-center text-2xl font-pokemon text-center text-[#FFCC05]">
                Name
            </h2>
            <div className=" bg-neutral-300 rounded-full self-center">
                <img className=" max-w-[200px]" src={props.sprite} alt={props.alt}></img>
            </div>
            <div className="flex flex-row flex-wrap justify-between px-14">
                <div className="flex flex-col bg-lime-400 w-fit mt-3 self-center px-3 rounded-t-full">
                    <a className="pokeFont font-pokemon text-md self-centert">HP</a>
                    <a className="self-center font-ubunto text-xl" >23</a>
                </div>
                <div className="flex flex-col bg-red-600 w-fit mt-3 self-center px-3 rounded-t-full">
                    <a className="pokeFont font-pokemon text-md self-centert">Atk</a>
                    <a className="self-center font-ubunto text-xl" >23</a>
                </div>
                <div className="flex flex-col bg-cyan-400 w-fit mt-3 self-center px-3 rounded-t-full">
                    <a className="pokeFont font-pokemon text-md self-centert">Def</a>
                    <a className="self-center font-ubunto text-xl" >23</a>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-around gap-1">
                {arr.map((e, i) => {
                    return <Ability nb={i} description="This Pokémon transforms into a random opponent upon entering battle.  This effect is identical to the move transform." />
                })}
            </div>

        </div>
    )
}

export default Card