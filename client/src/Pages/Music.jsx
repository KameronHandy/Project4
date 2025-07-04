import {useState} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import axios from "axios"

export default function User_login() {

  const[userQ, setuserQ]=useState({
    Q:"",
    A:"",
  })


  function UserInput (event){
    const{name,value}= (event.target)
    setuserQ({...userQ, [name]:value})
  }

  async function handleSubmit(event){
    try{
      const response = await axios.post("http://localhost:4000/music/", {Q: userQ.Q, A: userQ.A})
      console.log(response)
    }
    catch (error) {
      console.log("this is an error",error)
    }
  }








  return (
    <>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Question</Form.Label>
        <Form.Control as="textarea" type="email" placeholder="name@example.com" name="Q" onChange={(event) => UserInput(event)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Answer</Form.Label>
        <Form.Control as="textarea" rows={3} name="A" onChange={(event) => UserInput(event)}/>
    </Form.Group>
    </Form>

    <Button variant="dark" onClick={handleSubmit}>Add Q & A</Button>
    </>
  )
}

