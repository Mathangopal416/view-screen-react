import React from 'react'
import './ViewUserComponent.css';

const ViewUserComponent = ({items, deletefunction, handleEditClick}) => {
  return (
    <div className="ViewUsercomponent">
        <h2>View User</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>User Name</th>
                    <th className="action">Actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => 
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td className="action"><button className="underlines" onClick={() => handleEditClick(item.id)}>Edit</button>
                        <button onClick={() => deletefunction(item.id)} className="underlines">Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ViewUserComponent