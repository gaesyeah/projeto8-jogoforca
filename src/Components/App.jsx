import Jogo from "./Jogo";
import Letras from "./Letras";

import { useState } from "react";
import palavras from "../palavras";

function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [play, setPlay] = useState(false);
  const [arrPalavra, setArrPalavra] = useState([]);
  const [enableButton, setEnableButton] = useState(true);

  function startGame() {
      setPlay(true);

      const newPalavras = palavras.sort(() => Math.random() - 0.5);
      const palavra = newPalavras[0];
      console.log(palavra);
      setArrPalavra(palavra.split(''));

      setEnableButton(false);
  }

  return (
    <div className="body">
        <Jogo play={play} arrPalavra={arrPalavra} startGame={startGame}/>
        <Letras enableButton={enableButton} alfabeto={alfabeto}/>
    </div>
  );
}

export default App
