import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import CURDData from './Pages/CURD-Data';
import Filtering from './Pages/Filtering';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Filtering/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <RouterProvider router={router} />
);

