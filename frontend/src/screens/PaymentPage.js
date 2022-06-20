import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import Header from '../components/Header'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentPage = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    if(!shippingAddress){
        navigate('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

    return (
        <>
            <Header/>
            <FormContainer>
                <CheckoutSteps step1 step2 step3/>
                <div className='login'>
                    <h1>Payment Method</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className='form_element'>
                            <Form.Label as='legend'>Select Method</Form.Label>
                            <Col className='form_radio'>
                                <Form.Check type='radio' label='PayPay or Credit Card' id='PayPal' name='paymentMethod' value='Credit Card' checked onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                                <Form.Check type='radio' label='Debit Card' id='Debit' name='paymentMethod' value='Debit Card' onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                                <Form.Check type='radio' label='Cash On Delivery' id='COD' name='paymentMethod' value='Cash On Delivery' onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                            </Col>
                        </Form.Group>
                        <div className='form_submit'><Button type='submit' variant='primary'>Continue</Button></div>
                    </Form>
                </div>
            </FormContainer>
        </>
    )
}

export default PaymentPage