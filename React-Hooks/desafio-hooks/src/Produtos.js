import React from 'react';

const Produtos = ({ dados }) => {
  return (
    <>
    <h1>{dados.nome}</h1>
    <p>{dados.preco}</p>
    <p>{dados.id}</p>
    </>
  );
}

export default Produtos;
