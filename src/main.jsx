import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/root/root.jsx';
import Home from './components/Home/Home.jsx';
import Mobile from './components/Mobile/Mobile.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/User2/Users2.jsx';

const users2Promise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:'Mobile',Component:Mobile},
      {path:'Laptops',Component:Laptops},
      {path:'Users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:'Users2',
        element: <Suspense fallback={<h3>Loading...</h3>}>
            <Users2 users2Promise={users2Promise}></Users2>
        </Suspense>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
