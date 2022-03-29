import React,{useState} from 'react';



export default function ItemCount({stock}){
  // estado del contador
  const [count,setCount]= useState(0);
  
  const addStock= ()=>{
    if(count<stock){
      setCount(count+1)
    }
  }
  const removeStock= ()=>{
    if(count>0)
    setCount(count-1)
  }
  function onAdd(){
    if(count>=1){
      alert ('Producto agregado al carrito')
    }
  }
  return(
    <div id='contador'>
      <h3>Contador con botones</h3>
      <p>Stock disponible: {stock-count}</p>
      <p>Cantidad seleccionada: {count}</p>
      <button onClick={addStock}>+</button>
      <button onClick={onAdd}>Agregar al carrito</button>
      <button onClick={removeStock}>-</button>
    </div>
  )
}