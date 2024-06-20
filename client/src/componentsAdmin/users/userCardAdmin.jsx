import { useState, useContext, useEffect } from "react";
import "./userCardAdmin.css";
import Modal from "../../components/modal/modal";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../components/actionButton/actionButton";
import CreateUser from "./CreateUser";



const UserCard = ({ user, onRemove, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsModalOpen(true);
  }
  const handleUpdate = (newuser) => {
    onUpdate(newuser);
    setIsModalOpen(false);

  };


  return (
    <div className="user-card">
      <div className="user-card__content">
        <h2 className="user-card__username">{user.username}</h2>
        <div className="user-card__details">
          <p className="user-card__detail">Email: {user.email}</p>
        <div>
           <p className="user-card__detail">Rol: {user.role}</p>
        </div>
        </div>
        <div className="button_container">
        <ActionButton label="Editar" onClick={(openModal)}  className="user-card__button" />
        
        <ActionButton label="Borrar" onClick={()=>onRemove(user)} className="user-card__button" />
        </div>

        {isModalOpen && (
          <Modal
            isOpen={true}
            onClose={() => {
              setIsModalOpen(false);
            }}
          >
            <CreateUser user={user} onUpdate={handleUpdate}/>
               
          </Modal>
        )}
      </div>
    </div>
  );
};

export default UserCard;
