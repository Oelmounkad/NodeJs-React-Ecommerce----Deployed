import React,{useContext} from 'react'
import {Card,Spinner} from 'react-bootstrap'
import ProductContext from '../../context/product/ProductContext'

const Product = ({product,col,parent}) => {

  const productContext = useContext(ProductContext)
  const {setCurrent,deleteProduct} = productContext


    return (
    <div className={`col-md-${col} col-md-offset-2`}> 
<Card style={{ width: '18rem' }}>
  <Card.Body>
 {parent === 'browse' && <Card.Title>Seller : {product.user.name}</Card.Title>}   
    <Card.Title>{product.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{product.name} is a {product.description}</Card.Subtitle>
    <Card.Text>
    In stock : {product.quantity}
    </Card.Text>
    <Card.Text>
    Price :  {product.price} €
    </Card.Text>
  {parent === 'myproducts'  && <>
    <button type="button" className="btn btn-warning" onClick={() => setCurrent(product)}><i className="fas fa-pen-square"></i>Edit</button>
    <button type="button" className="btn btn-danger" onClick={() => deleteProduct(product._id)}><i className="fas fa-trash"></i>Delete</button> 
    </>
    }
  {parent === 'browse'  && <>
  <button type="button" className="btn btn-primary" onClick={() => setCurrent(product)}>View</button>
  <button type="button" className="btn btn-secondary" onClick={() => deleteProduct(product._id)}><i className="fas fa-shopping-cart"></i>Add to cart</button> 
  </>}
 
 </Card.Body>
</Card>
</div> 
    
       

    )
}

export default Product