// React
import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
// logo 
import logoBoutique from '../../assets/images/logoBoutique.jpeg';
// Cart widget
import CartWidget from '../cartWidget/CartWidget';
// Cart context
import CartContext from '../../context/CartContext';

function NavBar(){
  const {cartProducts}=useContext(CartContext)
  return (
    <nav className="navBar">
      <div>
        <Link to={'/'}><img src={logoBoutique} className='nav-logoBoutique' alt='logo'/></Link>
      </div>
      <div id='box-list'>
        <ul className='navList'>
          <li>
            <button className='nav-button'><Link to={'/'}>Home</Link></button>
          </li>
          <li>
            <button className='nav-button'><Link to={'/nosotros'}>Nosotros</Link></button>
          </li>
          <li>
            <button className='nav-button'><Link to={'/tienda'}>Tienda</Link></button>
            <ul>
              <li><button className='nav-button'> <Link to={'tienda/pasteleria'}>pasteleria</Link></button></li>
              <li><button className='nav-button'> <Link to={'tienda/postres'}>postres</Link></button></li>
            </ul>
          </li>
          <li>
            <button className='nav-button'><Link to={'/galeria'}>Galeria</Link></button>
          </li>
          <li>
            <button className='nav-button'><Link to={'/contacto'}>Contacto</Link></button>
          </li>
          {(cartProducts.length>0) && 
            <li>
              <button id='cart-button'>
                <Link to={'/cart'}><CartWidget/></Link>
                <p>{cartProducts.length}</p>
              </button>
            </li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default NavBar