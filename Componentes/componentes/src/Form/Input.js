import React from 'react';

function Input({ label, name, id, ...props}) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={name} id={id} {...props} />
    </div>
  );
}

export default Input;
