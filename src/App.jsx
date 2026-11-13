import { useState } from "react";
import Header from './Header';
import './App.css'
import { mock1 } from "./constants/users.js"
import Resultados from "./Resultados"
import CONFIG from "./config/config.js"
import Formulario from "./Formulario";

function App() {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const callServer = async (parametro) => {
    console.log("click")
    if (CONFIG.use_server) {
      try {
        let queryparams;
        if (parametro == "all") {
          queryparams = "?limit=" + CONFIG.num_items;
        } else {
          queryparams = "/search?q=" + query;
        }
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        const data = await response.json();
        console.log(data);
        setResultado(data.users);
        setError(null)
      } catch (error) {
        console.log(error);
        setError({ description: error.message });
      }
    } else {
      setResultado(mock1.users)
      setError(null)
    }
  }

  return (
    <>
      <div className="App">
        <Header />
        <h2 id="buscador">Buscar usuarios </h2>
        <Formulario contenido={query} setContenido={setQuery} callServer={callServer} />
        <button id="botonall" onClick={() => callServer("all")}>Buscar todos</button>
        {error && <h1> Ha habido un error:{error.description} </h1>}
        {resultado && <Resultados resultado={resultado} ></Resultados>}
      </div>
    </>
  )
}

export default App
