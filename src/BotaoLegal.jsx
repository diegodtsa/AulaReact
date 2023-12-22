import { buildQueries } from '@testing-library/react'
import React from 'react'
import './BotaoLegal.css'

const BotaoLegal = ({texto, emoji}) => {
  return (
   <button className='botao-legal'>
    {emoji} {texto}
   </button>
  )
}

export default BotaoLegal