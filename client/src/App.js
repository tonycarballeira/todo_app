import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listofUsers, setListOfUsers] = useState([]);
    //if the app was running online you would replace localhost with the site url
    // this useEffect function makes an api call to the backend
    useEffect(() => {
      Axios.get("http://localhost:3001/getUsers").then((response) => {
        setListOfUsers(response.data);
      });
    }, [])

  
  return (
    <div className="App">
      <div className='usersDisplay'>
        {listofUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );          
        })}
      </div>
    </div>
  );
}

export default App;
