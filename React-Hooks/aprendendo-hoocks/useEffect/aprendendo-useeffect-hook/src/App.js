import React, { useState } from 'react';
import './App.css';
import Produto from './Produto';

const App = () => {
  const [ativar, setAtivar] = useState(null);
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  const anularDados = () => {
    setDados(null);
    setAtivar(!ativar);
  };

  const fetchApi = async () => {
    setAtivar(!ativar);
    setLoading(true);
    try {
      const acessApi = await fetch(
        'https://deckofcardsapi.com/api/deck/new/draw/?count=1',
      );
      const reponseApi = await acessApi.json();
      setDados(reponseApi);
    } catch {
      Error('Não deu');
    }

    setLoading(false);
  };

  return (
    <div>
      {loading && <p>Carregando......</p>}
      {ativar && dados && <Produto conteudo={dados} />}
      <button
        className="button-fetch"
        onClick={fetchApi}
        disabled={ativar}
        style={ativar ? { display: 'none' } : { display: 'block' }}
      >
        {ativar ? 'Desativar' : 'Ativar'}
      </button>
      {ativar && <button onClick={anularDados}>Resetar</button>}
    </div>
  );
};

export default App;
