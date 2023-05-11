function Jogo(props) {

    const {play, newArrPalavra, arrPalavra, startGame, gameState, forcaGuess} = props;

    return (
        <div className="game">
            <img src={forcaGuess} />
            <button onClick={startGame}>Escolher Palavra</button>
            {play &&
                <div>
                    {(newArrPalavra.length > 0) ? 
                        newArrPalavra.map((letra, i) => <p className={gameState} key={i}>{letra}</p>) 
                    :
                        arrPalavra.map((letra,i) => <p key={`${letra}-${i}`}>_</p>)}
                </div>
            }
        </div>
    );
}

export default Jogo