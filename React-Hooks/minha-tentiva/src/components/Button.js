import React from 'react';

const Button = ({ conteudo, estilo, handleClick }) => {
  return (

    <button style={estilo} onClick={handleClick}>
      {conteudo}
    </button>
  )

};

export default Button;
