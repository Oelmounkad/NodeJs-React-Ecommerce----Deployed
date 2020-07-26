import React from 'react'
import {Card} from 'react-bootstrap'


const Product = ({product}) => {
    return (
        <div className="col-md-6 col-md-offset-2"> 

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{product.name}</Card.Subtitle>
    <Card.Text>
    {product.description}
    </Card.Text>
    <Card.Link href="#">Delete</Card.Link>
    <Card.Link href="#">Edit</Card.Link>
  </Card.Body>
</Card>
</div>

    )
}

export default Product