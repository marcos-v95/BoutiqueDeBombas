// React
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// Counter
import ItemCount from "../itemCount/ItemCount";
// Cart Context
import CartContext from "../../context/CartContext";


export default function ItemDetail ({productDetail}){
  const {title,image,price,stock}=productDetail; // ----- destructuring -----
  
  const [count,setCount]= useState(0); // ----- counter state -----
  const [readyToAdd, setReadyToAdd]=useState(false); // ----- boolean state -----
  const {cartProducts, addProductToCard}=useContext(CartContext); // ----- context state -----
  
  // ----- counter functions -----
  function addStock() {if (count<stock) setCount(count+1)};
  function subtractStock() {if (count>0) setCount(count-1)}; 
  function onAdd(){
    alert (`Agregaste: ${count} productos al carrito`)
    addProductToCard({...productDetail,quantity:count})
    setReadyToAdd(!readyToAdd)
  }; 
  // ------------------------------
  return(
    <div>
      <h1>{title}</h1>
      <img src={image} alt="prod"></img>
      <p>Stock disponible: {stock-count}</p>
      <p>Precio: {price}</p>
      <p>Cantidad seleccionada: {count}</p>
      {/* render condition */}
      {readyToAdd ? (
        <div>
          <button> <Link to={'/cart'}>Terminar compra</Link></button>
        </div>
      ):(
        <>
          <ItemCount onAdd={onAdd} addStock={addStock} subtractStock={subtractStock} count={count}stock={stock}/>
        </>
      )}
    </div>
  )
}