import { useState } from "react"
import "./Users.css"
const Users = ({ project }) => {
    const [users, setUsers] = useState(project.users)
    const handleAddUser = (user) => {
        if (users.find(u => u._id === user._id)) {
            return;
        }
            
        setUsers([...users, user])
    }
    return (
        <section className="users">
            <p>Users:</p>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.username}{user.pendingInvite && " (pending invite)"}</li>
                ))}
            </ul>
            <InviteUser project={project} users={users} onEnd={handleAddUser}/>

        </section>
    )

}

export default Users