import React,{useContext} from 'react'
import {Card,Spinner} from 'react-bootstrap'
import ProductContext from '../../context/product/ProductContext'

const Product = ({product}) => {

  const productContext = useContext(ProductContext)
  const {setCurrent,deleteProduct} = productContext


    return (
    <div className="col-md-6 col-md-offset-2"> 
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{product.name} is a {product.description}</Card.Subtitle>
    <Card.Text>
    Available : {product.quantity}
    </Card.Text>
    <Card.Text>
     {product.price} €
    </Card.Text>
    <button type="button" className="btn btn-warning" onClick={() => setCurrent(product)}>Edit</button>
    <button type="button" className="btn btn-danger" onClick={() => deleteProduct(product._id)}>Delete</button>
 </Card.Body>
</Card>
</div> 
    
       

    )
}

export default Product