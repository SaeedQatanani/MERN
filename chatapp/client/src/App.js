import { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Form from './components/Form';

function App() {
  const [name, setName] = useState("");
  const handelName = (name) => {
    setName(name);
  }
  return (
    <div className="App">
      <h1 style={{width:"80%", margin:"1% auto", padding:"1%",backgroundColor:"#999"}}>MERN Chat</h1>
      {
        name?
        <Chat name={ name }/>:
        <Form handelName={ handelName }/>
      }
      
      
    </div>
  );
}

export default App;
