
import React from 'react'

const Produto = ({dados}) => {
  return (
    <div style={{marginLeft:'200px'}}>
      
        <h1>{dados?.nome}</h1>
        <p>Preço: {dados?.preco}</p>

        <img src={dados?.fotos[1].src} alt={dados.fotos[0].titulo}></img>
    </div>
  )
}



export default Produto;