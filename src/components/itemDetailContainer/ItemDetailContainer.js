import React,{useState,useEffect} from "react";
// Mock of products
import mockProd from "../mockProducts/mockProducts";
// Item Detail
import ItemDetail from "../itemDetail/itemDetail";

function ItemDetailContainer (){
  const [product,setProduct]=useState([])

  const getMock= ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve (mockProd.find((prod)=>prod.id===1))
      },2000)
    })
  }
  const getProduct= async ()=>{
    try{
      const result= await getMock();
      setProduct(result)
    }catch (error){
      console.log (error)
    }
  }
  useEffect(()=>{
    getProduct()},[]
  )
  return(
    <ItemDetail product={product}/>
  )
}
export default ItemDetailContainer;