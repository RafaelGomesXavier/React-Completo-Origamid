import React from 'react'

const Produto = ({ data }) => {
  return (
    <section className='produtos'>
      <header>
        <h1>{data.nome}</h1>
      </header>
      <section>
        <p>R$ <span>{data.preco}</span></p>
        <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
      </section>
    </section>
  )
}

export default Produto
