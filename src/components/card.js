import "./card.scss"

function Card(props) {
    return (
        <div className="card">
            <p class="hp">
                <span>HP</span>
                50
            </p>
            <img className="pokeSprite" src={props.sprite} alt={props.alt}></img>
            <h2 class="poke-name">Pokemon Name</h2>
            <div class="types">

            </div>
            <div class="stats">
                <div>
                    <h3>statAttack</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>statDefense</h3>
                    <p>Defense</p>
                </div>
                <div>
                    <h3>statSpeed</h3>
                    <p>Speed</p>
                </div>
            </div>
        </div>
    )
}

export default Card