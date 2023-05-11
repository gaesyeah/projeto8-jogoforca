import Letra from "./Letra";

function Letras(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="keyBoard">
            {alfabeto.map((letra, i) => <Letra mapParameters={[letra, i]} parentProps={props} key={letra}/>)}
        </div>
    );
}

export default Letras