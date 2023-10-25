import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {
  const [userList,setUserList]=useState([])
  const addUserHandler=(userInput)=>{
    setUserList((prevState)=>[
        ...prevState,
        userInput
    ])
  }
  console.log(userList)
  return (
    <div>
      <AddUser onUserAdd={addUserHandler}/>
      {
      (
        userList.length>0 && <UsersList usersList={userList}/>
      )}

    </div>
  );
}

export default App;
