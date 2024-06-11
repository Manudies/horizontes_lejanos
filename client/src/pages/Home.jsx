import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Invitations from "../components/invitation/Invitations";

const Home = () => {
    const [invitations,setInvitations]  = useState(useLoaderData());
    function handleRemove(invitation){
        const {sent,received} = invitations;
        setInvitations({sent: sent.filter(inv => inv._id !== invitation._id),received: received.filter(inv => inv._id !== invitation._id)});
    }
    return (
        <div>
            <Invitations invitations={invitations} onRemove={handleRemove} />
        </div>
    );
};
export default Home