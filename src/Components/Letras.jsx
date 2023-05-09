function Letras(props) {

    const {enableButton, alfabeto} = props;

    return (
        <div className="keyBoard">
            {alfabeto.map(letra => 
                <button 
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