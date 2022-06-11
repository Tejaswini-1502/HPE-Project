import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
import { booksdata } from '../data' // data file
import ContentSection from '../components/ContentSection';
import { Container } from 'react-bootstrap';
// import { listBooks } from '../actions/bookActions'

function HomePage() {
  // const dispatch = useDispatch()
  // const bookList = useSelector(state => state.bookList)
  // const { loading, error, books} = bookList
  
  // useEffect(() => {
  //   dispatch(listBooks())
  // }, [dispatch])

  return (
    <main>
        <Header/>
        <Navbar/>
        <div className="home">
            <SearchBar/>
            <Container>
              <div className="home_content">
              {/* { loading ? <Loader/>  : 
                error ? <Message variant='danger'>{error}</Message> :
                <>
                  <ContentSection title='Recent Releases' data={booksdata}/>
                  <ContentSection title='Highest Rated' data={booksdata}/>
                  <ContentSection title='Most Liked' data={booksdata}/>
                  <ContentSection title='Award Winners' data={booksdata}/>
                </>
              } */}
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

export default HomePage;