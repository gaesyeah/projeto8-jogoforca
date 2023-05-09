function Jogo(props) {

    const {play, arrPalavra, startGame} = props

    return (
        <div className="game">
            <img src="./assets/forca0.png" />
            <button onClick={startGame}>Escolher Palavra</button>
            {play &&
                <div className="word">
                    {arrPalavra.map(() => <p>_</p>)}
                </div>
            }
        </div>
    );
}

export default Jogo