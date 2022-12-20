import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {

    const deleteProduct = (e) => {
        const confirm = window.confirm("Are you sure you want to delete this product?");
        if (confirm) {
            axios.delete('http://localhost:8000/api/products/' + props.productId)
                .then(res => props.handelDelete())
                .catch(err => console.error(err));
        }
    }
    return (
        <div>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default DeleteButton