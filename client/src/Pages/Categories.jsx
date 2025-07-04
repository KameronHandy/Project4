import Nav from 'react-bootstrap/Nav';
import Math from './Math'



function Categories() {
  return (
    <>
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/Math">Math</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/Music">Music</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/Sports">Sports</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/Theatre">Theare</Nav.Link>
      </Nav.Item>
    </Nav>




    </>


  );
}

export default Categories;