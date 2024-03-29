import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <Link to={`/products/${book._id}`} key={book._id} className="link book_card">
      <Card style={{width: '12rem',zIndex:'0'}}>
          <div className="book_card_img">
              <Card.Img variant='top' src={book.image_url} style={{width:'100%',height:'100%',objectFit:'fill'}} />
          </div>
          <Card.Body>
              <Card.Title style={{height:'50px',fontSize:'16px',fontWeight:'bold'}}>{(book.title.length < 45) ? book.title : book.title.substring(0,35)+'...'}</Card.Title>
              <Card.Text style={{height:'50px',fontSize:'12px',margin:'3px 0'}}>{(book.author.length < 50) ? book.author : book.author.substring(0,45)+'...'}</Card.Text>
              <Card.Text variant='bottom' style={{fontSize:'14px',fontWeight:'bold',color:'Highlight'}}>{"$ "+book.price}</Card.Text>
          </Card.Body>
      </Card>
    </Link>
  )
}

export default BookCard