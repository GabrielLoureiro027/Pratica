import React from 'react'
import { Link } from 'react-router-dom'
import Sobre from '../Sobre'

export default function Cadastro() {
  return (
    <div>
      <h1>Pagina de cadastro</h1>
      <Link to={'/'}>Ir para pagina de Home</Link>
      <br />
      <Link to={'/sobre'}>Ir para pagina de Sobre</Link>
    </div>
  )
}
