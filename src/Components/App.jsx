import Jogo from "./Jogo";
import Letras from "./keyboard/Letras";

import { useState } from "react";
import palavras from "../palavras";

let guessedArrPalavra = [];
let arrPalavra  = [];
function App() {

  const [play, setPlay] = useState(false);

  const [newArrPalavra, setNewArrPalavra] = useState([]);

  const [enableButton, setEnableButton] = useState(true);
//----------------------

  function startGame() {
    guessedArrPalavra = [];
    
    const newPalavras = palavras.sort(() => Math.random() - 0.5);
    const palavra = newPalavras[0];
    console.log(palavra);
    arrPalavra = palavra.split('');

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
    setNewArrPalavra([...guessedArrPalavra]);
}

//----------------------

  return (
    <div className="body">
        <Jogo play={play} newArrPalavra={newArrPalavra} arrPalavra={arrPalavra} startGame={startGame} />
        <Letras enableButton={enableButton} keyGuess={keyGuess} />
    </div>
  );
}

export default App
