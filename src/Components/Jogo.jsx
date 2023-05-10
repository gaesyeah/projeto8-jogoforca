import forca from '../assets/forca0.png'

function Jogo(props) {

    const {play, newArrPalavra, arrPalavra, startGame} = props

    return (
        <div className="game">
            <img src={forca} />
            <button onClick={startGame}>Escolher Palavra</button>
            {play &&
                <div>
                    {(newArrPalavra.length > 0) ? newArrPalavra.map(letra => <p>{letra}</p>) : arrPalavra.map(() => <p>_</p>)}
                </div>
            }
        </div>
    );
}

export default Jogo