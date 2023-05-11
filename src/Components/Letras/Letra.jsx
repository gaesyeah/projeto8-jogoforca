function Letra(props) {

    const {disableAllButtons, buttonGuess} = props.parentProps;
    const [arrGuessedButton, setArrGuessedButton] = props.parentProps.arrGuessedButton;
    const [letra, i] = props.mapParameters;
    
    function handleClick(event) {
        buttonGuess(event);
        setArrGuessedButton([...arrGuessedButton, i]);
    }

    return (
        <>
            <button
                onClick={handleClick}
                disabled={arrGuessedButton.includes(i) ? true : (disableAllButtons === false ? false : true)}
                className={arrGuessedButton.includes(i) ? 'disabled' : (disableAllButtons === false ? 'enabled' : 'disabled')}
            >{letra}</button> 
        </>
    )
}

export default Letra