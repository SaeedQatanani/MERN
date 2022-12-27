import React from 'react'
import {NavLink} from "react-router-dom";
import DeleteButton from '../components/DeleteButton'

const List = (props) => {
  const { players, removeFromDom } = props;

  return (
    <div>
      <h3><NavLink style={({ isActive }) => (isActive ? {fontWeight: "bolder", textDecoration:"none"} : {})} to={"/players/list"}>List</NavLink> | <NavLink style={({ isActive }) => (isActive ? {fontWeight: "bolder", textDecoration:"none"} : {})} to={"/players/create"}>Add Player</NavLink></h3>
      <table style={{ margin: "0 auto", border: "1px solid black" }}>
        <thead>
          <tr>
          <th style={{ margin: "0 auto", border: "1px solid black" }}>Player Name</th>
          <th style={{ margin: "0 auto", border: "1px solid black" }}>Preferred Position</th>
          <th style={{ margin: "0 auto", border: "1px solid black" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
        {players.map((player, i) => {
          return <tr key={i}>
            <td style={{ margin: "0 auto", border: "1px solid black" }}>{player.name}</td>
            <td style={{ margin: "0 auto", border: "1px solid black" }}>{player.position}</td>
            <td style={{ margin: "0 auto", border: "1px solid black" }}>
            <DeleteButton player={ player } handelDelete={ () => removeFromDom(player._id) }/>
            </td>
          </tr>
        })}
        </tbody>
      </table>
    </div>
  )
}

export default List