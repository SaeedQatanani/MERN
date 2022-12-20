import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
  const deleteAuthor = (e) => {
    const confirm = window.confirm("Are you sure you want to delete this author?");
    if (confirm) {
        axios.delete('http://localhost:8000/api/authors/' + props.authorId)
            .then(res => props.handelDelete())
            .catch(err => console.error(err));
    }
}

  return (
    <div>
        <button onClick={deleteAuthor}>Delete</button>
    </div>
  )
}

export default DeleteButton