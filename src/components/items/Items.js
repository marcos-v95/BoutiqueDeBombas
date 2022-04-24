// React
import React from "react";
import {Link} from 'react-router-dom';


export default function Items({products}) {

  return (
    <div id="item-container">
      {products.map((product)=>{
        const {id,category,title,image,price,stock}=product
        return(
          <div key={id}>
            <h1><Link to={`/tienda/${category}/${id}`}>{title}</Link></h1>
            <img src={image} alt="prod"></img>
            <p>Precio: {price}</p>
          </div>)
      })}
    </div>
    
  )
}
