import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const AuthorForm = (props) => {
    const [name, setName] = useState(props.initialName);

    const handelSubmit = (e) => {
        e.preventDefault();
        props.handelSubmit({name});
        setName("");
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                {props.errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
                <div style={{width:'200px', margin:'0 auto'}}>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <button type="submit"><Link to={"/"}>Cancel</Link></button>
                <input style={{width:'100px', margin:'1%'}} type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AuthorForm