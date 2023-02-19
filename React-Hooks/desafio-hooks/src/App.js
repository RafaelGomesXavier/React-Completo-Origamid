import React from 'react';

const App = () => {
  const [dados, setDados] = React.useState();

  async function handleClick(event) {
    const promise = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const jsonResponse = await promise.json();
    setDados(jsonResponse);
  }

  return (
    <React.Fragment>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        tablet
      </button>

      <div>
        <h1>{dados}</h1>
      </div>
    </React.Fragment>
  );
};

export default App;
