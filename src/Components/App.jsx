import alfabeto from "../alfabeto";

function App() {
  return (
    <div className="body">
        <div className="game">
          <img src="./assets/forca0.png"/>
          <button>Escolher Palavra</button>
          <div className="word">
            <p>_ _ _ _ _ _ _ _</p>
          </div>
        </div>

        <div className="keyBoard">
          {alfabeto.map(letra => <button>{letra}</button>)}
        </div>
    </div>
  );
}

export default App
