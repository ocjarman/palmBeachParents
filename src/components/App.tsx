import React, { useEffect } from 'react';
import Login from './Login';
import { setUser } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { RootState } from '../store';
import RouterComponent from './RouterComponent';
import ResponsiveAppBar from './Navbar/ResponsiveAppBar';

const App = () => {
    const { user } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const loginWithToken = async () => {
        const token = window.localStorage.getItem('token');
        if (token) {
            const response = await axios.get('/api/auth', {
                headers: {
                    authorization: token
                }
            });

            dispatch(setUser(response.data))
        }
    };

    useEffect(() => {
        loginWithToken();
    }, []);

    if (!user.id) return <Login />
    return (
        <div>
            {/* NAV BAR */}
            <nav>
                
            </nav>
            <ResponsiveAppBar/>
            {/* PAGE HERO */}
            <h1>Palm Beach Parents</h1>
            <h2>Resource hub for families in the South Florida Region</h2>
            {/* ROUTER COMPONENT */}
            <RouterComponent/>
            {/* FOOTER */}
        </div>
    );
};

export default App;
