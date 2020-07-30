import React,{useEffect,useContext} from 'react'
import CartContext from '../../context/cart/CartContext'
import CartItem from '../cart/CartItem'
import {Spinner} from 'react-bootstrap'


 const MyCart = () => {

 const cartContext =  useContext(CartContext)
 const {cart,getCartItems} = cartContext

 useEffect(() => {

   getCartItems()
    
 }, []);


    return (
       <>
      <div className="container">
    <div className="card shopping-cart">
            <div className="card-header bg-dark text-light">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>{' '}
                Shopping cart
              
                <div className="clearfix"></div>
            </div>
            <div className="card-body">
              {cart !== null ? cart.map(item => <CartItem key={item._id} item={item} /> ) :

                   <div style={{
                     position: 'absolute', left: '50%', top: '50%',
                     transform: 'translate(-50%, -50%)'
                     }}>
                       <Spinner animation="border" variant="primary" />
                    </div>

              }
                   
                    <hr /> 
                    
                 
            </div>
            <div className="card-footer">
                <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                  
                </div>
                <div className="pull-right" style={{margin: "10px"}}>
                    <a href="" className="btn btn-success pull-right">Checkout</a>
                    <div className="pull-right" style={{margin: "5px"}}>
                        Total price: <b>50.00€</b>
                    </div>
                </div>
            </div>
        </div>
</div>
</>
    )
}
export default MyCart