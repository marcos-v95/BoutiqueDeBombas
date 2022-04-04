import React from 'react';
// Item Count
import ItemCount from '../itemCount/ItemCount';
// Items List
import ItemsList from '../items/ItemsList';
// Mock of products
import mockProd from "../mockProducts/mockProducts";

function ItemListContainer(){
  const onAdd=(count)=>{
      alert (`Agregaste ${count} productos al carrito`)
  }
  return(
    <div>
      <h1>Lista de productos</h1>
      <ItemsList mock={mockProd}/>
      <ItemCount stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer