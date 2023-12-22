import React from 'react'
import './Titulo.css'

const Titulo = ({texto}) => {
  return (
    <div>
        <h1 className='titulo'> 
        {texto}
        </h1>
    </div>
  )
}

export default Titulo