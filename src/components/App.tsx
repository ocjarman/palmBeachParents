import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import { setUser } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { RootState } from '../store';

const App = () => {
    const { user } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const loginWithToken = async () => {
        const token = window.localStorage.getItem('token');
        if (token) {
            const response = await axios.get('/api/auth', {
                headers: {
                  authorization: `Bearer ${token}`,
                },
              });
              dispatch(setUser(response.data));
            }
          } catch (error) {
            console.error(error);
          }
        };
        loginWithToken();
      }, [dispatch]);

    if (!user.id) return <Login />
    return (
        <div>
            <h1>Welcome, {user.firstName} !</h1>
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
