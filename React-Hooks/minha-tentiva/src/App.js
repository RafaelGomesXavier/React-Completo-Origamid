import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Produto from './components/Produto';

function App() {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const handleClick = async ({ target }) => {
    setLoading(true)
    const url = `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
    const acessandoApiProduto = await fetch(url);
    const jsonResponse = await acessandoApiProduto.json();
    setData(jsonResponse);
    setLoading(false)
  }
  


  return (
    <div className="App">
      <Button
        handleClick={handleClick}
        conteudo={'Notebook'}
        estilo={{
          backgroundColor: '#224f',
          color: '#fff',
          border: 'none',
          borderRadius: '3px',
          margin: '1rem',
          padding: '.5rem 1rem',
        }}
      />
      <Button
        handleClick={handleClick}
        conteudo={'Smartphone'}
        estilo={{
          backgroundColor: '#224f',
          color: '#fff',
          border: 'none',
          borderRadius: '3px',
          margin: '1rem',
          padding: '.5rem 1rem',
        }}
      />
      <Button
        handleClick={handleClick}
        conteudo={'Tablet'}
        estilo={{
          backgroundColor: '#224f',
          color: '#fff',
          border: 'none',
          borderRadius: '3px',
          margin: '1rem auto',
          padding: '.5rem 1rem',
        }}
      />
      {loading && <p>Carregando.........................</p>}
      {!loading && data && <Produto data={data}/>}
    </div>
  );
}

export default App;
