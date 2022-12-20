import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'
const AuthorList = (props) => {
    const { removeFromDom } = props;
  return (
    <div>
        <Link to={"/new"}>Add new author</Link>
        <p>We have quotes by:</p>
        <table style={{margin:"0 auto", border:"1px solid black"}}>
            <thead>
                <th style={{margin:"0 auto", border:"1px solid black"}}>Author</th>
                <th  style={{margin:"0 auto", border:"1px solid black"}}>Actions available</th>
            </thead>
            {props.authors.sort((a, b) => a.name > b.name ? 1 : -1,).map((author, i) => {
                    return <tr key={i}>
                        <td style={{margin:"0 auto", border:"1px solid black"}}>{author.name}</td>
                        <td style={{margin:"0 auto", border:"1px solid black", display:"flex", justifyContent:"space-evenly"}}>
                            <button type="submit"><Link to={"/edit/"+author._id}>Edit</Link></button>
                            <DeleteButton authorId={author._id} handelDelete={ () => removeFromDom(author._id) }/>
                        </td>
                    </tr>
                })}
        </table>
    </div>
  )
}

export default AuthorList