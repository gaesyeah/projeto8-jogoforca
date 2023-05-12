function Jogo(props) {

    const {startGame, guessedArrPalavra, gameState, forcaGuess} = props;

    return (
        <div className="game">
            <img src={forcaGuess} />
            <button onClick={startGame}>Escolher Palavra</button>
            <div>{guessedArrPalavra.map((letra, i) => 
                <p                      
                    key={`${letra}-${i}`}
                    className={gameState} 
                >{(guessedArrPalavra.length > 0) ? letra : '_'}
                </p>
                )
            }
            </div>
        </div>
    );
}

export default Jogo