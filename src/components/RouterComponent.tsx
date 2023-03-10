import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/User/Home';
import Events from './views/Events/Events';
import Resources from './views/Resources/Resources';
import Profile from './views/Profile/Profile';
import Account from './views/User/Account';
import Dashboard from './views/Admin/Dashboard';
import PageHero from './PageHero/PageHero';
import Login from './Login';
import NewUserForm from './NewUserForm';
import AdminEvents from './views/Admin/AdminEvents';
import UsersAdminView from './views/Admin/UserAdminView';
import NewEventForm from './views/Admin/NewEventForm';
import EditEventForm from './views/Admin/EditEventForm';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import DashboardHome from './views/Admin/DashboardHome';

const RouterComponent = () => {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    const user = useSelector((state: RootState) => state.user.user);
    return (
        <Routes>
            {/* everyone has access to these pages */}
            <Route path='/' element={<PageHero />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/newUser' element={<NewUserForm />} />
            <Route path='/events' element={<Events />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/*' element={<ErrorBoundary />} />
            <Route path='/404' element={<ErrorBoundary/>}/>
            {/* only if you are logged in do you have access to... */}
            {isLoggedIn && (
                <>
                <Route path='/home' element={<Home />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/account' element={<Account />}/>
                </>
            )}
            {isLoggedIn && user.isAdmin && (
                <>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/dashboard/home' element={<DashboardHome />} />
                <Route path='/dashboard/events' element={<AdminEvents />} />
                <Route path='/dashboard/events/add' element={<NewEventForm />} />
                <Route path='/dashboard/events/edit' element={<EditEventForm />} />
                <Route path='/dashboard/users' element={<UsersAdminView />} />
                </>
            )}
        </Routes>
    );
};

export default RouterComponent;