import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './views/Main';
import './App.css';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/products/"/>
        <Route element={<Detail/>} path="/products/:id"/>
      </Routes>
    </div>
  );
}

export default App;
