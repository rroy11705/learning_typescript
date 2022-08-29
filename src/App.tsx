import { useState } from 'react'
import Greet from './components/Greet'
import './App.css';

function App() {
  const username = "Bruce";
  const messageCount = 8;
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="App">
      <Greet 
        username={username}
        messageCount={messageCount}
        isUserLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
      />
    </div>
  );
}

export default App;
