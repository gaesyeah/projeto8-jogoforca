import Jogo from "./Jogo";
import Letras from "./keyboard/Letras";

import { useState } from "react";
import palavras from "../palavras";

import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';
const forcaImg = [forca1, forca2, forca3, forca4, forca5, forca6];

let guessedArrPalavra = [];
let arrPalavra  = [];
let wrongCounter = 0;
function App() {

  const [play, setPlay] = useState(false);
  const [disableButtons, setDisableButtons] = useState(true);

  const [newArrPalavra, setNewArrPalavra] = useState([]);

  const [forcaGuess, setForcaGuess] = useState(forca0);
  const [gameState, setGameState] = useState('black');
//----------------------

  function startGame() {
    guessedArrPalavra = [];
    
    const newPalavras = palavras.sort(() => Math.random() - 0.5);
    const palavra = newPalavras[0];
    console.log(palavra);
    arrPalavra = palavra.split('');

    if (disableButtons === true) {
      setDisableButtons(false);
    } else {
      setDisableButtons(true);
      setTimeout(()=> setDisableButtons(false),1000);
    }

    setPlay(true);
    wrongCounter = 0;
    setForcaGuess(forca0);

    setGameState('black');
    setNewArrPalavra([]);
  }
  //-----
  function keyGuess(event) {
    const keyPressed = event.target.textContent;
    
    if (guessedArrPalavra.length === 0) {
      guessedArrPalavra = Array(arrPalavra.length).fill('_');
      console.log(guessedArrPalavra);
    }

    let rightGuess = false;
    arrPalavra.forEach((letra, i) => {
        if (letra === keyPressed) {
          console.log(`Letra: ${letra}\nIndice: ${i}`);
          guessedArrPalavra[i] = letra;
          rightGuess = true;
        }
    });
    console.log(guessedArrPalavra);
    setNewArrPalavra([...guessedArrPalavra]);
    //----------
    if (rightGuess === false) {
      wrongCounter++
      setForcaGuess(forcaImg[wrongCounter-1]);
    }
    if (wrongCounter === 6) {
      setGameState('red');
      setDisableButtons(true);
      setNewArrPalavra([...arrPalavra]);
    }
    //----------
    let counterRight = 0;
    guessedArrPalavra.forEach((palavra, i) => {
      if (palavra === arrPalavra[i]) {
        counterRight++
      }
    })
    if (counterRight === guessedArrPalavra.length) {
      setGameState('green');
      setDisableButtons(true);
    }
}

//----------------------

  return (
    <div className="body">
        <Jogo play={play} newArrPalavra={newArrPalavra} arrPalavra={arrPalavra} startGame={startGame} gameState={gameState} forcaGuess={forcaGuess}/>
        <Letras disableButtons={disableButtons} keyGuess={keyGuess} />
    </div>
  );
}

export default App
