import React from 'react';
// Items List
import ItemsList from '../items/ItemsList';
// Mock of products
import mockProd from "../mockProducts/mockProducts";

function ItemListContainer(){
  return(
    <div>
      <h2>Lista de productos</h2>
      <ItemsList mock={mockProd}/>
    </div>
  )
}

export default ItemListContainer