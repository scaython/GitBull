import { Fragment, useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import MainContent from './components/layout/MainContent'
import Footer from './components/layout/Footer'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import NotFound from './pages/NotFound'
import GithubProvider from './context/githubContext'





function App() {
  

  return (
    <Fragment>
      
      <GithubProvider>
       <Navbar />
       <MainContent/>      
       <Footer />
      </GithubProvider>

    </Fragment>
  )
}

export default App
