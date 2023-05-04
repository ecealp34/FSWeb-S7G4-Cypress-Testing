import logo from './logo.svg';
import Form from './Form';
import { useEffect } from "react"
import './App.css';
import axios from 'axios';


function App() {
  const { kullanıcılar } = [];
  useEffect(() => {
  function addMember(newMember) {
  axios
  .post("https://reqres.in/api/users", newMember)
  .then((response) => {
   console.log("response", response.data);
    })
   .catch((error) => {
     console.loog(error);
  })}})
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form kullanıcılar={person} />;
    </div>
  );
}


export default App;
