import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

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

  const loginWithToken = useCallback(async () => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const response = await axios.get("/api/auth", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        dispatch(setUser(response.data));

        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, navigate]);

  const attemptLogin = async (event: BaseSyntheticEvent) => {
    try {
      event.preventDefault();
      const normalizeCredentials = {
        ...credentials,
        username: credentials.username.toLowerCase(),
      };
      const response = await axios.post("/api/auth", normalizeCredentials);
      const token = response.data;
      window.localStorage.setItem("token", token);

      loginWithToken();
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.localStorage.getItem("token") && loginWithToken();
  });

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
