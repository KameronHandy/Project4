import Nav from 'react-bootstrap/Nav';
import {useEffect, useState} from 'react'
import axios from 'axios'



function Categories() {
  const[categories, setCategories]=useState([
    {title:""}
  ])

  useEffect(() =>{
    const fetchResponse = async () => {
      console.log("a")
      console.log ("Use Effect ...")
      const response = await axios.get("http://localhost:4000/categories/")
      console.log(response)
      console.log(response.data)
      setCategories (response.data)
    }
    fetchResponse();
   }, [])


  return (
    <>
    <Nav fill variant="tabs" defaultActiveKey="/home">
      {categories.map((category,index)=>(
        <Nav.Item>
          <Nav.Link href={`/Questions/${category.idcategories}`}>{category.title}</Nav.Link>
        </Nav.Item>
        ))}
    </Nav>
    </>
  );
}

export default Categories;