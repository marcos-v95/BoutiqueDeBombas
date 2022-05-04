// React
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Firebase
import dataBase from '../../utils/firebaseConfig';
import {collection,getDocs,query,where} from 'firebase/firestore'; // products in collection

function ItemCategoryContainer(){
  const {category}=useParams();
  const [productCategory,setproductCategory]=useState([])

  const filterProductsByCategory= async (category)=>{
    const categoryRef=query(collection(dataBase,'products'), where('category','==',category))
    const categorySnap=await getDocs(categoryRef);
    const itemsCategory= categorySnap.docs.map((doc)=>{
      let item=doc.data()
      item.id=doc.id
      return (item)
    })
    return itemsCategory
  }
  useEffect (()=>{
    filterProductsByCategory(category).then((data)=>{
      setproductCategory(data)
    })
  },[category])
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