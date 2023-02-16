import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';


const App = () => {
  const {pathname} = window.location;
  let Pagina = Home

  pathname === '/produtos' ? Pagina = Produtos : Pagina = Home;
 
  

  
  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
export const Pagina = Home;
