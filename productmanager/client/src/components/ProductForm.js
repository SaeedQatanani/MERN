import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [title, setTitle] = useState(props.initialTitle);
    const [price, setPrice] = useState(props.initialPrice);
    const [description, setDescription] = useState(props.initialDescription);

    const handelSubmit = e => {
        e.preventDefault();
        props.handelSubmit({title,price,description});
        setTitle("");
        setPrice("");
        setDescription("");
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
                <input style={{width:'100px', margin:'1%'}} type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default ProductForm