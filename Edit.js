import React from 'react';
import './Edit.css';
const Edit = ({editUserMode, selectedUser, updateUser, setSelectedUser}) => {
  return (
    <div>
        <h2>Edit User</h2>
        <label htmlfor="name">Name</label><br></br>
        <input
        id='name'
        type='text'
        placeholder='name'
        required
        value={selectedUser[0].name}
        onChange={(e) => setSelectedUser([{...selectedUser[0],name:e.target.value}])}/><br></br>
        <label htmlFor="username">UserName</label><br></br>
        <input
        id='username'
        type='text'
        placeholder='username'
        required
        value={selectedUser[0].username}
        onChange={(e) => setSelectedUser([{...selectedUser[0],username:e.target.value}])}/><br></br>
        <button className="addusercomponents btn" onClick={() => updateUser(selectedUser[0].id)}>Update User</button>
        <button id="cancel" onClick={() => editUserMode()} type="button">Cancel</button>
        </div>
  )
}

export default Edit