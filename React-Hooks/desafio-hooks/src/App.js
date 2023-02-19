import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [dados, setDados] = React.useState(null);

  async function handleClick(event) {
    const promise = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const jsonResponse = await promise.json();
    setDados(jsonResponse);
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
      {/* Verificando se dados existe pois estava dando erro, outra forma de utilizar é usando dados?.algumaCoisa */}
      {dados && <Produtos dados={dados} />}
    </>
  );
};

export default App;
