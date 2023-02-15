import React from 'react';

const LidandoComArrays = () => {
  const livros = [
    {nome: 'A Game of Thrones', ano: 1996 },
    {nome: 'A Clash of King', ano: 1998 },
    {nome: 'A Storm of Sowrds', ano: 2003 }
  ];

  return (
    <>
      <ul>
        {livros.filter(({ano}) => ano >= 1998)
        .map(({nome, ano}) => <li key={nome}>{nome}, {ano}</li>)}
      </ul>
    </>
  );
};

export default LidandoComArrays;
