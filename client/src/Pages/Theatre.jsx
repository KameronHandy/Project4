import {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import axios from "axios"
import AddingTheatre from '../Components/AddingTheatre'

export default function Theatre() {

  const[userQ, setuserQ]=useState([
    {Q:"", A:""}
  ])

  useEffect(() =>{
    const fetchResponse = async () => {
      console.log("a")
      console.log ("Use Effect ...")
      const response = await axios.get("http://localhost:4000/theatre/")
      console.log(response)
      console.log(response.data)
      setuserQ (response.data)
    }
    fetchResponse();
   }, [])

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

    <AddingTheatre />

  </>
  )
}
