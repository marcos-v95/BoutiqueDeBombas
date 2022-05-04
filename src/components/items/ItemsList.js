// React
import React,{useState,useEffect} from "react";
// Components
import Items from './Items'; 
// Firebase
import dataBase from '../../utils/firebaseConfig';
import {collection,getDocs} from 'firebase/firestore'; // products in collection

export default function ItemsList(){

  const[products,setProducts]=useState([])

  const getProducts= async ()=>{
    const collectionRef= collection(dataBase,'products');
    const collectionSnap= await getDocs(collectionRef); //docs from the firestore collection
    const listProducts= collectionSnap.docs.map((doc)=>{
      let product=doc.data()
      product.id=doc.id
      return (product)
    })
    return (listProducts)
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
