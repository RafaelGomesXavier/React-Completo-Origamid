import React from 'react';
import Titulo from './Titulo';
import Produto from './Produto';

const produtos = [
  { nome: 'Notebook', propriedades: ['512gb ram', '2gb'] },
  { nome: 'Smartphone', propriedades: ['512gb ram', '2gb'] },
];

// 2. Nota-se que modifiquei o array utilizando o map
// 3. neste map estou buscando cada (produto) e retornando <Produto /> um componente
// 4. Este componente recebe como (tag[conteudo]) atributo cada (produto) buscado pelo map (item 3.)
// 5. volte para o arquivo Produto.js

const Produtos = () => {
  return (
    <section>
      <Titulo content="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />

        
      ))}
      
    </section>
  );
};

export default Produtos;
