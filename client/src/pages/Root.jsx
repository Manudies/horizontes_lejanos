import "../App.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { deleteToken, getToken } from "../utils/local";
import { useEffect, useContext } from "react";
import UserContext from "../context/userContext";
import { fetchUserData } from "../utils/fetch";
const Root = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!getToken()) {
            navigate("/register");
        }
        getUserData();
    }, []);

    async function getUserData() {
        const data = await fetchUserData();
        if (data.error) {
            navigate("/register");
        }
        setUser(data.data);
    }
    async function handleLogout(e) {
        e.preventDefault();
        setUser(null);
        deleteToken();
        navigate("/register");
    }
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <img className="logo" src="/qtrello.png" alt="logo" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/logout" onClick={handleLogout}>Log Out </Link>
                    </li>
                </ul>
            </nav>

            <h1>Hello {user?.username}</h1>
            <Outlet />
        </div>
    )
};

export default Root;