import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


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
