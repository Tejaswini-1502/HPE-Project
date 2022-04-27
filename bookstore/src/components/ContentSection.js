
import React from 'react'
import { Button, Card } from 'react-bootstrap'


function ContentSection(props) {
  return (
        <div className="book_sections">
            <div className="book_sections_title">
                <h2>{props.title}</h2>
                <Button variant="dark">View All</Button>
            </div>
            <div className="book_sections_content" style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    props.data.slice(0, 4).map((book) => {
                        console.log(book);
                        return <Card style={{width: '13rem'}}>
                            <div className="book_card_img">
                                <Card.Img variant='top' src={book.image_url} style={{width:'100%',height:'100%',objectFit:'contain'}} />
                            </div>
                            <Card.Body>
                                <Card.Title style={{fontSize:'16px',fontWeight:'bold'}}>{book.title}</Card.Title>
                                <Card.Text style={{fontSize:'12px',margin:'3px 0'}}>{book.author}</Card.Text>
                                <Card.Text style={{fontSize:'14px',fontWeight:'bold',color:'Highlight'}}>{"$ "+book.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    })
                }
            </div>
        </div>
  )
}

export default ContentSection;