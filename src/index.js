import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createBrowserRouter,
        RouterProvider
       } from 'react-router-dom';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';
import Project6 from './pages/Project6';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'project1',
    element: <Project1/>
  },
  {
    path: 'project2',
    element: <Project2/>
  },
  {
    path: 'project3',
    element: <Project3/>
  },
  {
    path: 'project4',
    element: <Project4/>
  },
  {
    path: 'project5',
    element: <Project5/>
  },
  {
    path: 'project6',
    element: <Project6/>
  }
])

ReactDOM.render(
  <RouterProvider router = {router}/>,
  document.getElementById('root')
);