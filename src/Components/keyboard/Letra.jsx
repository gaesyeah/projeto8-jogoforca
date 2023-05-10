import { useState } from "react";

function Letra(props) {

    const {disableButtons, keyGuess, resetElement} = props.parentProps;
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
            {disableButtons === true ?
                <button
                    disabled={true}
                    className={'disabled'}
                >{letra}</button> 
            :
                <button
                onClick={handleClick}
                disabled={disableGuessedKey}
                className={toggleButton}
                >{letra}</button>
            }
        </>
    )
}

export default Letra