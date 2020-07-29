import React,{useEffect,useContext} from 'react'
import ProductContext from '../../context/product/ProductContext'
import Product from '../product/Product'
import {Spinner} from 'react-bootstrap'

const Browse = () => {

    const productContext = useContext(ProductContext)
    const {getAllProducts,allProducts,loading} = productContext

useEffect(() => {
    getAllProducts()
}, [])

    return (
        <div className="container">
            <div className="row">
            {allProducts !== null && !loading ?
                  allProducts.map(product => <Product key={product._id} product={product} parent="browse" col="4"></Product> ):
                  <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                    }}>
                      <Spinner animation="border" variant="primary" />
                   </div> 
                
                }
            </div>
        </div>
    )
}

export default Browse