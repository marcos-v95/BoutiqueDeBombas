import React from 'react';
// Item Count
import ItemCount from './ItemCount';


function ItemListContainer(){
  return(
    <div>
      <h1>Lista de productos</h1>
      <ItemCount stock='5'/>
    </div>
  )
}

export default ItemListContainer