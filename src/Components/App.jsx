import Jogo from "./Jogo";
import Letras from "./Letras/Letras";
import Chute from "./Chute";

import _ from 'lodash';
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

  const [disableAllButtons, setDisableAllButtons] = useState(true);
  const [arrGuessedButton, setArrGuessedButton] = useState([]);

  const [newArrPalavra, setNewArrPalavra] = useState([]);

  const [forcaGuess, setForcaGuess] = useState(forcaImg[0]);
  const [gameState, setGameState] = useState('black');

  const [inputValue, setInputValue] = useState('');
//-----------------------------

  function startGame() {    
    const newPalavras = palavras.sort(() => Math.random() - 0.5);
    const palavra = newPalavras[0];
    /* console.log(palavra); */
    arrPalavra = palavra.split('');
    guessedArrPalavra = Array(arrPalavra.length).fill('_');

    setDisableAllButtons(false);
    setArrGuessedButton([]);

    wrongCounter = 0;
    setForcaGuess(forcaImg[0]);

    setGameState('black');
    setNewArrPalavra([]);
  }
  //-----------------
  function buttonGuess(event) {
    const buttonPressed = event.target.textContent;

    let rightGuess = false;
    arrPalavra.forEach((letra, i) => {
        if (_.deburr(letra) === buttonPressed) {
          /* console.log(`Letra: ${letra}\nIndice: ${i}`); */
          guessedArrPalavra[i] = letra;
          rightGuess = true;
        }
    });
    /* console.log(guessedArrPalavra); */
    setNewArrPalavra([...guessedArrPalavra]);
    //-----
    if (rightGuess === false) {
      wrongCounter++;
      setForcaGuess(forcaImg[wrongCounter]);
    }
    if (wrongCounter === 6) {
      setGameState('red');
      setDisableAllButtons(true);
      setNewArrPalavra([...arrPalavra]);
    }
    //-----
    if (guessedArrPalavra.join('') === arrPalavra.join('')) {
      setGameState('green');
      setDisableAllButtons(true);
    }
  }
  //-----------------
  function inputGuess() {
    if (!inputValue) {
      alert('Digite uma palavra para poder chutar');
    } else {
      setNewArrPalavra([...arrPalavra]);
      setDisableAllButtons(true);
      if (inputValue === _.deburr(arrPalavra.join(''))) {
        setGameState('green');
      } else {
        setGameState('red');
        setForcaGuess(forcaImg[6]);
      }
      setInputValue('');
    }
  }
  function inputChange(event) {
    setInputValue(event.target.value);
  }

//-----------------------------
  return (
    <div className="body">
        <Jogo 
          arrPalavra={arrPalavra} 
          newArrPalavra={newArrPalavra} 
          startGame={startGame} 
          gameState={gameState} 
          forcaGuess={forcaGuess} 
        />
        <Letras 
          disableAllButtons={disableAllButtons} 
          buttonGuess={buttonGuess} 
          arrGuessedButton={[arrGuessedButton, setArrGuessedButton]}
        />
        <Chute 
          disableAllButtons={disableAllButtons}
          inputChange={inputChange}
          inputGuess={inputGuess}
          inputValue={inputValue}
        />
    </div>
  );
}

export default App
