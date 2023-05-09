import Jogo from "./Jogo";
import Letras from "./Letras";

import { useState } from "react";
import palavras from "../palavras";

let guessedArrPalavra;
function App() {

  const [play, setPlay] = useState(false);
  const [arrPalavra, setArrPalavra] = useState([]);

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [enableButton, setEnableButton] = useState(true);

//----------------------

  function startGame() {
    guessedArrPalavra = [];
    
    const newPalavras = palavras.sort(() => Math.random() - 0.5);
    const palavra = newPalavras[0];
    console.log(palavra);
    setArrPalavra(palavra.split(''));

    setPlay(true);
    setEnableButton(false);
  }
  //-----
  function keyGuess(event) {
    const keyPressed = event.target.textContent;
    
    if (guessedArrPalavra.length === 0) {
      guessedArrPalavra = Array(arrPalavra.length).fill('_');
      console.log(guessedArrPalavra);
    }

    arrPalavra.forEach((letra, i) => {
        if (letra === keyPressed) {
          console.log(`Letra: ${letra}\nIndice: ${i}`);
          guessedArrPalavra[i] = letra;
        }
    });
    console.log(guessedArrPalavra);
}

//----------------------

  return (
    <div className="body">
        <Jogo play={play} arrPalavra={arrPalavra} startGame={startGame}/>
        <Letras enableButton={enableButton} alfabeto={alfabeto} keyGuess={keyGuess}/>
    </div>
  );
}

export default App
