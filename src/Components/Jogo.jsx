function Jogo(props) {

    const {startGame, guessedArrPalavra, gameState, forcaGuess} = props;

    return (
        <div className="game">
            <img src={forcaGuess} />
            <button onClick={startGame}>Escolher Palavra</button>
            <div className={gameState}>
                {guessedArrPalavra.map((letra, i) => 
                    <p key={`${letra}[${i}]`}>{letra}</p>)
                }
            </div>
        </div>
    );
}

export default Jogo