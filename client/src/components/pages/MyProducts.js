import React,{useEffect,useContext,useState} from 'react'
import {Spinner} from 'react-bootstrap'
import ProductContext from '../../context/product/ProductContext'
import Product from '../product/Product'
import ProductForm from '../product/ProductForm'

 const MyProducts = () => {

    const productContext = useContext(ProductContext)
    const {getProducts,products,loading,error} = productContext


useEffect(() => {
   getProducts()
}, []);


    return (
        
        <div className="container">

           <div className="row">
               <div className="col">
                   <div className="row">

                   {products !== null && !loading ?
        
          products.map(product => (
                
                  <Product key={product._id} product={product} parent="myproducts" col="6" />
              
              ))
        
       : (
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
            }}>
              <Spinner animation="border" variant="primary" />
           </div> 
      )}

             </div>

                  <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                    }}>
                      <h6>{error}</h6>
                   </div> 

               </div>
               
           
           <div className="col-md-4">
               <ProductForm />
           </div> 
           </div>
        </div>
    )
}
export default MyProducts