import React, {useState, useEffect} from 'react'

const [authToken, setAuthToken] = useState(null);

const login = async (username:string, password:string) => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const data = await response.json();
        setAuthToken(data.token); 
    } else {
        console.log('No Token')
    }
};



export default {};
