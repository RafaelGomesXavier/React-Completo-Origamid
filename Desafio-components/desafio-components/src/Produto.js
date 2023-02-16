import React from 'react';

// 1. va para o arquivo Produtos.js
// 6. a propriedade conteúdo esta sendo ({desestruturada}) na function Produto
// 7. e sendo retornada dentro de uma section
// 8. ela esta acessando a propriedade .nome

const Produto = ({ nome, propriedades }) => {
  return (
    <section
      style={{
        border: '1px solid',
        padding: '1rem',
        margin: '1rem 0',
      }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </section>
  );
};

export default Produto;
