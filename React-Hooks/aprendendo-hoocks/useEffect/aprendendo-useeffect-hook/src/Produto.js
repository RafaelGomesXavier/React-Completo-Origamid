import React from 'react';

const Produto = ({ conteudo }) => {
  return (
    <div className='container'>
      <h1>
        {conteudo.cards[0].value} {conteudo.cards[0].suit}
      </h1>
      <img
        src={conteudo.cards[0].images.png}
        alt={`carta ${conteudo.cards[0].value} de ${conteudo.cards[0].suit}`}
      />
    </div>
  );
};

export default Produto;
