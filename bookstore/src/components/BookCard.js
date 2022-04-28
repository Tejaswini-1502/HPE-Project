import React from 'react'
import { Card } from 'react-bootstrap'

const BookCard = ({ book }) => {
  return (
    <Card style={{width: '13rem',zIndex:'0'}}>
        <div className="book_card_img">
            <Card.Img variant='top' src={book.image_url} style={{width:'100%',height:'100%',objectFit:'fill'}} />
        </div>
        <Card.Body>
            <Card.Title style={{fontSize:'16px',fontWeight:'bold'}}>{book.title}</Card.Title>
            <Card.Text style={{fontSize:'12px',margin:'3px 0'}}>{book.author}</Card.Text>
            <Card.Text style={{fontSize:'14px',fontWeight:'bold',color:'Highlight'}}>{"$ "+book.price}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default BookCard