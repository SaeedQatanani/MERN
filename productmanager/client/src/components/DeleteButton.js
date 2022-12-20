import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/products/' + props.productId)
            .then(res => props.handelDelete())
            .catch(err => console.error(err));
    } 
  return (
    <div>
        <button onClick={deleteProduct}>Delete</button>
    </div>
  )
}

export default DeleteButton