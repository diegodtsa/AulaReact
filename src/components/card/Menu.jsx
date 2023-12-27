import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <Link to='/'> Home |</Link>
        <Link to='/SobreNos'> Sobre Nós |</Link>
        <Link to='/Contato'> Contato |</Link>
        <Link to='/NossosClientes'> Nossos Clientes |</Link>
        <Link to='/Localizacao'> Localização |</Link>    
    </div>
  )
}

export default Menu