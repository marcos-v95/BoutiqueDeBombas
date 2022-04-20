// React
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

// Mock of products
import mockProd from "../mockProducts/mockProducts";
// Item Detail
import ItemDetail from "../itemDetail/itemDetail";

function ItemDetailContainer (){
  
  const {id}=useParams();
  const [product,setProduct]=useState({})

  const filterProductById=(array,id)=>{
    return(
      array.map((product)=>{
        if(product.id==id){
          return(setProduct(product))
        }
      })
    )
  }

  useEffect(()=>{
    filterProductById(mockProd,id)},[id]
  )
  
  return(
    <ItemDetail productDetail={product}/>
  )
}
export default ItemDetailContainer;