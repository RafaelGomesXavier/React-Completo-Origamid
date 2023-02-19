import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);
    const accessApisProduto = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const jsonResponse = await accessApisProduto.json();
    setDados(jsonResponse);
    setLoading(false);
  }

  return (
    <>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        tablet
      </button>
      {loading && <p>Carregando..................</p>}
      {/* Verificando se dados existe pois estava dando erro, outra forma de utilizar é usando dados?.algumaCoisa */}
      {!loading && dados && <Produtos dados={dados} />}
    </>
  );
};

export default App;
