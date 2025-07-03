import {useState} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import axios from "axios"

export default function User_login() {

  const[userInfo, setuserInfo]=useState({
    Username:"",
    user_password:"",
  })


  function UserInput (event){
    const{name,value}= (event.target)
    setuserInfo({...userInfo, [name]:value})
  }

  async function handleSubmit(event){
    try{
      const response = await axios.post("http://localhost:4000/user/", {Username: userInfo.Username, user_password: userInfo.user_password})
      console.log(response)
    }
    catch (error) {
      console.log("this is an error",error)
    }
  }




  return (
    <>
    <Form>
       <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <Form.Control type="text" placeholder="Email" name="Username"  onChange={(event) => UserInput(event)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" name="user_password" onChange={(event)=> UserInput(event)} />
        </Col>
      </Form.Group>
    </Form>

    <Button variant="dark" onClick={handleSubmit}>Login</Button>

    
    
    
    </>
  )
}
