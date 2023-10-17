import Navbar from '../components/Navbar';
import Header from '../components/Header';
import React, { useState, SyntheticEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { signin } from '../api/auth';
// import { AuthContext } from "../context/AuthContextComponent";

export default function Signin() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    // const { setIsLoggedIn, setUser } = useContext(AuthContext);

    const handleSubmit = async (evt: SyntheticEvent) => {
        evt.preventDefault();
        try {
            console.log(username, password);
            // const response = await signin(username, password);
            // console.log(response);
            // setIsLoggedIn(true);
            // setUser(response.user);
            navigate('/');
            // console.log(response);
        } catch (error) {
            console.error('Error during sign in: ', error);
        }
    }

    return (
        <div className="signin-container">
            <h1 className="signin-title">Sign In</h1>
            <form className="signin-form" onSubmit={handleSubmit}>
                <input
                    className="signin-input"
                    type="text"
                    placeholder="Username or email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="signin-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="signin-button">Signin</button>
            </form>
            <span className="signin-alt">
                {'Not a user? '}
                <Link to="/signup">Go to Signup</Link>
                {' instead.'}
            </span>
        </div>
    );
}

