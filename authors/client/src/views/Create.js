import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios';
const Create = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => navigate("/"))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <h4>Add new author</h4>
        <AuthorForm handelSubmit={createAuthor} initialName="" errors={errors}/>
    </div>
  )
}

export default Create