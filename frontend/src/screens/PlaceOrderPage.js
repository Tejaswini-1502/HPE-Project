import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import Header from '../components/Header'

const PlaceOrderPage = () => {
    const cart = useSelector(state => state.cart)

    cart.itemsPrice = Math.round((cart.cartItems.reduce((acc,item) => acc + item.price*item.qty, 0))*100)/100
    cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 20
    cart.taxPrice = Number((0.15 * cart.itemsPrice).toFixed(2))
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)
    const placeOrderHandler = () => {

    }

    return (
        <>
            <Header/>
            <CheckoutSteps step1 step2 step3 step4/>
            <Row className='cart'>
                <Col md={8}>
                    <ListGroup variant="secondary">
                        <ListGroup.Item variant="secondary" className='cart_display'>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address: </strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary" className='cart_display'>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            {cart.paymentMethod}
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary" className='cart_display'>
                            <h2>Ordered Items</h2>
                            {cart.cartItems.length === 0 ? <Message> Your cart is empty</Message> : (
                                <ListGroup variant="secondary">
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index} variant="secondary">
                                            <Row className='cart_item'>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                                </Col>
                                                <Col>
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} x $ {item.price} = $ {item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card className='cart_total'>
                        <ListGroup variant="secondary">
                            <ListGroup.Item variant="secondary">
                                <h2 style={{fontWeight: '600'}}>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary">
                                <Row>
                                    <Col>Items</Col>
                                    <Col>$ {cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary">
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>$ {cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary">
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>$ {cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary">
                                <Row>
                                    <Col><strong>Total</strong></Col>
                                    <Col><strong style={{color:'#2c9e8f'}}>$ {cart.totalPrice}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary">
                                <Button type='button' className='btn-block' disabled={cart.cartItems === 0 } onClick={placeOrderHandler}>Place Order</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderPage