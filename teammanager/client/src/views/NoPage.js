import React from 'react'
import {Link} from "react-router-dom";
const NoPage = () => {
  return (
    <div>
        <h1>Nothing to see here</h1>
        <h2><Link to="/players/list">See something</Link></h2>
    </div>
  )
}

export default NoPage