import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Home } from '@mui/icons-material';
import Login from './components/Login';
import NewUserForm from './components/NewUserForm';
import Events from './components/views/Events/Events';
import Resources from './components/views/Resources/Resources';
import Profile from './components/views/Profile/Profile';
import Dashboard from './components/views/Admin/Dashboard';
import authTest from './utils/authTest';
import DashboardHome from './components/views/Admin/DashboardHome';
import AdminEvents from './components/views/Admin/AdminEvents';
import UsersAdminView from './components/views/Admin/UserAdminView';
import NewEventForm from './components/views/Admin/NewEventForm';
import EditEventForm from './components/views/Admin/EditEventForm';
import PageHero from './components/PageHero/PageHero';
import Account from './components/views/Account';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <PageHero />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "home",
        element: <Home />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "newUser",
        element: <NewUserForm />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "events",
        element: <Events />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "resources",
        element: <Resources />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "profile",
        element: <Profile />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "account",
        element: <Account />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        errorElement: <ErrorBoundary />,
        loader: authTest,
        children: [
          {
            path: "",
            element: <DashboardHome />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "events",
            element: <AdminEvents />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "users",
            element: <UsersAdminView />,
            errorElement: <ErrorBoundary />,
          },
          // {
          //   path: "users/:id",
          //   element: <UserAdminEdit />,
          //   errorElement: <ErrorBoundary />,
          // },
          {
            path: "events/add",
            element: <NewEventForm />,
            errorElement: <ErrorBoundary />,
          },
          // {
          //   path: "events/:id",
          //   element: <EditEventForm />,
          //   errorElement: <ErrorBoundary />,
          // },
        ],
      },

    ],
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
