import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingPage = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country}))
        navigate('/payment')
    }

    return (
        <>
        <Header/>
        <FormContainer>
            <CheckoutSteps step1 step2/>
            <div className='login'>
                <h1>Shipping</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='address' className='form_element'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type='address' placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)} required></Form.Control>
                    </Form.Group>
                    <Form.Group className='form_element'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='city' placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)} required></Form.Control>
                    </Form.Group>
                    <Form.Group className='form_element'>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type='postalCode' placeholder='Enter Postal Code' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required></Form.Control>
                    </Form.Group>
                    <Form.Group className='form_element'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type='country' placeholder='Enter Country' value={country} onChange={(e) => setCountry(e.target.value)} required></Form.Control>
                    </Form.Group>

                    <div className='form_submit'><Button type='submit' variant='primary'>Continue</Button></div>
                </Form>
            </div>
        </FormContainer>
        </>
    )
}

export default ShippingPage