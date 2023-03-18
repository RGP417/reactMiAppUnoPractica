import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
function Testimonio(props) {
  return (
   <div className='contenedor-testimonio'>
    <img 
      className='imagen-testimonio'
      src={require(`../imagenes/${props.nombre}.png`)}
      alt='imagen de Emma' />
    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>
        <strong>{props.nombre.toUpperCase()}</strong> en {props.pais}</p>
      <p className='cargo-testimonio'>
        {props.cargo} en <b>{props.empresa}</b></p>
      <p className='texto-testimonio'>"
      {props.testimonio}"</p>
    </div>
   </div>
  );
}

export default Testimonio;