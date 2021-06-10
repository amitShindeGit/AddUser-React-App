import React, { useState } from 'react';
import AddUser from './components/Users/AddUsers'
import UsersList from './components/Users/UsersList';



function App() {
  
  const [usersList, setUsersList] = useState([]);

  const addUsersList = (uName, uAge) => {
     setUsersList((prevState) => {
       return [...prevState, {name : uName, age : uAge, id : Math.random().toString() }]
     });
  };

  return (
    <div>
      <AddUser onAddUser={addUsersList} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
