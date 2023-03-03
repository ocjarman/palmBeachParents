import React, { useEffect } from 'react';
import Login from './Login';
import { setUser } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { RootState } from '../store';
import RouterComponent from './RouterComponent';
import ResponsiveAppBar from './Navbar/ResponsiveAppBar';
import PageHero from './views/LandingPage/PageHero';

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

    const loggedIn = user.id !== '' && user.id !== null

    return (
        <div>
            {/* NAV BAR */}
            <ResponsiveAppBar/>
            {/* PAGE HERO */}
            <PageHero/>
            {!loggedIn && <Login/>}
            {/* ROUTER COMPONENT */}
            {loggedIn && <RouterComponent/>}
            {/* FOOTER */}
        </div>
    );
};

export default App;
