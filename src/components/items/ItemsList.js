// React
import React,{useState,useEffect} from "react";
// Material Ui
import {CircularProgress} from '@material-ui/core'; 
// Components
import Items from './Items'; 
// Firebase
import dataBase from '../../utils/firebaseConfig';
import {collection,getDocs} from 'firebase/firestore';

export default function ItemsList(){
  const[products,setProducts]=useState([])
  const[loader,setLoader]=useState() //Loader

  const getProducts= async ()=>{
    const collectionRef= collection(dataBase,'products'); //collection 'products' from firestore
    const collectionSnap= await getDocs(collectionRef); //documents in 'products' collection
    const listProducts= collectionSnap.docs.map((doc)=>{
      let product=doc.data()
      product.id=doc.id
      return (product)
    })
    setLoader(false)
    return (listProducts)
  }
  useEffect (()=>{
    setTimeout(() => {
      getProducts().then((data)=>{
        setProducts(data)
      })
    }, 2000);
    setLoader(true)
  },[])
  
  return(
    <>
      {loader?(
          <div className="circularProgress">
            <p>Cargando contenido ...</p>
            <CircularProgress />
          </div>
        ):(
        <Items products={products}/>)
      }
    </>
   
   )
}
