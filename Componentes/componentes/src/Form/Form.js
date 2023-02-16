import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <Input label="Nome" name="nome" id="nome" required />
      <Input label="Password" name="password" id="password" />
      <Button />
    </form>
  );
};

export default Form;
