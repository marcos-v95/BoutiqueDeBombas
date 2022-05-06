// React
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
// Item Detail
import ItemDetail from "../itemDetail/itemDetail";
// Firebase
import dataBase from "../../utils/firebaseConfig";
import {doc,getDoc} from "firebase/firestore"; 


function ItemDetailContainer (){
  
  const {id}=useParams();
  const [product,setProduct]=useState({})

  const filterProductById= async ()=>{
    const docRef= doc(dataBase,'products', id);
    const docSnap=await getDoc(docRef);

    if (docSnap.exists()){
      console.log("docInfo",docSnap.data())
      let product=docSnap.data();
      product.id=docSnap.id;
      setProduct(product)
    }
    
  }

  useEffect(()=>{
    filterProductById()},[id]
  )
  
  return(
    <ItemDetail productDetail={product}/>
  )
}
export default ItemDetailContainer;