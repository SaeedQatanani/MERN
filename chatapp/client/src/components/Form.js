import React, { useState } from 'react'

const Form = (props) => {
    const [name, setName] = useState("");
    const handelSubmit = e => {
        e.preventDefault();
        props.handelName(name);
    }
  return (
    <div style={{width:"82%", margin:"0 auto", border:"1px solid black"}}>
        <h3>Get started right now!</h3>
        <form onSubmit={handelSubmit}>
            <div style={{margin:"1% 1% 5%"}}>
                <label>I want to start chatting with the name...</label><br/>
                <input type="text" placeholder="My name.." value={name} onChange={e=>setName(e.target.value)} />
                <input type="submit" value="Start Chatting"/>
            </div>
        </form>
    </div>
  )
}

export default Form