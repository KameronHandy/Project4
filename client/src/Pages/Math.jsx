import {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import axios from "axios"

export default function Math() {

  const[userQ, setuserQ]=useState([
    {Q:"", A:""}
  ])

  useEffect(() =>{
    const fetchResponse = async () => {
      console.log("a")
      console.log ("Use Effect ...")
      const response = await axios.get("http://localhost:4000/math/")
      console.log(response)
      console.log(response.data)
      setuserQ (response.data)
    }
    fetchResponse();
   }, [])

  function UserInput (event){
    const{name,value}= (event.target)
    setuserQ({...userQ, [name]:value})
  }

  async function handleSubmit(event){
    try{
      const response = await axios.post("http://localhost:4000/math/", {Q: userQ.Q, A: userQ.A})
      console.log(response)
    }
    catch (error) {
      console.log("this is an error",error)
    }
  }

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        {userQ.map((user,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{user.Q}</td>
            <td>{user.A}</td>
          </tr>
        ))}
      </tbody>
    </Table>

    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Question</Form.Label>
        <Form.Control as="textarea" type="email" placeholder="Math Question" name="Q" onChange={(event) => UserInput(event)}/>
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



    