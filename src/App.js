import React, { useState } from 'react';
import './App.css';
import UserTable from './tables/UserTables';

function App() {
  const usersData = [
    {id:1, name: 'Tania', username: 'floppydiskette'},
    {id:2, name: 'Craig', username: 'siliconeidolon'},
    {id:3, name: 'Ben', username: 'benisphere'}
  ]

  const [users, setUsers] = useState(usersData)
  return (
    <div className="container">
    <h1>CRUD App using Hooks</h1>
      <div className="flex-row">
      <div className="flex-large">
       <h2>Add user</h2>
       </div>
      <div className="flex-large">
      <h2>View users</h2>
      <UserTable />

      </div>
    </div>

    </div>
    
        
);
}

export default App;
