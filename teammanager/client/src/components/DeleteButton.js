import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const { player,  handelDelete} = props;
  const deleteAuthor = (e) => {
    const confirm = window.confirm("Are you sure you want to delete "+player.name+" ?");
    if (confirm) {
        axios.delete('http://localhost:8000/api/players/' + player._id)
            .then(res => handelDelete())
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