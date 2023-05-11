import { useState } from "react";

function Letra(props) {

    const {disableButtons, keyGuess, toggleButton, setToggleButton} = props.parentProps;
    const [letra, i] = props.mapParameters;
    
    function handleClick(event) {
        keyGuess(event);
        setToggleButton([...toggleButton, i]);
    }

    return (
        <>
            <button
                onClick={handleClick}
                disabled={toggleButton.includes(i) ? true : (disableButtons === false ? false : true)}
                className={toggleButton.includes(i) ? 'disabled' : (disableButtons === false ? 'enabled' : 'disabled')}
            >{letra}</button> 
        </>
    )
}

export default Letra