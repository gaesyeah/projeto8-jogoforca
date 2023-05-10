import { useState } from "react";

function Letra(props) {

    const {disableButtons, keyGuess} = props.parentProps;
    const {letra} = props;

    const [disableGuessedKey, setDisableGuessedKey] = useState(false);
    const [toggleButton, setToggleButton] = useState(!disableButtons);
    
    function handleClick(event) {
        keyGuess(event);
        setDisableGuessedKey(true);
        setToggleButton(!toggleButton);
    }

    return (
        <>
            <button
                onClick={handleClick}
                disabled={(disableButtons === true) ? disableButtons : toggleButton}
                className={disableButtons === !undefined ? "disabled" : ((disableGuessedKey === !true) ? "enabled" : 'disabled')}
            >{letra}</button>
        </>
    )
}

export default Letra