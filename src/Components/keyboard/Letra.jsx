import { useState } from "react";

function Letra(props) {

    const {enableButton, keyGuess} = props.ParentProps;
    const {letra} = props;

    const [disableGuessed, setDisableGuessed] = useState(false);
    
    function handleClick(event) {
        keyGuess(event);
        setDisableGuessed(true);
    }

    return (
        <>
            <button
                onClick={handleClick}
                disabled={enableButton}
                className={(disableGuessed === !true) ? (enableButton === !undefined ? "disabled" : "enabled") : "disabled"}
            >{letra}</button>
        </>
    )
}

export default Letra