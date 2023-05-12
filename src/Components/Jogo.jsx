function Jogo(props) {

    const {startGame, arrPalavra, guessedArrPalavra, gameState, forcaGuess} = props;
    const palavra = arrPalavra.join('');
    const guessedPalavra = guessedArrPalavra.join('');

    return (
        <div className="game">
            <img src={forcaGuess} />
            <button onClick={startGame}>Escolher Palavra</button>
            <p className={`${gameState} ${guessedPalavra === palavra ? ' final': ' guessing'}`}>
                {guessedPalavra}
            </p>
        </div>
    );
}

export default Jogo