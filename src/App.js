// Css Styles
import './App.css';
// Nav Bar
import NavBar from './components/navBar/NavBar'
// Cart Container
import CartItemContainer from './components/cart/cartItemContainer';

function App() {
  return (
    <>
      <header className='App'>
        <NavBar/>
      </header>
      <main>
        <CartItemContainer/>
      </main>
    </>
  );
}

export default App;
