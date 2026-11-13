
import reactLogo from './assets/react.svg'

export default function Header(props) {
    return (
        <div id="cabecera" >
            <img className="logo" src =  {reactLogo} alt="el logo de la página" />
            <h3 className ="mensaje"> Bienvenido a la página de Antonio Hernandez Jimenez</h3>
        </div >)
}