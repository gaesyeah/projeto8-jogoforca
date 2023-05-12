function LetraJogo(props) {

    const [guessedArrPalavra, letra] = props.map;
    const {gameState} = props;

    return (
        <p className={gameState}>
            {(guessedArrPalavra.length > 0) ? letra : '_'}
        </p>
    );
}

export default LetraJogo