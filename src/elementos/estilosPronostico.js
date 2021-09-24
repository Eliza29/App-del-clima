import styled from 'styled-components'

const ContenedorDaily = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    img{
        filter: drop-shadow(0 0 2px #ACACAC);
        width: 62px;
    }
`
const TituloPronostico = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 1rem;
`

const ContenedorArrDaily = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const Dia = styled.span`
    font-weight:600;
`
export {ContenedorDaily, ContenedorArrDaily, Dia, TituloPronostico}