import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Login from './components/views/Home/Login';
import NewUserForm from './components/views/Home/NewUserForm';
import Events from './components/views/Events/Events';
import Recommendations from './components/views/Recommendations/Recommendations';
import Profile from './components/views/User/Profile';
import Dashboard from './components/views/Admin/Dashboard';
import authTest from './utils/authTest';
import DashboardHome from './components/views/Admin/DashboardHome';
import AdminEvents from './components/views/Admin/AdminEvents';
import AdminUsers from './components/views/Admin/AdminUsers';
import NewEventForm from './components/views/Admin/NewEventForm';
import PageHero from './components/PageHero/PageHero';
import Account from './components/views/User/Account';
import Home from './components/views/Home/Home';
import adminTest from './utils/adminTest';
import EditEventForm from './components/views/Admin/EditEventForm';
import ThingsToDo from './components/views/ThingsToDo/ThingsToDo';
import Favorites from './components/views/User/Favorites';
import KidsAndFamily from './components/views/Recommendations/Categories/KidsAndFamily';
import HealthAndWellness from './components/views/Recommendations/Categories/HealthAndWellness';
import HomeLife from './components/views/Recommendations/Categories/HomeLife';


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
        loader: authTest,
      },
      {
        path: "recommendations",
        element: <Recommendations />,
        loader: authTest,
      },
      {
        path: "kidsAndFamily",
        element: <KidsAndFamily />,
        loader: authTest,

      },
      {
        path: "healthAndWellness",
        element: <HealthAndWellness />,
        loader: authTest,

      },
      {
        path: "homelife",
        element: <HomeLife />,
        loader: authTest,
      },
      {
        path: "thingsToDo",
        element: <ThingsToDo />,
        loader: authTest,
      },
      {
        path: "profile",
        element: <Profile />,
        loader: authTest,
      },
      {
        path: "favorites",
        element: <Favorites />,
        loader: authTest,
      },
      {
        path: "account",
        element: <Account />,
        loader: authTest,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: adminTest,
        errorElement: <ErrorBoundary />,
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
            path: "editEvent",
            element: <EditEventForm/>
          },
          {
            path: "addEvent",
            element: <NewEventForm/>
          },
          {
            path: "users",
            element: <AdminUsers />,
              },
          // {
          //   path: "users/:id",
          //   element: <UserAdminEdit />,
          //   errorElement: <ErrorBoundary />,
          // },
          {
            path: "events/addEvent",
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
