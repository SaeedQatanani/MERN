import React from 'react'
import {Link} from "react-router-dom";
import DeleteButton from '../components/DeleteButton'

const List = (props) => {
  const { players, removeFromDom } = props;

  return (
    <div>
      <h3><Link to={"/players/list"}>List</Link> | <Link to={"/players/create"}>Add Player</Link></h3>
      <table style={{ margin: "0 auto", border: "1px solid black" }}>
        <thead>
          <th style={{ margin: "0 auto", border: "1px solid black" }}>Player Name</th>
          <th style={{ margin: "0 auto", border: "1px solid black" }}>Preferred Position</th>
          <th style={{ margin: "0 auto", border: "1px solid black" }}>Actions</th>
        </thead>
        {players.map((player, i) => {
          return <tr key={i}>
            <td style={{ margin: "0 auto", border: "1px solid black" }}>{player.name}</td>
            <td style={{ margin: "0 auto", border: "1px solid black" }}>{player.position}</td>
            <td style={{ margin: "0 auto", border: "1px solid black" }}>
            <DeleteButton player={ player } handelDelete={ () => removeFromDom(player._id) }/>
            </td>
          </tr>
        })}
      </table>
    </div>
  )
}

export default List