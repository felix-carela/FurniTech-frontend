import Navbar from '../components/Navbar';
import Header from '../components/Header';
import React, { useState, SyntheticEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../context/AuthContext'

export default function Signin() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();

    const { login } = useAuth()

    const handleSubmit = async (evt: SyntheticEvent) => {
        evt.preventDefault();
        try {
            console.log(username, password);
            const response = await login(username, password);
            navigate('/');
            console.log(response);
        } catch (error) {
            console.error('Error during sign in: ', error);
        }
    }

    if(username){
        return (
            <div> `You are already signed in, ${username}`</div>
        )
    }

   
    return (
        <div className="container">
            <div className="card">
                <h3 className="login">Log in</h3>
                <div className="inputBox">
                    <input
                        type="text"
                        required
                        placeholder="Username or email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <span className="user">USERNAME</span>
                </div>

                <div className="inputBox">
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>Password</span>
                </div>

                <button className="enter" onClick={handleSubmit}>Enter</button>
                {message && <p className="error-message">{message}</p>}
              <span className="signin-alt">
                {'Not a user? '}
                <Link to="/signup">Go to Signup</Link>
                {' instead.'}
            </span>
            </div>
        </div>
    );
}