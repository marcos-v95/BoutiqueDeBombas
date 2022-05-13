// React
import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
// Material Ui
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
// Context
import CartContext from "../../context/CartContext";
//Firebase
import dataBase from "../../utils/firebaseConfig";
import {addDoc,collection} from "firebase/firestore"

function Cart (){
  const {cartProducts,totalPrice,removeItem,clearCart}=useContext(CartContext);
  // state to render form
  const[render,setRender]=useState(true)
  const finishBuy=()=>{
    setRender(!render)
  }
  // form structure
  const [formData,setFormData]=useState({
    name:'',
    phone:'',
    email:''
  })
  // order structure
  const [order,setOrder]=useState({
    buyer:formData,
    items:cartProducts.map((p)=>{
      return{ 
        id:p.id,
        title:p.title,
        price:p.price
      }
    }),
    total:totalPrice
  })
  // form functions
  const handleChange=(event)=>{
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    let prevOrder={...order,buyer:formData}
    setOrder({...order,
      buyer:formData})
    pushOrder(prevOrder)
  }
  // push order to firebase
  const pushOrder= async (prevOrder)=>{
    const orderFirebase= collection(dataBase,'orders')
    const orderDoc= await addDoc(orderFirebase,prevOrder)
    setSuccessOrder(orderDoc.id)
  }
  // state that renders the generated order
  const [successOrder,setSuccessOrder]=useState()

  return(
    <Grid container direction="row" justifyContent="center">
    {render? (
      (cartProducts.length===0) ? (
        <div id="emptyCart">
          <h2 className="titleSecond">No hay productos en tu carrito</h2>
          <Link to={'/tienda'}><button id="emptyButton">Regresar a la tienda</button></Link>
        </div>
      ):(
        <Grid container={true} direction="row" justifyContent="center" id="cartContainer">
          <Grid item lg={12} md={12} sm={12} xs={12}><h2 className="titleSecond">Carrito de compras</h2></Grid>
          {cartProducts.map((cartProduct)=>{
            const {id,title,price,quantity}=cartProduct //destructuring
            return(
              <>
                <Grid item={true} lg={3} md={3} sm={3} xs={8} key={id} className="cartSelec"><p>{title}</p></Grid>
                <Grid item lg={2} md={2} sm={2} xs={4} className="cartSelec"><p>Precio:  {price}</p></Grid>
                <Grid item lg={2} md={2} sm={2} xs={4} className="cartSelec"><p>Cantidad seleccionada:  {quantity}</p></Grid>
                <Grid item lg={2} md={2} sm={2} xs={4} className="cartSelec"><p>Subtotal: {price*quantity}</p></Grid>
                <Grid item lg={2} md={2} sm={2} xs={4} className="cartSelec"><DeleteIcon onClick={()=>removeItem(cartProduct)}></DeleteIcon></Grid>
              </>
            )
          })}
          <Grid container direction="row" justifyContent="space-around">
            <Grid item={true} lg={6} md={6} sm={6} xs={4} className="gButtons">
              <RemoveShoppingCartIcon onClick={clearCart}>Vaciar carrito</RemoveShoppingCartIcon>
              <Link to={'/tienda'}><button className="cartButton">Regresar a la tienda</button></Link>
            </Grid>
            <Grid item={true} lg={4} md={4} sm={4} xs={4} className="gButtons">
              <p id="cartTotal">Total: {totalPrice}</p>
              <button onClick={()=>finishBuy()} className="cartButton">Finalizar pedido</button>
            </Grid>
          </Grid>
        </Grid>
      )
    ):(
      (successOrder)?(
        <Grid container direction="column" justifyContent="space-evenly" id="succesContainer">
          <h2 className="titleSuccess">Felicidades!</h2>
          <h2 className="titleSuccess">Su orden fue generada correctamente!</h2>
          <p>Su numero de orden es :{successOrder}</p>
        </Grid>
      ):(
        <>
        <h2 id="titleForm"> Ya casi finalizamos! Porfavor completa este formulario de orden con tus datos!</h2>
        <Grid container direction="row" justifyContent="center" id="formContainer">
          <form onSubmit={handleSubmit} id="cartForm">
            <div className="formInfo">
              <label>Nombre</label>
              <input type='text' name='name' placeholder="Nombre" onChange={handleChange} value={formData.name}></input>
            </div>
            <div className="formInfo">
              <label>Tu numero de telefono</label>
              <input type='number' name='phone' placeholder="Telefono" onChange={handleChange} value={formData.phone}></input>
            </div>
            <div className="formInfo">
              <label>Tu correo electronico</label>
              <input type='mail' name='email' placeholder="Email" onChange={handleChange} value={formData.email}></input>
            </div>
            <div className="formInfo">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </Grid>
        </>
      )
    )}
    </Grid>
  )
}

export default Cart

