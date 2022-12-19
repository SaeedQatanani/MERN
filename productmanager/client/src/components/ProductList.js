import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
  return (
    <div>
        <h2>List of Products:</h2>
        <ul>
            {props.products.map((product,i)=>
                <Link to={"/products/"+product._id}><li style={{width:'100px', margin:'0 auto'}} key={i}>{product.title}</li></Link>
            )}
        </ul>
    </div>
  )
}

export default ProductList