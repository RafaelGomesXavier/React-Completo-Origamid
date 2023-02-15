import React from 'react';

const titulo = <h1>Este é um titulo</h1>

const App = () => {
  const soma = (a, b) => {
    return a + b
  }
  const nome = Math.random();
  const ativo = false;
  const carro = {
    rodas: '4',
    portas: '4',
    bancos: '5',
  }
  const estilo = {
    color: 'tomato',
    backgroundColor: 'orange',
    fontFamily: 'Poppins'
  }
  return (
    <>
    {titulo}
    <p style={estilo} className={ativo ? 'ativo' : 'inativo'}>{nome * 100}</p>
    <p>{new Date().getTime() / 1000}</p>
    <span>{soma(2, 5)}</span>
    <h2 style={estilo}>{`O novo Honda tem: ${carro.rodas} rodas, ${carro.portas} portas e ${carro.bancos} bancos`}</h2>
    </>
  )
};

export default App;
