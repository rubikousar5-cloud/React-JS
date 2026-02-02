import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [name, setName] = useState("Rubi");
  const [rno, setrollno] = useState("");
  
  return (
    <div>
      <h2>Simple Form</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your name is: {name}</p>
    

      <input
        type="number"
        placeholder="Enter your roll no"
        value={rno}
        onChange={(e) => setrollno(e.target.value)}
      />

      <p>Your roll no is: {rno}</p>
    </div>
  );
}

export default App;
