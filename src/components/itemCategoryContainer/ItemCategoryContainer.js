// React
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// Material Ui
import Grid from '@material-ui/core/Grid';
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
    <h2>{category}</h2>
    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" id="item-container">
      {productCategory.map((product)=>{
        const {id,title,image,price}=product
        return(
          <Grid item={true} lg md sm={6} xs={12} className="gridItems" key={id}>
            <div className="cardItems" >
              <div>
                <img src={image} alt="prod" className="cardImage"></img>
              </div>
              <div>
              <h2><Link className="cardTitle" to={`/tienda/${category}/${id}`}>{title}</Link></h2>
                <h3 className="cardDescription">Precio: {price}</h3>
                <button className="cardButton"><Link to={`/tienda/${category}/${id}`}>Comprar</Link></button>
              </div>
            </div>
          </Grid>
        )
      })}
    </Grid>
    </>
  )
}
export default ItemCategoryContainer