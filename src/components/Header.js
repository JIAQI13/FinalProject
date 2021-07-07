import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'


const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">Visic</Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
      <Nav.Link href="/about">About</Nav.Link>
    </Navbar>
  )
};

export default Header;
