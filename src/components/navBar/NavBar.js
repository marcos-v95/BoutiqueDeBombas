// React
import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
// Cart widget
import CartWidget from '../cartWidget/CartWidget';
// Cart context
import CartContext from '../../context/CartContext';
// Bootstrap
import { Navbar,Container,Nav,Dropdown } from 'react-bootstrap';
// logo 
import logoBoutique from '../../assets/images/logo.png';


function NavBar(){
  const {cartProducts}=useContext(CartContext)
  
  return (
    <Navbar expand="lg" id='navContainer'>
      <Container>
        <Navbar.Brand><Link to={'/'}><img src={logoBoutique} className='nav-logoBoutique' alt='logo'/></Link></Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="navBar">
            <Nav.Link href="/" bsPrefix="navList">Home</Nav.Link>
            <Nav.Link href="/nosotros" bsPrefix="navList">Nosotros</Nav.Link>
            <Nav.Link href="/galeria" bsPrefix="navList">Galeria</Nav.Link>
            <Nav.Link href="/contacto" bsPrefix="navList">Contacto</Nav.Link>
            
            <Dropdown id='dropContainer'>
              <Nav.Link href="/tienda" bsPrefix="navList">Tienda</Nav.Link>
              <Dropdown.Toggle split variant="default" id="dropdown-split-basic" />
              <Dropdown.Menu id="dropMenu">
                <Link to={"tienda/petitFlour"} className="dropList">PetitFlour</Link>
                <Link to={"tienda/tortas"} className="dropList">Tortas</Link>
                <Link to={"tienda/budines"} className="dropList">Budines</Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
        <div >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {(cartProducts.length>0) && 
            <div  id='cartWidget'>
              <Link to={'/cart'} >
                <CartWidget />
              </Link>
              <p>{cartProducts.length}</p>
            </div>
          }
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar