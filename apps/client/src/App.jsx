import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {

  const [count, setCount] = useState(0)

  const API_URL = 'http://localhost:3000';

  async function getCount() {
    const response = await axios.get(`${API_URL}`);
    console.log('Count:', response.data);
    setCount(response.data)
  }
  
  async function sumCount() {
    const response = await axios.post(`${API_URL}/sum`);
    console.log('Incremented Count:', response.data);
    setCount(response.data)
  }
  
  async function resCount() {
    const response = await axios.post(`${API_URL}/res`);
    console.log('Reset Count:', response.data);
    setCount(response.data)
  }
  

  useEffect(()=> {getCount()},[])
  return (
    <>
      <div className="card">
      <button onClick={() => resCount()}>
          Restar 1
        </button>
        <p>count is {count}</p>
        <button onClick={() => sumCount()}>
          Sumar 1
        </button>
      </div>
    </>
  );
}

export default App;
