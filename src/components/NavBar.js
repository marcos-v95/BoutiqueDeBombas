import logoBoutique from '../assets/images/logoBoutique.jpeg';

function NavBar(){
  return (
    <header>
      <nav className="navBar">
        <div>
          <img src={logoBoutique} className="nav-logoBoutique" alt="logo" />
        </div>
        <div id="box-list">
          <ul className="navList">
            <li><button className="nav-button">Home</button></li>
            <li><button className="nav-button">Nosotros</button></li>
            <li><button className="nav-button">Tienda</button></li>
            <li><button className="nav-button">Galeria</button></li>
            <li><button className="nav-button">Contacto</button></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar