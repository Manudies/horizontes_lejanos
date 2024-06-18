import "../App.css";
import { Outlet, useNavigate, useLoaderData } from "react-router-dom"

import { useState, useContext, useEffect } from "react";
import UserContext from "../context/userContext";


const Admin = () => {
    const {user, loadingUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect (() => {
        console.log ("usuario", user)
        if (loadingUser) return
        if (!user || user.role !== "admin") {
            navigate("/register"); 
        }
        
    }, [user,loadingUser]);
    return (
        <div>
            <Outlet />
        </div>
    )
};

export default Admin;
