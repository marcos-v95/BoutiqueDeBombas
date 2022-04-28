// React
import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext"; //context

function Cart (){
  const {cartProducts,removeItem,clearCart}=useContext(CartContext);
  
  let total=0
  
  return(
    <>
    {(cartProducts.length===0) ? (
      <div>
        <p>No hay productos en tu carrito</p>
        <Link to={'/tienda'}><button>Regresar a la tienda</button></Link>
      </div>
    ): (
      <div>
        <h2>Productos de tu carrito</h2>
        {cartProducts.map((cartProduct)=>{
          const {id,title,price,quantity}=cartProduct //destructuring
          total=(price*quantity)+total; //modify the let variable (total)
          return(
            <div key={id}>
              <div className="cartp">
                <p>Producto seleccionado:  {title}</p>
                <p>Precio:  {price}</p>
                <p>Cantidad seleccionada:  {quantity}</p>
                <button onClick={()=>removeItem(id)}>Eliminar producto</button>
              </div>
            </div>
          )
        })}
        <div>
          <p>Total: {total}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
        </div>
      </div>
    )}
    </>
  )
}

export default Cart

