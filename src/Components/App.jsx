import Jogo from "./Jogo";
import Letras from "./keyboard/Letras";

import { useState } from "react";
import palavras from "../palavras";

let guessedArrPalavra = [];
let arrPalavra  = [];
function App() {

  const [play, setPlay] = useState(false);
  const [enableButton, setEnableButton] = useState(true);

  const [newArrPalavra, setNewArrPalavra] = useState([]);

  const [victory, setVictory] = useState('black');
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
    //---
    let counter = 0;
    guessedArrPalavra.forEach((palavra, i) => {
      if (palavra === arrPalavra[i]) {
        counter++
      }
    })
    if (counter === guessedArrPalavra.length) {
      setVictory('green');
      setEnableButton(true);
    }
}

//----------------------

  return (
    <div className="body">
        <Jogo play={play} newArrPalavra={newArrPalavra} arrPalavra={arrPalavra} startGame={startGame} victory={victory}/>
        <Letras enableButton={enableButton} keyGuess={keyGuess} />
    </div>
  );
}

export default App
