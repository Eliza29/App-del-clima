const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre","Octubre","Noviembre","Diciembre"];
const diasSemana = [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const getFecha = (infodt) => {

    const timestamp = infodt
    const date = new Date(timestamp*1000);

    return diasSemana[date.getDay()] + ", " + date.getDate() + " de " + meses[date.getMonth()]
   
}
 
const getTheDay = (infodt) => {

    const timestamp = infodt
    const date = new Date(timestamp*1000);

    return diasSemana[date.getDay()]
   
}

export {getFecha, getTheDay}