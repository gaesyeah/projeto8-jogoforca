import LetraJogo from "./LetraJogo";

function Jogo(props) {

    const {startGame, guessedArrPalavra, gameState, forcaGuess} = props;

    return (
        <div className="game">
            <img src={forcaGuess} />
            <button onClick={startGame}>Escolher Palavra</button>
            <div>{guessedArrPalavra.map((letra, i) => 
                <LetraJogo map={[guessedArrPalavra,letra]} gameState={gameState} key={`${letra}[${i}]`}/>)}
            </div>
        </div>
    );
}

export default Jogo