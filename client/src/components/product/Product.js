import React,{useContext} from 'react'
import {Card,Button} from 'react-bootstrap'
import ProductContext from '../../context/product/ProductContext'

const Product = ({product}) => {

  const productContext = useContext(ProductContext)
  const {setCurrent} = productContext


    return (
        <div className="col-md-6 col-md-offset-2"> 

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{product.name}</Card.Subtitle>
    <Card.Text>
    {product.description}
    </Card.Text>
    <button onClick={() => setCurrent(product)}>Edit</button>
  </Card.Body>
</Card>
</div>

    )
}

export default Product