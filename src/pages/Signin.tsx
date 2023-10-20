import Navbar from '../components/Navbar';
import Header from '../components/Header';
import React, { useState, SyntheticEvent, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../context/AuthContext'
import Profile from './Profile'

export default function Signin() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        if (username) {
            console.log(username)
        }
        if (password) {
            console.log(password)
        }
    }, [username, password])

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

    // if(username){
    //     <navigate to={`/:${username}`}/>
    // }

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

