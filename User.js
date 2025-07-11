import React, { useState } from 'react';
import './User.css';
import AddUserComponent from './AddUserComponent';
import Edit from './Edit'
import ViewUserComponent from './ViewUserComponent';
 
const User = () => {
    const [newItems, setNewItems] = useState('')
    const [newUserName, setnewUserName] = useState('')
    const [editMode, setEditMode] = useState('')
    const [selectedUser, setselectedUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newItems);
        if(!newItems)
            return;
        addItem(newItems);
        console.log('submitted');
        // setnewUserName(null)
        // setNewItems(null)S

        setnewUserName('')
        setselectedUser('')
        setNewItems('')
        let username = document.getElementById("username");
        console.log(username.value)
        username.value="";
    }

    function updateUser(id) {
        const user = items.filter((item) => item.id===id)
        console.log(user)
        // if(user[0].id===id)
        User[0].name=selectedUser[0].name
        User[0].username=selectedUser[0].username
        setEditMode(false)
    }

    function editUserMode() {
        setEditMode(false)
        setnewUserName(null)
        setselectedUser(null)
        setNewItems(null)
    }

    const handleEditClick = (id) => {
        const X = items.filter((item) => item.id===id)
        setselectedUser(X)
        setEditMode(true)
    }

    const [items, setItems] = useState(
        [{
            id:1,
            name:"Mathan",
            username:"Mathan Gopal",
        },
        {
            id:2,
            name:"Priya",
            username: "Priya Dharshini",
        },
        {
            id:3,
            name:"Divya",
            username:"Divya Dharshini",
        },
    ]);

    const addItem = (items) => {
        const id=items.length?items[items.length-1].id+1:1
        const addNewItem={id:id,name:newItems, userName:newUserName}
        const listItems = [...items,addNewItem]
        setItems(listItems)
        // setnewUserName(null)
        // setNewItems(null)
        // setSelectedUser(null)
        }

        const deletefunction = (id) => {
            const itemlist = items.filter((item) =>
            item.id!=id)
            setItems(itemlist);
        }
  return (
    <div>
        <h1>Welcome to the Users Screen on the User Management </h1>
        <div className="container">
            <h1>User Component</h1>
            <div className="container 1">
                <div className="addUsercomponent">
                    {editMode?(
                        <Edit
                        editUserMode={editUserMode}
                        selectedUser={selectedUser}
                        updateUser={updateUser}
                        setSelectedUser={[]}
                        />
                    ):(
                        <AddUserComponent
                        newItems={newItems}
                        setNewItems={setNewItems}
                        handleSubmit={handleSubmit}
                        newUserName={newUserName}
                        setnewUserName={setnewUserName}
                        />
                    )}
                    </div>
                    <div className="viewUsercomponent">
                        <ViewUserComponent
                        items={items}
                        deletefunction={deletefunction}
                        handleEditClick={handleEditClick}
                         />

                </div>
            </div>
        </div>
    </div>
  )
}

export default User