import Jogo from "./Jogo";
import Letras from "./Letras/Letras";
import Chute from "./Chute";

import _ from 'lodash';
import { useRef, useState } from "react";
import palavras from "../palavras";

import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';
const forcaImg = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

function App() {

  const wrongCounter = useRef(0);
  const arrPalavra = useRef([]);

  const [disableAllButtons, setDisableAllButtons] = useState(true);
  const [arrGuessedButton, setArrGuessedButton] = useState([]);

  const [guessedArrPalavra, setGuessedArrPalavra] = useState([]);

  const [forcaGuess, setForcaGuess] = useState(forcaImg[0]);
  const [gameState, setGameState] = useState('black');

  const [inputValue, setInputValue] = useState('');
//-----------------------------

  function startGame() {
    wrongCounter.current = 0;

    const newPalavras = palavras.sort(() => Math.random() - 0.5);
    if (arrPalavra.current.join('') === newPalavras[0]) {
      startGame();
    } else {
      /* console.log(newPalavras[0]); */
      const TEMPArrPalavra = newPalavras[0].split('');
      arrPalavra.current = [...TEMPArrPalavra];
      setGuessedArrPalavra(Array(TEMPArrPalavra.length).fill('_'));
  
      setDisableAllButtons(false);
      setArrGuessedButton([]);
  
      setGameState('black');
      setForcaGuess(forcaImg[0]);
    }
  }
  //--------------
  function buttonGuess(letraFromMap) {

    const TEMPguessedArrPalavra = [...guessedArrPalavra];

    let rightGuess = false;
    arrPalavra.current.forEach((letra, i) => {
        if (letraFromMap === _.deburr(letra)) {
          /* console.log(`Letra: ${letra}\nIndice: ${i}`); */
          TEMPguessedArrPalavra[i] = letra;
          rightGuess = true;
        }
    });
    /* console.log(TEMPguessedArrPalavra); */
    setGuessedArrPalavra([...TEMPguessedArrPalavra]);
    //----
    if (rightGuess === false) {
      wrongCounter.current++;
      setForcaGuess(forcaImg[wrongCounter.current]);
    }
    if (wrongCounter.current === 6) {
      setGameState('red');
      setDisableAllButtons(true);
      setGuessedArrPalavra([...arrPalavra.current]);
    }
    //para verificar o acerto
    if (TEMPguessedArrPalavra.join('') === arrPalavra.current.join('')) {
      setGameState('green');
      setDisableAllButtons(true);
    }
  }
  //--------------
  function inputGuess() {

    if (!inputValue) {
      alert('Digite uma palavra para poder chutar');
    } else {
      setGuessedArrPalavra([...arrPalavra.current]);
      setDisableAllButtons(true);
      if (inputValue === _.deburr(arrPalavra.current.join(''))) {
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
          startGame={startGame}
          arrPalavra={arrPalavra}
          guessedArrPalavra={guessedArrPalavra}  
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
