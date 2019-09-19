import React, { useState } from 'react';
import './tables/Form';
import './App.css';


function App() {
  const usersInfo = [
    {id: 1, name: 'Sally Davidson', email: 'sally@outlook.com', role: 'Dev Ops'},
    {id: 2, name: 'Robert Williams', email: 'robby123@gmail.com', role: 'Back End'},
    {id: 3, name: 'Andie Smith', email: 'smith.andie@aol.com', role: 'Senior Dev'}
  ]
  const [people, setPeople] = useState(usersInfo)
  return (
    <div className="container">
    <Form people={people} />
    <h1>Team Builder</h1>
      <div className="flex-row">
      <div className="flex-large">
       <h2>Add user</h2>
       </div>
      <div className="flex-large">
      <h2>View users</h2>
      

      </div>
    </div>

    </div>
    
        
);
}

export default App;
