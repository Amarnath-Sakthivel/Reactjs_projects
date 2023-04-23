import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import RouterPage from './components/RouterPage';
import axios from 'axios';


function App() {

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const isLoggedInUser = async (username, password) =>{
    const {data} = await axios.get('http://localhost:8081/users');
    const isValidUser = data.map(user => user.username === username && user.password === password );
    setUserLoggedIn(isValidUser)
  }

  // useEffect( async ()=>{
  //   const login = async () => {
  //     const {data} = await axios.get('http://localhost:8081/users');
  //     const isValidUser = data.map(user => user.username === 'amar' && user.password === 'amar' );
  //     setUserLoggedIn(isValidUser)
  //   }
  //   login()
  // }, [])

  return (
    <div className="App">
      
     { isUserLoggedIn ? <Login isLoggedInUser = {isLoggedInUser}/> :<RouterPage/>}

    </div>
  );
}

export default App;
