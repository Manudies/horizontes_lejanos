import { useState } from "react";

const ManageUsers = ({ users, task = {}, onSubmit = null, onChange = null }) => {
    const [selectedUsers, setSelectedUsers] = useState(task?.users || []);
    console.log("selectedUsers", selectedUsers,task)
    const handleAddUser = (user) => {
        setSelectedUsers([...selectedUsers, user]);
        if (onChange) {
            onChange([...selectedUsers, user]);
        }
    }
    const handleRemoveUser = (user) => {
        setSelectedUsers(selectedUsers.filter(u => u._id !== user._id));
        if (onChange) {
            onChange(selectedUsers.filter(u => u._id !== user._id));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { ...task, users: selectedUsers };
        if (onSubmit) {
            onSubmit(newTask);
        }
    }
    function isSaved() {
        return task.users.every(u => selectedUsers.find(us => us._id === u._id)) && selectedUsers.every(u => task.users.find(us => us._id === u._id))
    }
    const availableUsers = users.filter(user => !selectedUsers.find(u => u._id === user._id));
    return (
        <div>
            <h2>Manage Users</h2>
            <h3>Selected Users</h3>
            <ul>
                {selectedUsers.map(user => (
                    <li key={user._id} onClick={() => handleRemoveUser(user)}>
                        {user.username}
                    </li>
                ))}
            </ul>
            <h3>Available Users</h3>
            <ul>
                {availableUsers.map(user => (
                    <li key={user._id} onClick={() => handleAddUser(user)}>
                        {user.username}
                    </li>
                ))}
            </ul>
            {onSubmit && !isSaved() &&
                <button onClick={handleSubmit} >Save</button>
            }
        </div>
    )


}

export default ManageUsers