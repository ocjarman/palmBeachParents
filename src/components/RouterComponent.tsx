import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Events from './views/Events';
import Resources from './views/Resources';
import Profile from './views/Profile';
import Account from './views/Account';
import Dashboard from './views/Dashboard';
import PageHero from './PageHero/PageHero';
import Login from './Login';

const RouterComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<PageHero />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/newUser' element={<NewUserForm />} /> */}
            <Route path='/events' element={<Events />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/account' element={<Account />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    );
};

export default RouterComponent;