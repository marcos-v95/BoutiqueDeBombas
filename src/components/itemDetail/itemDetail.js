// React
import React from "react";

export default function ItemDetail ({product}){
  const {title,image,price,stock}=product
  return(
    <div>
      <h1>{title}</h1>
      <img src={image} alt="prod"></img>
      <p>Stock disponible: {stock}</p>
      <p>Precio: {price}</p>
    </div>
  )
}