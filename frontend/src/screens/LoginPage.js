import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import image from '../assets/book_background.jpg'
import { login } from '../actions/userActions'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirectLoc = useLocation().search
  const redirect = redirectLoc ? redirectLoc.split('=')[1] : '/'

  useEffect(() => {
    if(userInfo){
        navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div className='login_back'>
    <div className='header'>
        <div className="header_content">
            <div className="header_left">
                <div className="header_left_content">
                    <Link to={'/'} className="link">
                        <h1>BookPoint.</h1>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <FormContainer>
      <div className='login'>
        <h1>Sign In</h1>
        {error && <Message  variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email' className='form_element'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='password' className='form_element'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <div className='form_submit'><Button type='submit' variant='primary'>Sign In</Button></div>
        </Form>
      </div>

      <Row className='login_down py-3'>
          <Col>
              New Customer?{' '}<Link to={redirect? `/register?redirect=${redirect}`:'/register'}>Register</Link>
          </Col>
      </Row>
    </FormContainer>
    </div>
  )
}

export default LoginPage