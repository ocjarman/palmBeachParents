import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const onChange = (ev: { target: { name: any; value: any; }; }) => {
        setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
    };

    const loginWithToken = async () => {
        const token = window.localStorage.getItem('token');
        if (token) {
            const response = await axios.get('/api/auth', {
                headers: {
                    authorization: token
                }
            });
            dispatch(setUser(response.data))
        } else {
            console.log('no token')
        }
    };

    const attemptLogin = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // authenticating with backend
        try {
            const response = await axios.post('/api/auth', credentials);
            const token = response.data;
            // token is stable to current user
            console.log(token)
            window.localStorage.setItem('token', token);
            loginWithToken()
            navigate('/home')
        } catch {
            console.log('user not authenticated')
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={attemptLogin}>
                <input
                    placeholder='username'
                    value={credentials.username}
                    name='username'
                    onChange={onChange}
                />
                <input
                    placeholder='password'
                    name='password'
                    value={credentials.password}
                    onChange={onChange}
                />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
