import React from 'react';

const Team = props => {
    console.log('My first console props', props);

    return (
        <div className='team-list'>
            {props.teams.map(team => (
                <div className='team' key={team.id}>
                    <h2>{team.name}</h2>
                    <h3>{team.position}</h3>
                    <h3>{team.email}</h3>
                    </div>
            ))}
        </div>
    );
};
export default Team;