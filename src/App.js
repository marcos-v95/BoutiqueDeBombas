import React from 'react';
// Css Styles
import './App.css';
// Nav Bar
import NavBar from './components/navBar/NavBar'
// Cart Container
import ItemListContainer from './components/cart/ItemListContainer';

function App() {
  return (
    <>
      <header className='App'>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer/>
      </main>
    </>
  );
}

export default App;
