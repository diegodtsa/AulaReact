import React from 'react'
import Menu from '../components/card/Menu'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Home } from '@mui/icons-material'


const Inicio = () => {
  return (
    <div>
        
        <Menu/>
        <Button 
        variant='contained' 
        color='success'
        size='large'
        endIcon={<Home/>}
        >Clique em Mim
        </Button>
        <br />
        <br />
        <TextField label = 'Digite Seu Nome'/>
        |<div>
            Inicio
        </div>
        <InputLabel id="label-sexo">Sexo</InputLabel>
        <Select label="Sexo" labelId='label-sexo'>
            <MenuItem>Masculino</MenuItem>
            <MenuItem>Feminino</MenuItem>
        </Select>
        
    </div>
  )
}

export default Inicio