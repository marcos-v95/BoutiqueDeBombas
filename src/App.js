import React from 'react';
// Css Styles
import './App.css';
// Nav Bar
import NavBar from './components/navBar/NavBar'
// Cart Container
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// Item Detail Container
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <header className='App'>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </main>
    </>
  );
}

export default App;

{/* <div>
      {product.map((item,indice)=>{
        return(
          <div key={indice}>
            <h1>{item.title}</h1>
            <img src={item.image} alt="prod"></img>
            <p>Precio: {item.price}</p>
          </div>
        )
      })}
    </div> */}