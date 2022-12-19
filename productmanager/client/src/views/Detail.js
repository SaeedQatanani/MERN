import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
    }, [])
  return (
    <div>
        <h2>{ product.title }</h2>
        <ul>
            <li style={{width:'150px', margin:'0 auto'}}>Price: { product.price }</li>
            <li style={{width:'150px', margin:'0 auto'}}>Description: { product.description }</li>
        </ul>
    </div>
  )
}

export default Detail