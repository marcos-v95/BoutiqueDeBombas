import React from 'react';

function ItemCount({stock,addStock,subtractStock,count}){
  return(
    <>
      <button className="detailButton" onClick={addStock} disabled={count === stock ? true : null}>+</button>
      <p>{count}</p>
      <button className="detailButton" onClick={subtractStock} disabled={count === 1 ? true : null}>-</button>
    </>
  )
}
export default ItemCount;