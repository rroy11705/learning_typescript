import { useState } from 'react'
import Greet from './components/Greet'
import Person from './components/Person';
import PersonList from './components/PersonList'
import ChildrenExample from './components/ChildrenExample'
import './App.css';
import Heading from './components/Heading';
import Button from './components/Button'

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
      <ChildrenExample>
        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i>
      </ChildrenExample>
      <ChildrenExample>
        <Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
      </ChildrenExample>
      <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id)
      }} />
    </div>
  );
}

export default App;
