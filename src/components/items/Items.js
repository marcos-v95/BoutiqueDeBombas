import React from "react";


export default function Items({products}) {
  
  return (
    <div>
      {products.map((product)=>{
        const {id,title,image,price,stock}=product
        return(
          <div key={id}>
            <h1>{title}</h1>
            <img src={image} alt="prod"></img>
            <p>Precio: {price}</p>
            <p>Stock disponible: {stock}</p>
          </div>
        )
      })}
    </div>
    
  )
}
