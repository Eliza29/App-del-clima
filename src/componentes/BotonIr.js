import {useHistory} from 'react-router-dom'
import {Boton} from './../elementos/estilos'


const BotonIr = ({cord}) => {

    let history = useHistory()

    const irRuta = () =>{
        if(history.location.pathname === "/forecast"){
            history.push("/")
            
        }else{
            history.push("/forecast")
            localStorage.setItem('coordenadas',JSON.stringify(cord));
        }
    }

    return (  
        <Boton onClick={irRuta}>
            {(history.location.pathname === "/forecast")? 'Regresar':'Siguientes 7 dias'}

        </Boton>
    );
}
 
export default BotonIr;