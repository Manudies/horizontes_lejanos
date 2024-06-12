import "../App.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {getToken} from "../utils/local";
import { useEffect } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!getToken()) {
            navigate("/register");
        }
    }, [])
    return (
        <div>
            
            <nav>
                <Navbar />
            </nav>
            <h1>Bienvenido a Horizontes lejanos</h1>
            <Outlet />
            <Footer/>
        </div>
    )
};

export default Root;