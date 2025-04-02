import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Cadastro from '../../pages/cadastro'

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
