import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar'
import { booksdata } from '../data'
import ContentSection from '../components/ContentSection';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <main>
        <Header/>
        <Navbar/>
        <div className="home">
            <SearchBar/>
              <Container>
                <div className="home_content">
                    <ContentSection title='Recent Releases' data={booksdata}/>
                    <ContentSection title='Highest Rated' data={booksdata}/>
                    <ContentSection title='Most Liked' data={booksdata}/>
                    <ContentSection title='Award Winners' data={booksdata}/>
                </div>
              </Container>
        </div>
        <Footer/>
    </main>
  )
}

export default Home;