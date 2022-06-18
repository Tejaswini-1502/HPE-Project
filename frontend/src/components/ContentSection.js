
import React from 'react'
import { Button } from 'react-bootstrap'
import BookCard from './BookCard';

function ContentSection({title, data}) {
  return (
        <div className="book_sections">
            <div className="book_sections_title">
                <h2>{title}</h2>
                <Button variant="dark">View All</Button>
            </div>
            <div className="book_sections_content" style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    data.slice(0, 5).map((book) => {
                        return<BookCard book={book} key={book._id}/>
                    })
                }
            </div>
        </div>
  )
}

export default ContentSection;