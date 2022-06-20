
import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';

function ContentSection({title, data}) {
    const navigate = useNavigate()
    const onClickHandler = () => {
        if(title === "Highest Rated")
            navigate(`/search/highestrated`)
        if(title === "Most Liked")
            navigate(`/search/mostliked`)
        if(title === "Award Winners")
            navigate(`/search/awardwinners`)
    }
  return (
        <div className="book_sections">
            <div className="book_sections_title">
                <h2>{title}</h2>
                <Button variant="dark" onClick={onClickHandler}>View All</Button>
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