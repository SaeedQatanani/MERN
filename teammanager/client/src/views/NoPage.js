import React from 'react'
import {NavLink} from "react-router-dom";
const NoPage = () => {
  return (
    <div>
        <h1>Nothing to see here</h1>
        <h2><NavLink style={({ isActive }) => (isActive ? {fontWeight: "bolder", textDecoration:"none"} : {})} to="/players/list">See something</NavLink></h2>
    </div>
  )
}

export default NoPage