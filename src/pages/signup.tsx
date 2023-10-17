
import React from 'react';
import Navbar from '../components/Navbar';
import React, { useState, SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { signup } from '../api/auth';

export default function Signup() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log(username, email, password);
            // const response = await signup(username, email, password);
            // console.log(response);

            setMessage('Successfully created a new account! Redirecting...');
            setTimeout(() => {
                navigate('/signin');
            }, 1500);
        } catch (err: any) {
            setMessage(err.message);
            setLoading(false);
        }
    }

    return (
        <div className="signup-container">
            {message && <p className="error-message">{message}</p>}
            <h1 className="signup-title">Sign Up</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    className="signup-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className="signup-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="signup-button" disabled={loading}>Signup</button>
            </form>
            <span className="signup-alt">
                {'Already a user? '}
                <Link to="/signin">Go to Sign-In</Link>
                {' instead.'}
            </span>
        </div>
    );
}
