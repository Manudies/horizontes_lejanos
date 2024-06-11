import { useEffect, useState } from "react";
import {fetchUsers,inviteUser} from "../../utils/fetch";


const InviteUser = ({project,users,onEnd}) => {
    const [filteredUsers,setFilteredUsers] = useState([]);
    const [query,setQuery] = useState("");
    const [selectedUser,setSelectedUser] = useState(null);
    useEffect(()=>{
        if(query.length < 3) return;
        getUsers();
        

    },[query]);
    async function getUsers(){
        const result = await fetchUsers({query});
        const filtered = result.data.filter(user => !users.find(u => u._id === user._id));
        const firstUsers = filtered.slice(0,5);
        setFilteredUsers(firstUsers);
        const user = firstUsers.find(user => user.username === query || user.email === query);
        setSelectedUser(user);
    }
    function handleSelect(user){
        setSelectedUser(user);
        setQuery(user.username);
    }
    function handleInviteUser(e){
        e.preventDefault();
        if(selectedUser){
            inviteUser(project._id,selectedUser._id);
            onEnd(selectedUser);
            setSelectedUser(null);
            setQuery("");
        }
    }
    return(
        <section className="invite-user">
            <h3>Invite user</h3>
            <form action="">
                <label htmlFor="query" >Search by username or email</label>
                <input type="text" name="query" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                <ul>
                    {filteredUsers.map(user => (
                        <li className={user._id === selectedUser?._id? "selected":''} onClick={()=>handleSelect(user)} key={user._id}>{user.username} | {user.email}</li>
                    ))}
                </ul>
                <button type="button" disabled={!selectedUser} onClick={handleInviteUser}>Invite</button>
            </form>
        </section>
    )
}

export default InviteUser