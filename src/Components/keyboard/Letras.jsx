import Letra from "./Letra";

function Letras(props) {

    const {resetKey} = props;

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="keyBoard" key={'teste'}>
            {alfabeto.map(letra => <Letra letra={letra} parentProps={props} key={`${letra} (${resetKey})`}/>)}
        </div>
    );
}

export default Letras