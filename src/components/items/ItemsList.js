// React
import React,{useState,useEffect} from "react";
// Components
import Items from './Items'; 
// Firebase
import dataBase from '../../utils/firebaseConfig';
import {collection,getDocs} from 'firebase/firestore';

export default function ItemsList(){

  const[products,setProducts]=useState([])

  const getProducts= async ()=>{
    const collectionRef= collection(dataBase,'products'); //collection 'products' from firestore
    const collectionSnap= await getDocs(collectionRef); //documents in 'products' collection
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
  
  return(
   <Items products={products}/>
   )
}
