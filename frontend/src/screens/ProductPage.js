import React, { useState,useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
// import { listproductDetails } from '../actions/productActions'
import axios from 'axios'

function ProductPage() {
  const [product, setProduct] = useState({genre:[]})
  const { id } = useParams()
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }

    fetchProduct()
  }, [id])
  // const dispatch = useDispatch()
  // const productDetails = useSelector(state => state.productDetails)
  // const { loading, error, product } = productDetails
  // useEffect(() => {
  //   dispatch(listproductDetails(id))
  // }, [id])
  return (
    <div>
      <Header/>
      <Navbar/>
      <Container>
      {/* { loading ? <Loader/>  : 
        error ? <Message variant='danger'>{error}</Message> :
        <div className="product_details">
          <div className="product_details_content">
            <div className="product_img">
              <img src={product.image_url} alt="" />
            </div>
            <div className="product_info">
              <div className="product_title">
                <h2>{product.title}</h2>
                <p style={{fontWeight:'300'}}><span style={{fontWeight:'500'}}>By: </span>{product.author} <span style={{fontWeight:'500'}}>| Publisher: </span>{product.publisher}</p>
                <p><span className="product_rating">
                  <i>{product.rating >= 1? <BsStarFill/> : product.rating >= 0.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{product.rating >= 2? <BsStarFill/> : product.rating >= 1.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{product.rating >= 3? <BsStarFill/> : product.rating >= 2.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{product.rating >= 4? <BsStarFill/> : product.rating >= 3.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{product.rating >= 5? <BsStarFill/> : product.rating >= 4.5 ? <BsStarHalf/> : <BsStar/>}</i>
                </span> | <span style={{fontWeight:'400',color:'sienna'}}> {product.num_ratings} (Reviews)</span></p>
                <p style={{fontSize:'28px',color:'darkcyan',marginTop:'3.5em'}}><b>$ {product.price}</b></p>
                <Button style={{marginTop:'1em'}}>Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="product_description">
            <h4>About the product</h4>
            <p>{product.description}</p>
          </div>
          <div className="other_details">
            <div className="details1">
              <h4>Product Details</h4>
              <p><b>ISBN: </b>{product.isbn}</p>
              <p><b>Format: </b>{product.productformat}</p>
              <p><b>Pages: </b>{product.pages}</p>
            </div>
            <div className="details2">
              <h4>Related Categories</h4>
              <p>{
                product.genre.map((element) => {
                  return <span>{"["+element+"] "}&nbsp;&nbsp;</span>
                })
              }</p>
            </div>
          </div>
        </div> } */}
        <div className="product_details">
          <div className="product_details_content">
            <div className="product_img">
              <img src={product.image_url} alt="" />
            </div>
            <div className="product_info">
              <div className="product_title">
                <h2>{product.title}</h2>
                <p style={{fontWeight:'300'}}><span style={{fontWeight:'500'}}>By: </span>{product.author} <span style={{fontWeight:'500'}}>| Publisher: </span>{product.publisher}</p>
                <p><span className="product_rating">
                  <i>{product.rating >= 1? <BsStarFill/> : product.rating >= 0.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{product.rating >= 2? <BsStarFill/> : product.rating >= 1.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{product.rating >= 3? <BsStarFill/> : product.rating >= 2.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{product.rating >= 4? <BsStarFill/> : product.rating >= 3.5 ? <BsStarHalf/> : <BsStar/>}</i>
                  <i>{product.rating >= 5? <BsStarFill/> : product.rating >= 4.5 ? <BsStarHalf/> : <BsStar/>}</i>
                </span> | <span style={{fontWeight:'400',color:'sienna'}}> {product.num_ratings} (Reviews)</span></p>
                <p style={{fontSize:'28px',color:'darkcyan',marginTop:'3.5em'}}><b>$ {product.price}</b></p>
                <Button style={{marginTop:'1em'}}>Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="product_description">
            <h4>About the product</h4>
            <p>{product.description}</p>
          </div>
          <div className="other_details">
            <div className="details1">
              <h4>Product Details</h4>
              <p><b>ISBN: </b>{product.isbn}</p>
              <p><b>Format: </b>{product.productformat}</p>
              <p><b>Pages: </b>{product.pages}</p>
            </div>
            <div className="details2">
              <h4>Related Categories</h4>
              <p>{
                product.genre.map((element) => {
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