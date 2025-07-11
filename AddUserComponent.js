import React from 'react'
import './AddUserComponent.css'

const AddUserComponent = ({newItems, setNewItems, handleSubmit, newUserName, setnewUserName}) => {
  return (
    <div>
      <h2>Add User</h2>
      <label htmlFor="name">Name</label><br></br>
      <input
      id="name"
      type="text"
      placeholder="name"
      required 
      value={newItems}
      onChange={(e) => setNewItems(e.target.value)}/><br></br>
      <label htmlFor="username">UserName</label><br></br>
      <input
      id="username"
      type="text"
      placeholder="username"
      required
      value={newUserName}
      onChange={(e) => setnewUserName(e.target.value)}/><br></br>
      <button className="addusercomponents btn" onClick={handleSubmit}>Add New User</button>



    </div>
  )
}

export default AddUserComponent