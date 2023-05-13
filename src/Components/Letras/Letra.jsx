function Letra(props) {

    const {disableAllButtons, buttonGuess} = props.parentProps;
    const [arrGuessedButton, setArrGuessedButton] = props.parentProps.arrGuessedButton;
    const {letra} = props;
    
    function guessClick() {
        buttonGuess(letra);
        setArrGuessedButton([...arrGuessedButton, letra]);
    }

    return (
        <>
            <button
                onClick={guessClick}
                disabled={arrGuessedButton.includes(letra) ? true : (disableAllButtons === false ? false : true)}
                className={arrGuessedButton.includes(letra) ? 'disabled' : (disableAllButtons === false ? 'enabled' : 'disabled')}
                data-test="letter"
            >{letra}</button> 
        </>
    )
}

export default Letra