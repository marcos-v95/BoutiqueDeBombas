// React
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
// Material Ui
import {CircularProgress} from '@material-ui/core'; 
// Item Detail
import ItemDetail from "../itemDetail/itemDetail";
// Firebase
import dataBase from "../../utils/firebaseConfig";
import {doc,getDoc} from "firebase/firestore"; 


function ItemDetailContainer (){
  
  const {id}=useParams();
  const [product,setProduct]=useState({})
  const [loader,setLoader]=useState(false) //----- loader -----

  const filterProductById= async ()=>{
    const docRef= doc(dataBase,'products', id);
    const docSnap=await getDoc(docRef);

    if (docSnap.exists()){
      let product=docSnap.data();
      product.id=docSnap.id;
      setProduct(product)
      setLoader(false)
    }
    
  }

  useEffect(()=>{
    setLoader(true)
    setTimeout(() => {filterProductById()}, 1500)
  },[id])
  
  return(
    <>
      {loader?(
        <div className="circularProgress">
          <p>Cargando contenido ...</p>
          <CircularProgress />
        </div>
      ):(
        <ItemDetail productDetail={product}/>
      )}
    </>
  )
}
export default ItemDetailContainer;