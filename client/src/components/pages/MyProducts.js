import React,{useEffect,useContext} from 'react'
import {Container, Row} from 'react-bootstrap'
import ProductContext from '../../context/product/ProductContext'
import Product from '../product/Product'
import ProductForm from '../product/ProductForm'

 const MyProducts = () => {

    const productContext = useContext(ProductContext)
    const {getProducts,products} = productContext

useEffect(() => {
   getProducts()
}, []);

    return (
        
        <div className="container">

           <div className="row">
               <div className="col">
                   <div className="row">
                       {products && products.map(product => <Product key={product._id} product={product}></Product> ) }
            
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