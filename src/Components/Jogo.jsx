function Jogo(props) {

    const {play, newArrPalavra, arrPalavra, startGame, victory, forcaGuess} = props

    return (
        <div className="game">
            <img src={forcaGuess} />
            <button onClick={startGame}>Escolher Palavra</button>
            {play &&
                <div>
                    {(newArrPalavra.length > 0) ? newArrPalavra.map(letra => <p className={victory}>{letra}</p>) : arrPalavra.map(() => <p>_</p>)}
                </div>
            }
        </div>
    );
}

export default Jogo