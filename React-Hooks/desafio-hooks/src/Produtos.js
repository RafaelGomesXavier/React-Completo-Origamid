import React from 'react';

const Produtos = ({ dados }) => {
  return (
    <div style={{fontFamily: 'IBM PLEX MONO', fontWeight: '600', border: '1px solid', padding: '1rem' }}>
      <h1 style={{display: 'block', fontSize: '3em', textAlign: 'center', fontFamily: 'JetBrainsMono Nerd Font', color: '#4b7c64'}}>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />

      {console.log()}
    </div>
  );
};

export default Produtos;
