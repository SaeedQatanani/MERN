import React, { useEffect, useState } from 'react'
import {
    Routes,
    Route,
    Link,
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
            <h3><Link to={"/players/list"}>List</Link> | <Link to={"/players/create"}>Add Player</Link></h3>
            <Routes>
                {loaded && <Route element={<List players={players} removeFromDom={removeFromDom} />} path="list" />}
                <Route element={<Create />} path="create" />
            </Routes>
        </div>
    )
}

export default Main