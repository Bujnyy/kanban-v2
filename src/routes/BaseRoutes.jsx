import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import SignIn from '../views/SignIn/SignIn';
import SignUp from '../views/SignUp/SignUp';
import User from '../views/User/User';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/user',
    element: (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    ),
  },
]);

const BaseRoutes = () => {
  return <RouterProvider router={router} />;
};

export default BaseRoutes;
