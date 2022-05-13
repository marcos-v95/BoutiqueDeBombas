// React
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// Material Ui
import Grid from '@material-ui/core/Grid';
// Counter
import ItemCount from "../itemCount/ItemCount";
// Cart Context
import CartContext from "../../context/CartContext";


export default function ItemDetail ({productDetail}){
  const {title,image,price,stock}=productDetail; // ----- destructuring -----
  
  const [count,setCount]= useState(1); // ----- counter state -----
  const [readyToAdd, setReadyToAdd]=useState(false); // ----- boolean state -----
  const {cartProducts, addProductToCard}=useContext(CartContext); // ----- context state -----
  
  // ----- counter functions -----
  function addStock() {if (count<stock) setCount(count+1)};
  function subtractStock() {if (count>0) setCount(count-1)}; 
  function onAdd(){
    addProductToCard({...productDetail,quantity:count})
    setReadyToAdd(!readyToAdd)
  }; 
  // ------------------------------
  return(
    <Grid container={true} direction="row" justifyContent="space-around" id="detailContainer">
      <Grid item={true} lg={4} md={5} sm={6} xs={6} className="contImage">
        <img src={image} alt="prod" className="detailImage"></img>
      </Grid>
      <Grid item={true} lg={7} md={5} sm={6} xs={6} className="contInfo">
        <div>
          <h1 className="detailTitle">{title}</h1>
          <h3 className="detailDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nobis ab? Quam, quia. Velit quaerat, vel dolore voluptate expedita quae vero, consequuntur eligendi voluptatibus, laudantium ipsam architecto nesciunt. Rem, libero.</h3>
        </div>
        <div className="detailInfo">
          <div className="divText">
            <p>Precio: {price}</p>
            <p>Stock disponible: {stock-count}</p>
          </div>
          <div className="divButton">
            <p>Cantidad seleccionada: </p>
            <ItemCount onAdd={onAdd} addStock={addStock} subtractStock={subtractStock} count={count}stock={stock}/>
          </div>
          <div>
            {readyToAdd ? (
              <button className="detailButton"> <Link to={'/cart'}>Terminar compra</Link></button>
            ):(
              <button onClick={onAdd} disabled={count===0} className="detailButton">Agregar al carrito</button>
            )}
          </div>
        </div>
      </Grid>
    </Grid>
  )
}