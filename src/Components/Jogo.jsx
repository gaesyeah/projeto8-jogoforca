import forca from '../assets/forca0.png'

function Jogo(props) {

    const {play, testArrPalavra, arrPalavra, startGame} = props

    return (
        <div className="game">
            <img src={forca} />
            <button onClick={startGame}>Escolher Palavra</button>
            {play &&
                <div>
                    {(testArrPalavra.length > 0) ? testArrPalavra.map(letra => <p>{letra}</p>) : arrPalavra.map(() => <p>_</p>)}
                </div>
            }
        </div>
    );
}

export default Jogo