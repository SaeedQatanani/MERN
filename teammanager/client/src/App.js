import './App.css';
import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Status from './views/Status'
import List from './views/List';
import Create from './views/Create';
import axios from 'axios';
import NoPage from './views/NoPage';

function App() {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

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

const createPlayer = player => {
  axios.post('http://localhost:8000/api/players', player)
      .then(res => {setPlayers([...players, res.data]);
                    setErrors([]);
                    navigate("/players/list")
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
}

  return (
    <div className="App">
      <h2><Link to={"/players/list"}>Manage Players</Link> | <Link to={"/status/game/1"}>Manage Player Status</Link></h2>
      <Routes>
        {/* <Route element={<Main/>} path="/players/*"/> */}
        {loaded && <Route element={<List players={players} removeFromDom={removeFromDom} />} path="/players/list" />}
        <Route element={<Create createPlayer={ createPlayer } errors={ errors }/>} path="/players/create"/>
        <Route element={<Status players={ players }/>} path="/status/game/:num"/>
        <Route element={<NoPage/>} path="/*"/>
      </Routes>
    </div>
  );
}

export default App;
