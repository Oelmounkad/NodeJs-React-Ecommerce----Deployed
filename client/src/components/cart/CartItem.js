import React ,{useContext} from 'react'
import CartContext from '../../context/cart/CartContext'
import ProductContext from '../../context/product/ProductContext'

 const CartItem = ({item}) => {

    const cartContext = useContext(CartContext)
    const {deleteCartItem} = cartContext

    const productContext = useContext(ProductContext)
    const {updateQuantityProduct} = productContext

    return (
        <>
       
                             <li class="cart_item clearfix">
                                 <div class="cart_item_image"><img src="" alt="" /></div>
                                 <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                     <div class="cart_item_name cart_info_col">
                                         <div class="cart_item_title">Name</div>
                                    <div class="cart_item_text">{item.product.name}</div>
                                     </div> 
                                     <div class="cart_item_quantity cart_info_col">
                                         <div class="cart_item_title">Quantity</div>
                                         <div class="cart_item_text">{item.quantity}</div>
                                     </div>
                                     <div class="cart_item_price cart_info_col">
                                         <div class="cart_item_title">Price</div>
                                         <div class="cart_item_text">{item.product.price}</div>
                                     </div>
                                     <div class="cart_item_total cart_info_col">
                                         <div class="cart_item_title">Total</div>
                                    <div class="cart_item_text">{ item.product.price*item.quantity  }</div>
                                     </div>
                                     <div class="cart_item_color cart_info_col">
                                         <div class="cart_item_title">Action</div>
                                         <div class="cart_item_text">
                                              <button className="btn btn-danger" onClick={() => {
                                                  deleteCartItem(item._id)
                                              }}><i class="fas fa-trash" /></button>
                                              <button className="btn btn-success" onClick={() => {
                                                  updateQuantityProduct(item.product._id,item.quantity)
                                                  deleteCartItem(item._id)
                                              }}><i class="far fa-check-circle"/></button>
                                               </div>
                                     </div>
                                 </div>
                             </li>
                             <hr/>
                        
                    </>
    )
}
export default CartItem