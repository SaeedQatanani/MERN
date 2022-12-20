import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res => {
                setAuthor(res.data.author);
                setLoaded(true);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/'+id, author)
            .then(res => navigate("/"))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }
  return (
    <div>
    <Link to={"/"}>Home</Link>
    {loaded ? (<>
        <h4>Edit this author</h4>
        <AuthorForm handelSubmit={updateAuthor} initialName={author.name} errors={errors}/>
    </>): <div><p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p><Link to={"/new"}>C</Link></div>}
    </div>
  )
}

export default Update