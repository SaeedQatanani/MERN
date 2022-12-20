import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
            })
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/'+id, product)
            .then(res => console.log(res))
            .catch(err => console.error(err));
        navigate("/products/"+id);
    }
    return (
        <div>
            <h2>Edit a Product</h2>
            {loaded && (<>
                <ProductForm handelSubmit={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>
                <DeleteButton productId={ product._id } handelDelete ={ () => navigate("/products") }/>
            </>
            )}
        </div>
    )
}

export default Update