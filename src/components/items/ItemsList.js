import React,{useState,useEffect} from "react";
// Items
import Items from './Items';

export default function ItemsList({mock}){

  const[products,setProducts]=useState([])

  const getProducts= ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve (mock)
      },2000)
    })
  }
  useEffect (()=>{
    getProducts().then((data)=>{
      setProducts(data)
    })
  },[])
  console.log(products)
  return(
   <Items products={products}/>
   )
}
