import React, { useState } from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  let [modal, setModal] = useState(false)

  return <div>
    <p>{modal ? 'Modal Aberto':'Modal Fechado'}</p>
    <Modal modal={modal} setModal={setModal}/>
    <ButtonModal setModal={setModal} />
  </div>;
};

export default App;
