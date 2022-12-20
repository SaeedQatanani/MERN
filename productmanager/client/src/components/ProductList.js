import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const { removeFromDom } = props;
    
    return (
        <div>
            <h2>List of Products:</h2>
            <ul>
                {props.products.map((product, i) => {
                    return <div key={i}>
                        <Link to={"/products/" + product._id}><li style={{ width: '100px', margin: '0 auto' }}>{product.title}</li></Link>
                        <DeleteButton productId={ product._id } handelDelete ={ () => removeFromDom(product._id) }/>
                    </div>
                })}
            </ul>
        </div>
    )
}

export default ProductList