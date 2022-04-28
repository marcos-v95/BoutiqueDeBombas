import { createContext,useState } from "react";

const CartContext = createContext();

function CartProvider ({children}){

  const [cartProducts, setCartProducts]=useState([]); // contains the products added to the cart

  function addProductToCard(product){
    const isInCart=(id)=> {
      return cartProducts.some((p)=>p.id===id)
    }
    if(isInCart(product.id)){
      const prod=cartProducts.find((p)=>p.id===product.id)
      prod.quantity= product.quantity + prod.quantity

      setCartProducts([...cartProducts]);
      
    }else{
      setCartProducts(cartProducts=>[...cartProducts,product]);
    }
  }

  function clearCart(){
    setCartProducts([])
  }

  function removeItem(id){
    setCartProducts(cartProducts.filter((p)=>p.id!==id))
  }
  
  const toolKit={
    cartProducts,
    addProductToCard,
    removeItem,
    clearCart
  }
  return(
    <CartContext.Provider value={toolKit}>
      {children} 
    </CartContext.Provider>
  )
}
export {CartProvider}
export default CartContext;