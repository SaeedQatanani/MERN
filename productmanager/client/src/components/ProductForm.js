import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const handelSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>{console.log(res); setTitle(""); setPrice(); setDescription("")})
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={handelSubmit}>
                <div style={{width:'200px', margin:'0 auto'}}>
                    <label>Title: </label>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div style={{width:'200px', margin:'0 auto'}}>
                    <label>Price: </label>
                    <input type='number' value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                <div style={{width:'200px', margin:'0 auto'}}>
                    <label>Description: </label>
                    <input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <input style={{width:'100px', margin:'1%'}} type='submit' value='Create'/>
            </form>
        </div>
    )
}

export default ProductForm