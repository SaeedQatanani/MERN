import React from 'react'
import { Link } from 'react-router-dom'
const Empty = () => {
  return (
    <div>
        <h1>Nothing here.</h1>
        <Link to={"/"}>Home</Link>
    </div>
  )
}

export default Empty