
import React from 'react'
import SearchBar from './SearchBar'


function HomeContent(props) {
  return (
    <div className="home">
        <div className="home_content">
            <SearchBar/>
            <div className="book_sections">
                <div className="book_sections_content">
                    <div className="recent_release">
                        <div className="recent_release_content">
                            <h2>Recent Releases</h2>
                            <div className="recent_books">
                                {
                                    props.data.books.map((book) => {
                                        return <div className="recent_books_card" style={{display:'inline-block'}} key={book.id}>
                                            <img src={book.image_url} alt="" />
                                        </div>
                                    })
                                    //console.log(props.data.books)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="highest_rated">
                        <div className="highest_rated_content">
                            <h2>Highest Rated Books</h2>
                        </div>
                    </div>
                    <div className="most_liked">
                        <div className="most_liked_content">
                            <h2>Most Liked</h2>
                        </div>
                    </div>
                    <div className="award_winners">
                        <div className="award_winners_content">
                            <h2>Award Winners</h2>
                        </div>
                    </div>
                    <div className="genre_based"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContent