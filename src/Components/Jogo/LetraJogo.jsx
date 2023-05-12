function LetraJogo(props) {

    const [guessedArrPalavra, letra] = props.map;

    return <p>{(guessedArrPalavra.length > 0) ? letra : '_'}</p>;
}

export default LetraJogo