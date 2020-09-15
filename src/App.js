import React, {useState} from 'react';
import Teams from './components/Teams.js';
import TeamForm from './components/TeamForm';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teams, setTeams] = useState ([
    {
      id: 1,
      name: "Brenson",
      position: "Web Developer Student",
      email: "brensonw300@gmail.com",
    }
  ]);
  const addNewTeamMember = (formData) => {
    const newTeamMember = {
      id: Date.now(),
      name: formData.name,
      position: formData.position,
      email: formData.email,
    };
    setTeams([...teams, newTeamMember]);
  }
  return (
    <div className="App">
      
      <h1>Team Members</h1>
      <TeamForm addNewTeamMember={addNewTeamMember} />
      <Teams teams={teams} />
    </div>
  );
}

export default App;
