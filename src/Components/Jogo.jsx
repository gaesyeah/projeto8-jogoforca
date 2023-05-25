function Jogo(props) {

    const {startGame, arrPalavra, guessedArrPalavra, gameState, forcaGuess} = props;
    const palavra = arrPalavra.current.join('');
    const guessedPalavra = guessedArrPalavra.join('');

    return (
        <div className="game">
            <img src={forcaGuess} data-test="game-image"/>
            <button onClick={startGame} data-test="choose-word" >Escolher Palavra</button>
            <p className={`${gameState} ${guessedPalavra === palavra ? ' final' : ' guessing'}`} data-test="word">
                {guessedPalavra}
            </p>
        </div>
    );
}

export default Jogo