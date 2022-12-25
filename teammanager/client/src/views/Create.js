import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

const Create = (props) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [position, setPosition] = useState("");
  const [status] = useState(["Undecided", "Undecided", "Undecided"]);

  const handelSubmit = (e) => {
    e.preventDefault();
    props.createPlayer({name, position, status});
    setName("");
    setPosition("");
}

const handelName = (e) => {
  setName(e.target.value);
  if (e.target.value.length < 1){
    setNameError("Name is required");
  } else if (e.target.value.length < 2) {
    setNameError("At least two characters!")
  } else {
    setNameError("");
  }
}
  return (
    <div>
      <h3><NavLink style={({ isActive }) => (isActive ? {fontWeight: "bolder", textDecoration:"none"} : {})} to={"/players/list"}>List</NavLink> | <NavLink style={({ isActive }) => (isActive ? {fontWeight: "bolder", textDecoration:"none"} : {})} to={"/players/create"}>Add Player</NavLink></h3>
      <h3>Add Player</h3>
      <form onSubmit={handelSubmit}>
        {props.errors.map((err, index) => <p key={index} style={{ color: "red" }}>{err}</p>)}
        <div style={{ width: '200px', margin: '0 auto' }}>
          <label>Player Name: </label>
          <input type="text" value={name} onChange={handelName} />
          {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> :
                    ''
                }
        </div>
        <div style={{ width: '200px', margin: '0 auto' }}>
          <label>Preferred Position: </label>
          <input type="text" value={position} onChange={e => setPosition(e.target.value)} />
        </div>
        {
          name.length==0 || nameError?
          <input style={{ width: '100px', margin: '1%' }} type="submit" value="Submit" disabled/>:
          <input style={{ width: '100px', margin: '1%' }} type="submit" value="Submit" />
        }
      </form>
    </div>
  )
}

export default Create