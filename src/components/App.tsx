import React, { useEffect } from 'react';
import { setUser } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
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


    return (
        <div>
            {/* NAV BAR */}
            <ResponsiveAppBar/>
            {/* {!loggedIn && <P/>} */}
            {/* ROUTER COMPONENT */}
            <RouterComponent/>
            {/* FOOTER */}
        </div>
    );
};

export default App;