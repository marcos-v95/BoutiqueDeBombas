import React,{useState} from 'react';



export default function ItemCount({stock,onAdd}){
  // numero inicial del contador
  let initial=0;
  // estado del contador
  const [count,setCount]= useState(initial);
  
  const addStock= ()=>{
    if(count<stock){
      setCount(count+1)
    }
  }
  const removeStock= ()=>{
    if(count>initial)
    setCount(count-1)
  }
  
  return(
    <>
      <p>Stock disponible: {stock-count}</p>
      <p>Cantidad seleccionada: {count}</p>
      <button onClick={addStock} disabled={count === stock ? true : null}>+</button>
      <button onClick={()=>(onAdd(count))} disabled={count===0}>Agregar al carrito</button>
      <button onClick={removeStock} disabled={count === initial ? true : null}>-</button>
    </>
  )
}