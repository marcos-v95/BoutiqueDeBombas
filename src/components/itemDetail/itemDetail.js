import React from "react";

export default function ItemDetail ({product}){
  return(
    <div>
      {console.log(product)}
      <h1>{product.title}</h1>
      <img src={product.image} alt="prod"></img>
      <p>Precio: {product.price}</p>
    </div>
  )
}