function Jogo(props) {

    const {disableAllButtons, inputGuess, inputChange, inputValue} = props;

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input
                value={inputValue}
                onChange={inputChange}
                disabled={disableAllButtons === false ? false : true}
                data-test="guess-input"
            ></input>
            <button
                onClick={inputGuess}
                className={disableAllButtons === false ? 'chuteEnabled' : 'chuteDisabled'}
                disabled={disableAllButtons === false ? false : true}
                data-test="guess-button"
            >Chutar</button>
        </div>
    );
}

export default Jogo