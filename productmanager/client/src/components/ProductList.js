import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
        
    }
    return (
        <div>
            <h2>List of Products:</h2>
            <ul>
                {props.products.map((product, i) => {
                    return <div key={i}>
                        <Link to={"/products/" + product._id}><li style={{ width: '100px', margin: '0 auto' }}>{product.title}</li></Link>
                        <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                    </div>
                })}
            </ul>
        </div>
    )
}

export default ProductList