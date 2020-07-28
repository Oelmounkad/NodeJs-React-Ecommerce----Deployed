import React,{useContext,useState,useEffect} from 'react'
import ProductContext from '../../context/product/ProductContext'
import { CLEAR_CURRENT } from '../../context/types'


 const ProductForm = () => {


    const productContext = useContext(ProductContext)
    const {current,updateProduct,clearCurrent,addProduct} = productContext

    useEffect(() => {
        if(current != null){
         setProduct(current)
        }else{
         setProduct({
             name: '',
             description: '',
             price: '',
             quantity: ''
         })
        }
     }, [productContext,current]);
    
    const [product, setProduct] = useState({
        name: '',
        description: '',
        quantity: '',
        price: ''
    });

const { name, description, quantity, price } = product;

const clearAll = () => {
    clearCurrent()
}
    const onChange = e => {
        setProduct({...product, [e.target.name] : e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()

       if(current !== null){
        updateProduct(product)
       }else{
           addProduct(product)
       } 
        clearAll()
    }

    

    return (
<form className="form-group" onSubmit={onSubmit}>
    <h2 className={current ? 'text-warning' :'text-primary' } >{ current ? 'Edit Product' : 'Add Product' }</h2>

<input type="text" 
placeholder="name" 
name="name" 
value={name} 
className="form-control"
onChange={onChange}/>

<input type="text" 
placeholder="description" 
name="description" 
value={description}
className="form-control" 
onChange={onChange}/>

<input type="text" 
placeholder="price" 
name="price" 
value={price} 
className="form-control"
onChange={onChange}/>

<input type="text" 
placeholder="quantity" 
name="quantity" 
value={quantity} 
className="form-control"
onChange={onChange}/>
<div>
    <input type="submit" value={current ? 'Edit Product' : 'Add Product'} className={`btn btn-${current ? 'warning' : 'primary'} btn-block`} />
</div>
{current && <button className="btn btn-light btn-block" onClick={clearAll}> Clear </button>}


</form>

    )
}
export default ProductForm