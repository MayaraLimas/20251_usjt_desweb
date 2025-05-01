// rafce
import React from 'react'

const Pedido = (props) => {
  return (
    <div className="d-flex">
      <div className="d-flex align-items-center">
        <i className={`fa-solid fa-${props.icone} fa-2x`}></i>
      </div>
      <div className="ms-3 border border-danger flex-grow-1">
        <h4 className="text-center">
          {props.titulo}
        </h4>
        <p className="text-center">
          {props.descricao}
        </p>
      </div>
    </div>
  )
}

export default Pedido