import React from "react";
// Item Count
import ItemCount from '../itemCount/ItemCount';

export default function Items({products}) {
  // provisionally expressed here
  const onAdd=(count)=>(alert (`Agregaste ${count} productos al carrito`));

  return (
    <div id="item-container">
      {products.map((product)=>{
        const {id,title,image,price,stock}=product
        return(
          <div key={id}>
            <h1>{title}</h1>
            <img src={image} alt="prod"></img>
            <p>Precio: {price}</p>
            <ItemCount stock={stock} onAdd={onAdd} />
          </div>)
      })}
    </div>
    
  )
}
