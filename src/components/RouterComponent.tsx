import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Events from './views/Events/Events';
import Resources from './views/Resources/Resources';
import Profile from './views/Profile/Profile';
import Account from './views/Account';
import Dashboard from './views/Admin/Dashboard';
import PageHero from './PageHero/PageHero';
import Login from './Login';
import NewUserForm from './NewUserForm';
import AdminEvents from './views/Admin/AdminEvents';
import UsersAdminView from './views/Admin/UserAdminView';

const RouterComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<PageHero />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/newUser' element={<NewUserForm />} />
            <Route path='/events' element={<Events />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/account' element={<Account />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/events' element={<AdminEvents />} />
            <Route path='/dashboard/users' element={<UsersAdminView />} />

        </Routes>
    );
};

export default RouterComponent;