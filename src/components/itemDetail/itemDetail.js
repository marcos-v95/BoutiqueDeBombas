// React
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Counter
import ItemCount from "../itemCount/ItemCount";


export default function ItemDetail ({productDetail}){
  const {title,image,price,stock}=productDetail
  
  const [count,setCount]= useState(0); //estado del contador
  const [readyToAdd, setReadyToAdd]=useState(false) //estado booleano 
  
  // funciones del contador
  const addStock= ()=>{ if(count<stock) setCount(count+1) }
  const removeStock= ()=>{ if(count>0) setCount(count-1) }
  const onAdd=()=>{
    setReadyToAdd(!readyToAdd)
  }; 
 
  return(
    <div>
      <h1>{title}</h1>
      <img src={image} alt="prod"></img>
      {/* condicion de renderizado */}
      {readyToAdd ? (
        <div>
          <p>Agregaste: {count} productos al carrito</p>
          <button> <Link to={'/cart'}>Terminar compra</Link></button>
        </div>
      ):(
        <>
          <p>Stock disponible: {stock-count}</p>
          <p>Precio: {price}</p>
          <p>Cantidad seleccionada: {count}</p>
          <ItemCount onAdd={onAdd} addStock={addStock} removeStock={removeStock} count={count}stock={stock}/>
        </>
      )}
    </div>
  )
}