import { useEffect, useState , useContext} from "react";
import { register, login } from "../../utils/fetch";
import { saveToken } from "../../utils/local";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import UserContext from "../../context/userContext";


import "./Register.css";

const initialUserData = {
    username: "",
    email: "",
    password: "",
    passwordRepeat: ""
};

const Register = ({}) => {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(initialUserData);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleUserData = (e) => {
        e.preventDefault();
        const data = e.target.value;
        const key = e.target.name;
        setUserData(userData => {
            return {
                ...userData,
                [key]: data
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result;
        if (isRegister) {
            result = await register(userData);
            if (!result.error) {
                setIsRegister(false);
                setError("user registered correctly");
            } else {
                setError(result.error);
            }
        } else {
            result = await login(userData);
            if (!result.error) {
                console.log("token", result);
                setError("login correct");
                setUser(result.user);
                saveToken(result.token);
                navigate("/");
            } else {
                setError(result.error);
            }
        }
    };

    return (
        <section className="register-login">
            <h2>{isRegister ? "Register" : "Login"}</h2>
            {error}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <FontAwesomeIcon icon={faUser} className="icon"/>
                    <input name="username" type="text" placeholder="Username" value={userData.username} onChange={handleUserData} />
                </div>
                {isRegister &&
                    <div className="input-group">
                        <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                        <input name="email" type="email" placeholder="Email" value={userData.email} onChange={handleUserData} />
                    </div>
                }
                <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="icon" />
                    <input name="password" type="password" placeholder="Password" value={userData.password} onChange={handleUserData} />
                </div>
                {isRegister &&
                    <div className="input-group">
                        <FontAwesomeIcon icon={faLock} className="icon" />
                        <input name="passwordRepeat" type="password" placeholder="Repeat Password" value={userData.passwordRepeat} onChange={handleUserData} />
                    </div>
                }
                <button>{isRegister ? "Register" : "Login"}</button>
            </form>
            <button onClick={() => setIsRegister(register => !register)}>{isRegister ? "Go to Login" : "Go to Register"}</button>
        </section>
    );
};

export default Register;