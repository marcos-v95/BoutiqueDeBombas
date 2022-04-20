import React from 'react';

function ItemCount({stock,onAdd,addStock,removeStock,count}){
  return(
    <>
      <button onClick={addStock} disabled={count === stock ? true : null}>+</button>
      <button onClick={onAdd} disabled={count===0}>Agregar al carrito</button>
      <button onClick={removeStock} disabled={count === 0 ? true : null}>-</button>
    </>
  )
}
export default ItemCount;