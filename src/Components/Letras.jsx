function Letras(props) {

    const {enableButton, alfabeto, keyGuess} = props;

    return (
        <div className="keyBoard">
            {alfabeto.map(letra => 
                <button
                    onClick={keyGuess}
                    disabled={enableButton}
                    className={enableButton === !undefined ? "disabled" : "enabled"}
                >
                    {letra}
                </button>
            )}
        </div>
    );
}

export default Letras