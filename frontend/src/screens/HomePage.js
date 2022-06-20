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

  let highestRatedProducts = products.filter(product => product.rating >= 4)
  let mostLikedProducts = products.filter(product => product.liked_percent >= 90)
  let awardWinnerProducts = products.filter(product => product.awards.length > 0)

  useEffect(() => {
    dispatch(listBooks())
  }, [dispatch])

  return (
    <main>
        <Header/>
        <Navbar/>
        { loading ? <Loader/>  : 
          error ? <Message variant='danger'>{error}</Message> :
          <>
            <div className="home">
                <SearchBar/>
                <Container>
                  <div className="home_content">
                        <ContentSection title='Highest Rated' data={highestRatedProducts}/>
                        <ContentSection title='Most Liked' data={mostLikedProducts}/>
                        <ContentSection title='Award Winners' data={awardWinnerProducts}/>
                  </div>
                </Container>
            </div>
            <Footer/>
          </>
        }
    </main>
  )
}

export default HomePage;