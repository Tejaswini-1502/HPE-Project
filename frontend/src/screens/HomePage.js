import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ContentSection from '../components/ContentSection';
import { Container } from 'react-bootstrap';
import { listBooks } from '../actions/bookActions'

function HomePage() {
  const dispatch = useDispatch()
  const bookList = useSelector(state => state.bookList)
  const { loading, error, products} = bookList
  
  useEffect(() => {
    dispatch(listBooks())
  }, [dispatch])

  return (
    <main>
        <Header/>
        <Navbar/>
        <div className="home">
            <SearchBar/>
            <Container>
              <div className="home_content">
                { loading ? <Loader/>  : 
                  error ? <Message variant='danger'>{error}</Message> :
                  <>
                    <ContentSection title='Recent Releases' data={products}/>
                    <ContentSection title='Highest Rated' data={products}/>
                    <ContentSection title='Most Liked' data={products}/>
                    <ContentSection title='Award Winners' data={products}/>
                  </>
                }
              </div>
            </Container>
        </div>
        <Footer/>
    </main>
  )
}

export default HomePage;