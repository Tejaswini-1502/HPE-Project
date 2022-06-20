import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Loader from '../components/Loader'
import Message from '../components/Message'
import BookCard from '../components/BookCard';
import { listBooks } from '../actions/bookActions'
import { Row, Col } from 'react-bootstrap';

const SearchPage = () => {
  const dispatch = useDispatch()
  const { value } = useParams()
  const bookList = useSelector(state => state.bookList)
  const { loading, error, products} = bookList

  let requiredProducts

  useEffect(() => {
    dispatch(listBooks())
  }, [dispatch])

  if(value === 'highestrated' || value === 'bestsellers'){
    requiredProducts = products.filter(product => product.rating >= 4)
  } else if(value === 'mostliked'){
    requiredProducts = products.filter(product => product.liked_percent >= 90)
  } else if(value === 'awardwinners'){
    requiredProducts = products.filter(product => product.awards.length > 0)
  } else if(value === 'action'){
    requiredProducts = products.filter(product => product.awards.length > 0)
  } else if(value === 'adventure'){
    requiredProducts = products.filter(product => product.awards.length > 0)
  } else if(value === 'fiction'){
    requiredProducts = products.filter(product => product.awards.length > 0)
  } else if(value === 'mystery'){
    requiredProducts = products.filter(product => product.awards.length > 0)
  } else if(value === 'romance'){
    requiredProducts = products.filter(product => product.awards.length > 0)
  } else {
    requiredProducts = products
  }

  return (
    <main>
        <Header/>
        <Navbar/>
        <SearchBar/>
        <Row className='search_page'>
          { loading ? <Loader/>  : 
            error ? <Message variant='danger'>{error}</Message> :
            
                requiredProducts.map((product => {
                  return <Col md={2}><BookCard book={product} key={product._id}/></Col>
                }))
          }
      </Row>
    </main>
  )
}

export default SearchPage