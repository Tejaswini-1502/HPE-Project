import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { booksdata } from '../data'; // comment later
import { Button, Container } from 'react-bootstrap'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
// import { listBookDetails } from '../actions/bookActions'

function ProductPage() {
  const id = useParams().id;
  // const [book, setBook] = useState({ genres: [], awards: [] }) // use this for useState - folder 5 video 3
  const book = booksdata.find((b) => b.id === Number(id))
  
  // const dispatch = useDispatch()
  // const bookDetails = useSelector(state => state.bookDetails)
  // const { loading, error, book } = bookDetails
  // useEffect(() => {
  //   dispatch(listBookDetails(id))
  // }, [id])
  return (
    <div>
      <Header/>
      <Navbar/>
      <Container>
      {/* { loading ? <Loader/>  : 
        error ? <Message variant='danger'>{error}</Message> :
        <div className="book_details">
          <div className="book_details_content">
            <div className="book_img">
              <img src={book.image_url} alt="" />
            </div>
            <div className="book_info">
              <div className="book_title">
                <h2>{book.title}</h2>
                <p style={{fontWeight:'300'}}><span style={{fontWeight:'500'}}>By: </span>{book.author} <span style={{fontWeight:'500'}}>| Publisher: </span>{book.publisher}</p>
                <p><span className="book_rating">
                  <i>{book.rating >= 1? <BsStarFill/> : book.rating >= 0.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{book.rating >= 2? <BsStarFill/> : book.rating >= 1.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{book.rating >= 3? <BsStarFill/> : book.rating >= 2.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{book.rating >= 4? <BsStarFill/> : book.rating >= 3.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{book.rating >= 5? <BsStarFill/> : book.rating >= 4.5 ? <BsStarHalf/> : <BsStar/>}</i>
                </span> | <span style={{fontWeight:'400',color:'sienna'}}> {book.num_ratings} (Reviews)</span></p>
                <p style={{fontSize:'28px',color:'darkcyan',marginTop:'3.5em'}}><b>$ {book.price}</b></p>
                <Button style={{marginTop:'1em'}}>Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="book_description">
            <h4>About the Book</h4>
            <p>{book.description}</p>
          </div>
          <div className="other_details">
            <div className="details1">
              <h4>Product Details</h4>
              <p><b>ISBN: </b>{book.isbn}</p>
              <p><b>Format: </b>{book.bookformat}</p>
              <p><b>Pages: </b>{book.pages}</p>
            </div>
            <div className="details2">
              <h4>Related Categories</h4>
              <p>{
                book.genre.map((element) => {
                  return <span>{"["+element+"] "}&nbsp;&nbsp;</span>
                })
              }</p>
            </div>
          </div>
        </div> } */}
        <div className="book_details">
          <div className="book_details_content">
            <div className="book_img">
              <img src={book.image_url} alt="" />
            </div>
            <div className="book_info">
              <div className="book_title">
                <h2>{book.title}</h2>
                <p style={{fontWeight:'300'}}><span style={{fontWeight:'500'}}>By: </span>{book.author} <span style={{fontWeight:'500'}}>| Publisher: </span>{book.publisher}</p>
                <p><span className="book_rating">
                  <i>{book.rating >= 1? <BsStarFill/> : book.rating >= 0.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{book.rating >= 2? <BsStarFill/> : book.rating >= 1.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{book.rating >= 3? <BsStarFill/> : book.rating >= 2.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{book.rating >= 4? <BsStarFill/> : book.rating >= 3.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{book.rating >= 5? <BsStarFill/> : book.rating >= 4.5 ? <BsStarHalf/> : <BsStar/>}</i>
                </span> | <span style={{fontWeight:'400',color:'sienna'}}> {book.num_ratings} (Reviews)</span></p>
                <p style={{fontSize:'28px',color:'darkcyan',marginTop:'3.5em'}}><b>$ {book.price}</b></p>
                <Button style={{marginTop:'1em'}}>Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="book_description">
            <h4>About the Book</h4>
            <p>{book.description}</p>
          </div>
          <div className="other_details">
            <div className="details1">
              <h4>Product Details</h4>
              <p><b>ISBN: </b>{book.isbn}</p>
              <p><b>Format: </b>{book.bookformat}</p>
              <p><b>Pages: </b>{book.pages}</p>
            </div>
            <div className="details2">
              <h4>Related Categories</h4>
              <p>{
                book.genre.map((element) => {
                  return <span>{"["+element+"] "}&nbsp;&nbsp;</span>
                })
              }</p>
            </div>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default ProductPage