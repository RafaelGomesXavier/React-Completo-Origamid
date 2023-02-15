import React from 'react';

// mostre os dados da aplicação, como apresentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const ExercicioLuana = () => {
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      {
        nome: 'Notebook',
        preco: 'R$ 2500',
      },
      {
        nome: 'Geladeira',
        preco: 'R$ 3000',
      },
      {
        nome: 'Smartphone',
        preco: 'R$ 1500',
      },
    ],
    situacao: 'ativa',
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      {
        nome: 'Notebook',
        preco: 'R$ 2500',
      },
      {
        nome: 'Geladeira',
        preco: 'R$ 3000',
      },
      {
        nome: 'Smartphone',
        preco: 'R$ 1500',
      },
      {
        nome: 'Guitarra',
        preco: '3500',
      },
    ],
    situacao: 'inativa',
  };

  const dados = mario;
  const { cliente, idade, compras, situacao } = dados;
  const total = compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);
  return (
    <>
      <p>Nome: {cliente}</p>
      <p>Idade: {idade}</p>
      <p>
        Situacao:{' '}
        <span
          style={situacao === 'ativa' ? { color: 'green' } : { color: 'red' }}>
          {situacao}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      <p>{total >= 10000 ? 'Você esta gastando demais' : ''}</p>
    </>
  );
};

export default ExercicioLuana;
