import { useState } from "react";

function Letra(props) {

    const {disableButtons, keyGuess, resetKey} = props.parentProps;
    const {letra} = props;

    const [disableGuessedKey, setDisableGuessedKey] = useState(false);
    const [toggleButton, setToggleButton] = useState('enabled');
    
    function handleClick(event) {
        keyGuess(event);
        setDisableGuessedKey(true);
        setToggleButton('disabled');
    }

    return (
        <>
            <button
                id={resetKey}
                onClick={handleClick}
                disabled={disableButtons === true ? true : disableGuessedKey}
                className={disableButtons === true ? 'disabled': toggleButton}
            >{letra}</button> 
        </>
    )
}

export default Letra