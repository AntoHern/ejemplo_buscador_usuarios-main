import{useState} from "react";
import Header from './Header';
import './App.css'

function App() {
  const [query, setQuery] = useState(""); 
 
  const callServer = () => {
    console.log("click")
  }

  return (
    <>
      <div className = "App">
        <Header/> 
        <h2 id ="buscadir">Buscar usuarios </h2>
        <input type = "text" id = "query" value ={query} onChange = {e=>setQuery(e.target.value)} placehoilder = "texto a buscar"/>
        <button id = "botonsearch" onClick={()=>callServer()}>Buscar</button>
      </div>
      
    </>
  )
}

export default App
