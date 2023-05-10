import forca from '../assets/forca0.png'

function Jogo(props) {

    const {play, newArrPalavra, arrPalavra, startGame, victory} = props

    return (
        <div className="game">
            <img src={forca} />
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