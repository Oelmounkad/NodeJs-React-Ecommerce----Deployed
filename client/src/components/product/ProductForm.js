import React,{useContext,useState,useEffect} from 'react'
import ProductContext from '../../context/product/ProductContext'


 const ProductForm = () => {

    const productContext = useContext(ProductContext)
    const {current,setCurrent,clearCurrent,addProduct} = productContext

    const [product, setProduct] = useState({
        name: '',
        description: '',
        quantity: '',
        price: ''
    });

const { name, description, quantity, price } = product;

    const onChange = e => {
        setProduct({...product, [e.target.name] : e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(product)
        addProduct(product)

    }

    

    return (
<form onSubmit={onSubmit}>
  <h2 className="text-primary">Add Contact</h2>

<input type="text" 
placeholder="name" 
name="name" 
value={name} 
onChange={onChange}/>

<input type="text" 
placeholder="description" 
name="description" 
value={description} 
onChange={onChange}/>

<input type="text" 
placeholder="price" 
name="price" 
value={price} 
onChange={onChange}/>

<input type="text" 
placeholder="quantity" 
name="quantity" 
value={quantity} 
onChange={onChange}/>
<div>
    <input type="submit" value='Add Contact' className="btn btn-primary btn-block"/>
</div>

</form>
    )
}
export default ProductForm