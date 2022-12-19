import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
    }, [])

    const handelSubmit = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/'+id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        navigate("/products/"+id);
    }
    return (
        <div>
            <h2>Edit a Product</h2>
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
                <input style={{width:'100px', margin:'1%'}} type='submit' value='Edit'/>
            </form>
        </div>
    )
}

export default Update