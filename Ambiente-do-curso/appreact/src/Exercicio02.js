import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29dbd5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd345', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet', 
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  }

];


const Exercicio02 = () => {
  
const data = produtos.filter(({preco}) => Number(preco.replace('R$', '').trim()) > 1500);


  return (
    <>
    <section>
      {data.map(({id, nome, preco, cores}) => (
        <div key={id}>
          <h1 style={{fontFamily: 'Lucida sans'}}>{nome}</h1>
          <p>Preço: {preco}</p>
          <ul>{cores.map((cor) => (
            <li style={{backgroundColor: cor, fontFamily: 'Poppins', color: 'white', fontWeight: 900}} key={cor} >{cor}</li>
          ))}</ul>
        </div>
      ))}
    </section>
    
    </>
  )
}


export default Exercicio02;
