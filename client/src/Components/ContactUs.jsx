import React from 'react'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import axios from "axios"



export default function ContactUs () {

  
  const[userContact, setuserContact]=useState({
    Email:"",
    UserThoughts:"",
  })
  

  function UserContactInput (event){
    const{name,value}= (event.target)
    setuserContact({...userContact, [name]:value})
  }

  async function handleSubmit(event){
    try{
      const response = await axios.post("http://localhost:4000/ContactUS/", {Email: userContact.Email, UserThoughts: userContact.UserThoughts})
      console.log(response)
    }
    catch (error) {
      console.log("this is an error",error)
    }
  }




  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" name="Email" onChange={(event) => UserContactInput(event)}>
        <Form.Label>Email address</Form.Label>
        <Form.Control as="textarea" type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Contact Us</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

    <Button variant="dark" onClick={handleSubmit}>Submit</Button>
    </>

  );
}

