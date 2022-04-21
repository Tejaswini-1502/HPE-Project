import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import HomeContent from './HomeContent';
import { booksdata } from '../data'

function Home() {
  return (
    <main>
        <Header/>
        <Navbar/>
        <HomeContent data={booksdata}/>
        <Footer/>
    </main>
  )
}

export default Home;