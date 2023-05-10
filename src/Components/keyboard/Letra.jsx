import { useState } from "react";

function Letra(props) {

    const {enableButton, keyGuess} = props.ParentProps;
    const {letra} = props;

    const [disableGuessed, setDisableGuessed] = useState(false);
    const [disableButton, setDisableButton] = useState(!enableButton);
    
    function handleClick(event) {
        keyGuess(event);
        setDisableGuessed(true);
        setDisableButton(!disableButton);
    }

    return (
        <>
            <button
                onClick={handleClick}
                disabled={disableButton}
                className={enableButton === !undefined ? "disabled" : ((disableGuessed === !true) ? "enabled" : 'disabled')}
            >{letra}</button>
        </>
    )
}

export default Letra