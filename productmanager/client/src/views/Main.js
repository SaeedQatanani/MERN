import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import axios from 'axios';
const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                // console.log(res.data.products)
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
  return (
    <div>
        <ProductForm/>
        <hr/>
        {loaded && <ProductList products={ products }/>}
    </div>
  )
}

export default Main