// React
import React from 'react';
// Components
import ItemsList from '../items/ItemsList';

function ItemListContainer(){
  return(
    <div>
      <h2 className='titleSecond'>Nuestros Productos!</h2>
      <ItemsList/>
    </div>
  )
}

export default ItemListContainer