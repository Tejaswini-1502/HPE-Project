import React, { useEffect } from 'react'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const quantityLoc = useLocation().search
  const quantity = quantityLoc ? Number(quantityLoc.split('=')[1]) : 1

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if(id){
      dispatch(addToCart(id, quantity))
    }
  }, [dispatch, id, quantity])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () =>{
    navigate('/login?redirect=/shipping')
  }

  return (
    <>
    <Header/>
    <Navbar/>
    <Row className='cart'>
      <Col md={8} className='cart_display'>
        <h1>Your Cart</h1>
        { cartItems.length === 0 ? <Message>Your cart is empty <Link to='/'>Go Back</Link></Message> :
          <ListGroup>
            { cartItems.map(item => (
              <ListGroup.Item key={item.product} variant="secondary">
                <Row className='cart_item'>
                  <Col md={2}>
                    <Image src={item.image} alt={item.title} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/products/${item.product}`}>{item.title}</Link>
                  </Col>
                  <Col md={3}>$ {item.price}</Col>
                  <Col md={2}>
                    <Form.Select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))} style={{width:'80px'}}>
                      {[1,2,3,4,5].map(x => (
                        <option key={x} value={x}>{x}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                      <i><FaTrash/></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        }
      </Col>
      <Col md={4}>
        <Card className='cart_total'>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
              <p>$ {cartItems.reduce((acc, item) => acc + item.qty*item.price, 0).toFixed(2)}</p>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
              Proceed to Checkout
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default CartPage