import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirectLoc = useLocation().search
  const redirect = redirectLoc ? redirectLoc.split('=')[1] : '/'

  useEffect(() => {
    if(userInfo){
        navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
        setMessage('Passwords do not match')
    }else{
        dispatch(register(name, email, password))
    }
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
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message  variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name' className='form_element'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='email' className='form_element'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password' className='form_element'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword' className='form_element'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <div className='form_submit'><Button type='submit' variant='primary'>Register</Button></div>
            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account?{' '}<Link to={redirect ? `/login?redirect=${redirect}`:'/login'}>Login</Link>
                </Col>
            </Row>
        </div>
    </FormContainer>
    </div>
  )
}

export default RegisterPage