import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

const SearchPage = ({products}) => {
  return (
    <main>
        <Header/>
        <Navbar/>
        <SearchBar/>
    </main>
  )
}

export default SearchPage