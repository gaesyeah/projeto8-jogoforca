function Letra(props) {

    const {disableAllButtons, buttonGuess} = props.parentProps;
    const [arrGuessedButton, setArrGuessedButton] = props.parentProps.arrGuessedButton;
    const {letra} = props;
    
    function handleClick(event) {
        buttonGuess(event);
        setArrGuessedButton([...arrGuessedButton, letra]);
    }

    return (
        <>
            <button
                onClick={handleClick}
                disabled={arrGuessedButton.includes(letra) ? true : (disableAllButtons === false ? false : true)}
                className={arrGuessedButton.includes(letra) ? 'disabled' : (disableAllButtons === false ? 'enabled' : 'disabled')}
            >{letra}</button> 
        </>
    )
}

export default Letra