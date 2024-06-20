import { useState, useContext} from "react";
import {useLoaderData, useNavigate} from "react-router-dom";
import Modal from "../../components/modal/modal";
import CreateUser from "../../componentsAdmin/users/CreateUser";
import UserContext from "../../context/userContext";
import { removeUser, updateUser } from "../../utils/fetch";
import './UserList.css'
import UserCardAdmin from "../../componentsAdmin/users/userCardAdmin";

const UserList = ({}) =>{
    const [users, setUsers] = useState(useLoaderData());
    const {user, loadingUser} = useContext(UserContext);
    const [creatingUser, setCreatingUser] = useState(false);
    const [selectUser, setSelectUser] = useState(null);
    const navigate = useNavigate();
    const handleRemove = async (user) => {
        const result = await removeUser(user._id);
        const filteredUsers = users.filter (usuario=> usuario._id !== user._id)
        setUsers(filteredUsers)
      }
      const handleCreate = async (user) => {
        console.log("CrearUser", user)
        if (user === null) {
          return;
        }
        setUsers([...users,user])
        setCreatingUser(false)
      }
      const handleUpdate = async(user) => {
        console.log("no me fio")
        //const result = await updateUser(user._id, user);
        setUsers(users.map(t=> t._id === user._id ? user : t))
        setSelectUser(null)
      }

      const handleUserClick = (user) =>{
        setSelectUser(user)
    };

    const usersHtml = users.map(user => (
        <article className="users-list-element" key={user._id} onClick={() => handleUserClick(user)}>
            <section className="users_container">
                    <UserCardAdmin key={user._id} user={user} onRemove={handleRemove} onUpdate={handleUpdate} />
            </section>
        </article>
    ));

    return (
        <div className="user-list">
                <>
                    {creatingUser ? (
                        <Modal onClose={() => setCreatingUser(false)}>
                            <CreateUser onCreate={handleCreate} />
                        </Modal>
                    ) : (
                        <button className="create-user-button" onClick={() => setCreatingUser(true)}>Nuevo Usuario</button>
                    )}
                </>
            <section className="users-list">
                {usersHtml}
            </section>
        </div>
    );
}

export default UserList;
