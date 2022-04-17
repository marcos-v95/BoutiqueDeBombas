// React 
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Css Styles
import './App.css';
// Nav Bar
import NavBar from './components/navBar/NavBar'
// Item Detail Container
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer';
// Pages
import HomePage from './pages/Home';
import NosotrosPage from './pages/Nosotros';
import TiendaPage from './pages/Tienda';
import ContactoPage from './pages/Contacto';
import GaleriaPage from './pages/Galeria';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/nosotros' element={<NosotrosPage/>}/>
          <Route path='/tienda' element={<TiendaPage/>}/>
          <Route path='/tienda/:category' element={<ItemCategoryContainer/>}/>
          <Route path='/tienda/:category/:id' element={<ItemDetailContainer/>}/>
          <Route path='/galeria' element={<GaleriaPage/>}/>
          <Route path='/contacto' element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>
      <main>
        
      </main>
    </div>
  );
}

export default App;