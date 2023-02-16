import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';
import Title from './Title/Title';

const App = () => {
  return (
    <>
      <Header />
      <Title texto="Meu primeiro titulo" />
      <Title texto="Meu segundo titulo" />
      <Form />
      <Footer />
    </>
  );
};

export default App;
