import { useState } from 'react'
import Greet from './components/Greet'
import Person from './components/Person';
import PersonList from './components/PersonList'
import ChildrenExample from './components/ChildrenExample'
import './App.css';
import Heading from './components/Heading';
import Button from './components/Button'
import Container from './components/Container'
import UserLogin from './components/UserLogin';
import ThemeButton from './components/ThemeButton';
import RefExample2 from './components/RefExample2';
import TodoList from './components/TodoList';

function App() {
  const username = "Bruce";
  const messageCount = 8;
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const name = {
    first: "Rahul",
    last: "Roy"
  }
  const nameList = [
    {
      first: "Bart",
      last: "Simpson"
    },
    {
      first: "Bojack",
      last: "Horseman"
    },
    {
      first: "Peter",
      last: "Griffin"
    }
  ]

  return (
    <div className="App">
      {/* <Greet 
        username={username}
        messageCount={messageCount}
        isUserLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
      />
      <Person name={name} />
      <PersonList nameList={nameList} /> */}
      {/* <ChildrenExample>
        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i>
      </ChildrenExample>
      <ChildrenExample>
        <Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
      </ChildrenExample>
      <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id)
      }} /> */}
      {/* <Container 
        styles={{ textAlign: 'center', fontSize: '24px', fontWeight: 600, color: '#888888' }} 
      /> */}
      {/* <UserLogin />
      <ThemeButton /> */}
      {/* <RefExample2 /> */}
      <TodoList />
    </div>
  );
}

export default App;
