import React,{useEffect,useContext,useState} from 'react'
import CartContext from '../../context/cart/CartContext'
import CartItem from '../cart/CartItem'
import {Spinner} from 'react-bootstrap'


 const MyCart = () => {

 const cartContext =  useContext(CartContext)
 const {cart,getCartItems} = cartContext

 const [state, setstate] = useState('');
   
 const calculateTotal = c => {

      let total = 0
      c.forEach(x => total = total + x.quantity * x.product.price)
      console.log('total : '+total)
      return total
 }


 useEffect(() => {

   getCartItems()
 }, []);


    return (
       <>
        <div class="cart_section">
     <div class="container-fluid">
         <div class="row">
             <div class="col-lg-10 offset-lg-1">
                 <div class="cart_container">
    <div class="cart_title">Shopping Cart<small> ({cart !== null && <> {cart.length} </>} 
    item{ cart !== null && cart.length == 1 ? <></> : <>s</>  } in your cart) </small></div>
                     <div class="cart_items">
                         <ul class="cart_list">
           
              {cart !== null ? cart.map(item => <CartItem key={item._id} item={item} /> )
              
              :

                   <div style={{
                     position: 'absolute', left: '50%', top: '50%',
                     transform: 'translate(-50%, -50%)'
                     }}>
                       <Spinner animation="border" variant="primary" />
                    </div>

              }
                   
                   </ul>
                     </div>
                    
                     <div class="cart_buttons"> <button type="button" class="button cart_button_clear">Continue Shopping</button></div>
                 </div>
             </div>
         </div>
     </div>
 </div>       
          
</>
    )
}
export default MyCart