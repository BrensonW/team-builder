import React, { useState } from 'react';

const TeamForm = props => {
    console.log('props from TeamForm', props);
    const [teams, setTeams] = useState({
        name: '',
        position: '',
        email: '',
    });

    const changeHandler = (e) => {
        setTeams({
            ...teams,
            [e.target.name]: e.target.value
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewTeamMember(teams);
        setTeams({ name: '', position: '', email: ''});
    };

    return (
        <form>
            <label gtmlForm='name'>Name</label>
            <input 
            placeholder='Enter Name'
            type='text'
            name='name'
            value={teams.name} onChange={changeHandler} />

            <br/>

            <label htmlForm='email'>Email</label>
            < input
            placeholder='Enter Email'
            type='text'
            name='email'
            value={teams.email} onChange={changeHandler} />

            <br/>

            <button type='submit' onClick={submitForm}>Add New Member</button>
        </form>
    )
}
export default TeamForm;