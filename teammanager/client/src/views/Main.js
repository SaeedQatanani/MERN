import React, { useEffect, useState } from 'react'
import {
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import List from '../components/List'
import Create from '../components/Create'
import axios from 'axios';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [ loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId));
    }
    return (
        <div>
            <h3><NavLink style={({ isActive }) => (isActive ? {fontWeight: "bolder", textDecoration:"none"} : {})} to={"/players/list"}>List</NavLink> | <NavLink style={({ isActive }) => (isActive ? {fontWeight: "bolder", textDecoration:"none"} : {})} to={"/players/create"}>Add Player</NavLink></h3>
            <Routes>
                {loaded && <Route element={<List players={players} removeFromDom={removeFromDom} />} path="list" />}
                <Route element={<Create />} path="create" />
            </Routes>
        </div>
    )
}

export default Main