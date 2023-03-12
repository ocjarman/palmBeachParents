import React, { useEffect } from 'react';
import { setUser } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { RootState } from '../store';
import RouterComponent from './RouterComponent';
import ResponsiveAppBar from './Navbar/ResponsiveAppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Footer from './Footer/Footer'
import GetEvents from '../utils/Custom Hooks/GetEvents';
import { Outlet } from 'react-router-dom';
import PageHero from './PageHero/PageHero';

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

// custom hooks
 GetEvents()

    return (
        <ThemeProvider theme={theme}>
            <div>
                {/* NAV BAR */}
                <ResponsiveAppBar/>
                {/* ROUTER COMPONENT */}
                {/* <RouterComponent/> */}
                <Outlet/>
                {/* FOOTER */}
                {/* <Footer/> */}
            </div>
        </ThemeProvider>
    );
};

export default App;