import React from 'react'
import { Link, useParams } from "react-router-dom";
const Status = (props) => {
  const { players } = props;
  const { num } = useParams();

  const handelButton = (e) => {
    if(e.target.value=="Playing"){
      e.target.style.backgroundColor="green";
    }
    else if(e.target.value=="Not Playing"){
      e.target.style.backgroundColor="red";
    }else {
      e.target.style.backgroundColor="yellow";
    }
  }
  
  return (
    <div>
      <h1>Player Status - Game { num }</h1>
      <h3><Link to={"/status/game/1"}>Game 1</Link> | <Link to={"/status/game/2"}>Game 2</Link> | <Link to={"/status/game/3"}>Game 3</Link></h3>
      <table style={{ margin: "0 auto", border: "1px solid black" ,width:"60%"}}>
        <thead>
          <th style={{ margin: "0 auto", border: "1px solid black" }}>Player Name</th>
          <th style={{ margin: "0 auto", border: "1px solid black" }}>Actions</th>
        </thead>
        {players.map((player, i) => {
          return <tr key={i}>
            <td style={{ margin: "0 auto", border: "1px solid black" }}>{player.name}</td>
            <td style={{ margin: "0 auto", border: "1px solid black" ,display:"flex", justifyContent:"space-evenly"}}>
              <input type="submit" value="Playing" style={{margin:"1%"}} onClick={handelButton}/>
              <input type="submit" value="Not Playing" style={{margin:"1%"}} onClick={handelButton}/>
              <input type="submit" value="Undecided" style={{margin:"1%"}} onClick={handelButton}/>
            </td>
          </tr>
        })}
      </table>
    </div>
  )
}

export default Status