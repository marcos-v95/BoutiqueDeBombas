// React 
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Css Styles
import './App.css';
// Nav Bar
import NavBar from './components/navBar/NavBar'
// Items Container
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer';
// Pages
import HomePage from './pages/Home';
import NosotrosPage from './pages/Nosotros';
import TiendaPage from './pages/Tienda';
import Cart from './components/cart/Cart';
import ContactoPage from './pages/Contacto';
import GaleriaPage from './pages/Galeria';
// Context
import {CartProvider} from './context/CartContext'

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/nosotros' element={<NosotrosPage/>}/>
            <Route path='/tienda' element={<TiendaPage/>}/>
            <Route path='/tienda/:category' element={<ItemCategoryContainer/>}/>
            <Route path='/tienda/:category/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/galeria' element={<GaleriaPage/>}/>
            <Route path='/contacto' element={<ContactoPage/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <main>
        
      </main>
    </div>
  );
}

export default App;