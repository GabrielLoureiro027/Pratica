import React from 'react'
import { Link } from 'react-router-dom'

export default function Sobre() {
  return (
    <div>
        <h1>Pagina Sobre</h1>
        <Link to={"/"}>Voltar para pagina Home</Link>
        <br />
        <Link to={"/cadastro"}>Voltar para pagina Cadastro</Link>
    </div>
  )
}
