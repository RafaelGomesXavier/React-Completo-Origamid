import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import Exercicio02 from './Exercicio02';
// import LidandoComArrays from './Arr';
// import App from './App';
// import ExercicioLuana from './exercicio01';

/* <App/>
<ExercicioLuana />
*/

//
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Exercicio02/>
  </React.StrictMode>,
);
