import { useState } from "react";

function Letra(props) {

    const {disableButton, keyGuess} = props.parentProps;
    const {letra} = props;

    const [disableGuessedKey, setDisableGuessedKey] = useState(false);
    const [toggleButton, setToggleButton] = useState(!disableButton);
    
    function handleClick(event) {
        keyGuess(event);
        setDisableGuessedKey(true);
        setToggleButton(!toggleButton);
    }

    return (
        <>
            <button
                onClick={handleClick}
                disabled={(disableButton === true) ? disableButton : toggleButton}
                className={disableButton === !undefined ? "disabled" : ((disableGuessedKey === !true) ? "enabled" : 'disabled')}
            >{letra}</button>
        </>
    )
}

export default Letra