import {ContenedorInicio} from '../elementos/estilos'
import imagenClima from './../imagenes/paraguas.svg'

const Inicio = () => {
    return ( 
        <ContenedorInicio>
            <img src={imagenClima} alt="imagen de los climas"></img>
            <p> Para iniciar, realice una búsqueda del clima de la ciudad y pais de su interes </p>
           
        </ContenedorInicio>
    );
}
 
export default Inicio;