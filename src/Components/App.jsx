import Jogo from "./Jogo";
import Letras from "./Letras/Letras";

import { useState } from "react";
import palavras from "../palavras";

import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';
const forcaImg = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

let guessedArrPalavra = [];
let arrPalavra  = [];
let wrongCounter = 0;
function App() {

  const [play, setPlay] = useState(false);
  const [disableAllButtons, setDisableAllButtons] = useState(true);
  const [arrGuessedButton, setArrGuessedButton] = useState([]);

  const [newArrPalavra, setNewArrPalavra] = useState([]);

  const [forcaGuess, setForcaGuess] = useState(forcaImg[0]);
  const [gameState, setGameState] = useState('black');
//----------------------

  function startGame() {
    guessedArrPalavra = [];
    
    const newPalavras = palavras.sort(() => Math.random() - 0.5);
    const palavra = newPalavras[0];
    console.log(palavra);
    arrPalavra = palavra.split('');

    setDisableAllButtons(false);
    setArrGuessedButton([]);

    setPlay(true);
    wrongCounter = 0;
    setForcaGuess(forcaImg[0]);

    setGameState('black');
    setNewArrPalavra([]);
  }
  //-----
  function buttonGuess(event) {
    const buttonPressed = event.target.textContent;
    
    if (guessedArrPalavra.length === 0) {
      guessedArrPalavra = Array(arrPalavra.length).fill('_');
      console.log(guessedArrPalavra);
    }

    let rightGuess = false;
    arrPalavra.forEach((letra, i) => {
        if (letra === buttonPressed) {
          console.log(`Letra: ${letra}\nIndice: ${i}`);
          guessedArrPalavra[i] = letra;
          rightGuess = true;
        }
    });
    console.log(guessedArrPalavra);
    setNewArrPalavra([...guessedArrPalavra]);
    //----------
    if (rightGuess === false) {
      wrongCounter++;
      setForcaGuess(forcaImg[wrongCounter]);
    }
    if (wrongCounter === 6) {
      setGameState('red');
      setDisableAllButtons(true);
      setNewArrPalavra([...arrPalavra]);
    }
    //----------
    let counterRight = 0;
    guessedArrPalavra.forEach((palavra, i) => {
      if (palavra === arrPalavra[i]) {
        counterRight++;
      }
    })
    if (counterRight === guessedArrPalavra.length) {
      setGameState('green');
      setDisableAllButtons(true);
    }
}

//----------------------

  return (
    <div className="body">
        <Jogo 
          play={play} 
          newArrPalavra={newArrPalavra} 
          arrPalavra={arrPalavra} 
          startGame={startGame} 
          gameState={gameState} 
          forcaGuess={forcaGuess} 
        />
        <Letras disableAllButtons={disableAllButtons} buttonGuess={buttonGuess} arrGuessedButton={[arrGuessedButton, setArrGuessedButton]}/>
    </div>
  );
}

export default App
