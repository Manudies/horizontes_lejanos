import Modal from "../modal/Modal"
import { useState } from "react";
import "./Confirm.css";
const Confirm = ({ title,className, message, onConfirm, onCancel }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!isModalOpen) return (
        <button className={className} onClick={() => setIsModalOpen(true)}>{title}</button>
    )
    function handleCancel() {
        setIsModalOpen(false);
        onCancel();
    }
    function handleConfirm() {
        setIsModalOpen(false);
        onConfirm();
    }
    return (
        <Modal onClose={handleCancel}>
            <div className="absolute center">  
                <h3>{title}</h3>
                <p>{message}</p>
                <section className="buttons">
                    <button className="confirm" onClick={handleConfirm}>Confirm</button>
                    <button className="cancel" onClick={handleCancel}>Cancel</button>
                </section>
            </div>
        </Modal>
    )
}
export default Confirm