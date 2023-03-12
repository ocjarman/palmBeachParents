import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
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


const userTokenTestTrue = async () => {
  try {
    const token = window.localStorage.getItem("token");
    if (token) throw redirect("/home");
    return true;
  } catch (error) {
    return false;
  }
};

const userTokenTestFalse = async () => {
  try {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      throw redirect("/");
    }
    return true;
  } catch (error) {
    return false;
  }
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <PageHero />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "newUser",
        element: <NewUserForm />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: authTest,
        children: [
          {
            path: "",
            element: <DashboardHome />,
              },
          {
            path: "events",
            element: <AdminEvents />,
              },
          {
            path: "users",
            element: <UsersAdminView />,
              },
          // {
          //   path: "users/:id",
          //   element: <UserAdminEdit />,
          //   errorElement: <ErrorBoundary />,
          // },
          {
            path: "events/add",
            element: <NewEventForm />,
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
