// React
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import mockProd from "../mockProducts/mockProducts";

function ItemCategoryContainer(){
  const {category}=useParams();
  const [productCategory,setproductCategory]=useState([])

  const filterProductsByCategory=(array,category)=>{
    return(
      array.filter((product)=>{
        if(product.category===category){
          return product
        }
      })
    )
  }
  useEffect(()=>{
    setproductCategory(filterProductsByCategory(mockProd,category))},[category]
  )
  console.log(productCategory)
  return(
    <>
      {productCategory.map((product)=>{
        const {id,title,image,price,stock}=product
        return(
          <div key={id}>
            <h1><Link to={`/tienda/${category}/${id}`}>{title}</Link></h1>
            <img src={image} alt="prod"></img>
            <p>Stock disponible: {stock}</p>
            <p>Precio: {price}</p>
          </div>)
      })}
    </>
  )
}
export default ItemCategoryContainer