import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ListOfAcc from './acc/Accordion.jsx';
import InfiniteScroll from './infiniteScroll/InfiniteScroll';
import Comments from './NestedComments/Comments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/accordion',
    element: <ListOfAcc />,
  },
  {
    path: '/infinite-scroll',
    element: <InfiniteScroll />,
  },
  {
    path: '/nested-comments',
    element: <Comments />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
