import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Pagina Home</h1>
        <Link to={"/sobre"}>ir para pagina Sobre</Link>
        <br />
        <Link to={"/cadastro"}>ir para pagina Cadastro</Link>
    </div>
  )
}
