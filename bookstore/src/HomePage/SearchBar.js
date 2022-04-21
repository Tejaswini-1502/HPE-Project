import React from 'react'
import { BiSearchAlt } from "react-icons/bi";

function SearchBar() {
  return (
    <div className="search">
        <form action="/" method="get">
        <label htmlFor="search_book">
            <span className="visually-hidden">Search by title, authors, publishers</span>
        </label>
        <input type="text" id="search_book" placeholder="Search by title, authors, ISBNs" name="s" />
        <button type="submit"><i><BiSearchAlt/></i></button>
        </form>
    </div>
  )
}

export default SearchBar