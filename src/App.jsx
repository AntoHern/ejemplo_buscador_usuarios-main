import { useState } from "react";
import Header from './Header';
import './App.css'
import { mock1 } from "./constants/users.js"
import Resultados from "./Resultados"
import CONFIG from "./config/config.js"

function App() {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);

  const callServer = async() => {
    console.log("click")
    if (CONFIG.use_server) {
      const response = await fetch(CONFIG.server_url);
      const data = await response.json();
      console.log(data);
      setResultado(data.users);
    } else {
      setResultado(mock1.users)
    }

  }

  return (
    <>
      <div className="App">
        <Header />
        <h2 id="buscador">Buscar usuarios </h2>
        <input type="text" id="query" value={query} onChange={e => setQuery(e.target.value)} placeholder="texto a buscar" />
        <button id="botonsearch" onClick={() => callServer()}>Buscar</button>


        {resultado && <Resultados resultado={resultado} ></Resultados>}
      </div>

    </>
  )
}

export default App
