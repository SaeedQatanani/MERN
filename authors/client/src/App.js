import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from './views/Main';
import Update from './views/Update';
import Create from './views/Create';
import Empty from './views/Empty';
function App() {
  return (
    <div className="App">
      <h2>Favorite authors</h2>
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Update/>} path="/edit/:id"/>
        <Route element={<Create/>} path="/new/"/>
        <Route element={<Empty/>} path="/*"/>
        
      </Routes>
    </div>
  );
}

export default App;
