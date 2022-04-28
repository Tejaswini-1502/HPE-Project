
import React from 'react'
import { Button } from 'react-bootstrap'
import BookCard from './BookCard';


function ContentSection(props) {
  return (
        <div className="book_sections">
            <div className="book_sections_title">
                <h2>{props.title}</h2>
                <Button variant="dark">View All</Button>
            </div>
            <div className="book_sections_content" style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    props.data.slice(0, 5).map((book) => {
                        return <BookCard book={book}/>
                    })
                }
            </div>
        </div>
  )
}

export default ContentSection;