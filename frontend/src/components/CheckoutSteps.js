import React from 'react'
import { Nav } from 'react-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4}) => {
  return (
    <Nav className='checkout_steps justify-content-center mb-4'>
        <Nav.Item className='step'>
            {step1 ? (
                <Nav.Link href='/login' className='enabled'>Sign In</Nav.Link>
            ): <Nav.Link disabled>Sign In</Nav.Link>}
        </Nav.Item>
        <Nav.Item className='step'>
            {step2 ? (
                <Nav.Link href='/shipping' className='enabled'>Shipping</Nav.Link>
            ): <Nav.Link disabled>Shipping</Nav.Link>}
        </Nav.Item>
        <Nav.Item className='step'>
            {step3 ? (
                <Nav.Link className='enabled' href='/payment'>Payment</Nav.Link>
            ): <Nav.Link disabled>Payment</Nav.Link>}
        </Nav.Item>
        <Nav.Item className='step'>
            {step4 ? (
                <Nav.Link href='/placeorder' className='enabled'>Place Order</Nav.Link>
            ): <Nav.Link disabled>Place Order</Nav.Link>}
        </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps