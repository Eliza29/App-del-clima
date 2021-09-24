import {Contenedor, BoxLeft, BoxRight, Title, Input, ContenedorClima} from './elementos/estilos'
import InfoClima from './componentes/InfoClima'
import Inicio from './componentes/Inicio'
import {useState} from 'react'

function App() {  

  const [show, setShow] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [word, cambiarWord] = useState('')  


  const handleSubmit = evt =>{
    evt.preventDefault()

    if(keyword){
      setShow(true)
      cambiarWord(keyword)
    }else{
      setShow(false)

    }
  }
  const handleChange = evt =>{
    setKeyword(evt.target.value) 
  }

  return (  
    <Contenedor>
        <BoxLeft>
            <Title>¡Encuentra el clima de tu ciudad!</Title>
        </BoxLeft>
        <BoxRight>
          <ContenedorClima>
            <form onSubmit={handleSubmit}>
              <Input type="text" onChange={handleChange} value={keyword} placeholder="ej:Lima,peru"/>
            </form>
            {show?
              <>
               <InfoClima keyword={word}></InfoClima>
              </> 
            :      
              <Inicio/> 
            }
            
          </ContenedorClima>
        </BoxRight>
        
    </Contenedor>
  );
}

export default App;
