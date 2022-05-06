// React
import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
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
    <>
    {render? (
      (cartProducts.length===0) ? (
        <div>
          <p>No hay productos en tu carrito</p>
          <Link to={'/tienda'}><button>Regresar a la tienda</button></Link>
        </div>
      ):(
        <div>
          <h2>Productos de tu carrito</h2>
          {cartProducts.map((cartProduct)=>{
            const {id,title,price,quantity}=cartProduct //destructuring
            return(
              <div key={id}>
                <div className="cartp">
                  <p>Producto seleccionado:  {title}</p>
                  <p>Precio:  {price}</p>
                  <p>Cantidad seleccionada:  {quantity}</p>
                  <button onClick={()=>removeItem(cartProduct)}>Eliminar producto</button>
                </div>
              </div>
            )
          })}
          <div className="cartp">
            <button onClick={clearCart}>Vaciar carrito</button>
            <p>Total: {totalPrice}</p>
            <button onClick={()=>finishBuy()}>Finalizar pedido</button>
          </div>
        </div>
      )
    ):(
      (successOrder)?(
        <div>
          <h1>Su orden fue generada correctamente!</h1>
          <p>Numero de orden :{successOrder}</p>
        </div>
      ):(
        <div>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder="Nombre" onChange={handleChange} value={formData.name}></input>
          <input type='number' name='phone' placeholder="Telefono" onChange={handleChange} value={formData.phone}></input>
          <input type='mail' name='email' placeholder="Email" onChange={handleChange} value={formData.email}></input>
          <button type="submit">Enviar</button>
        </form>
      </div>
      )
    )}
    </>
  )
}

export default Cart

