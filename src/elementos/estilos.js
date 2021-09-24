import styled, {keyframes} from 'styled-components'
import fondo from './../imagenes/julien-di-majo-foto.jpg'
import Theme from './../Theme'


const FlexJustify = styled.div`
    display:flex;
    justify-content:center;
`
const Contenedor = styled.div`
    background-image: url(${fondo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color:white;
    display:flex;
    height: 100%;
    width: 100%;
`
const BoxLeft = styled.div`
    display:none;
    @media only screen and (min-width: 768px) {
        align-self: center;
        color:white;
        display:flex;
        padding:1rem;
        width:50%;
    }

`
const BoxRight =  styled(FlexJustify)`
    background: rgb(16, 16, 58, 46%);
    padding: 1rem;    
    width: 100%;

    @media only screen and (min-width: 768px) {
        width:50%;
    }

`
const ContenedorClima = styled.div`    
    width:90%;
    
`
const Input = styled.input`
    background:#ececec;
    border:none;
    border-radius: 7px;
    padding:7px;
    width:100%;
`
const DivIcon = styled(FlexJustify)`
    align-items: center;
    img{
        filter: drop-shadow(0 0 4px #ACACAC);
    }
`
const DivTemp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DivClima = styled.div`
    background:${Theme.colorAzulino};
    border-radius: 7px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.9rem;
    margin: 2rem 0;
    
    >p{
        display: flex;
        justify-content: space-between;
        margin: 7px 0;
        width:100%;
    }
`
const Ptemp= styled.p`
    font-size: 60px;
    font-weight: 600;
`

const Title = styled.p`
    font-size:40px;
    font-weight: 600;
`
const Boton = styled.button`
    background: #FFC938;
    border: none;
    border-radius:7px;
    color: ${Theme.colorAzulino};
    cursor:pointer;
    font-weight: 700;
    padding: 12px;
    margin: 1rem 0; 
    width: 100%;
`
const spin = keyframes` 
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`
const Loading = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 120px;
    height: 120px;
    margin: -76px 0 0 -76px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #10103A;
    -webkit-animation: ${spin} 2s linear infinite;
    animation: ${spin} 2s linear infinite;

`
const ContenedorInicio = styled(FlexJustify)`
    align-items: center;
    flex-direction: column;
    height: 80%;
    font-size: 18px;
    margin-top: 10%;
    width:100%;
    img{
        width:240px;
    }
    p{
        margin: 2rem 0;
        line-height: 1.5;
    }

`

const BoxMainCLima = styled.div`

    margin-top: 1rem;
`

export {Contenedor, BoxLeft, BoxRight, Boton, Title, ContenedorClima, 
        Input, DivIcon, DivTemp, DivClima, Ptemp, Loading, ContenedorInicio, BoxMainCLima};

        