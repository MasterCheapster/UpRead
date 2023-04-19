import './App.css';
import {createBrowserRouter,Route, Routes,Outlet,RouterProvider}
from 'react-router-dom';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Single from './components/pages/Single';
import Write from './components/pages/Write';
import './style.scss';

const Layout=()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },

      {
        path:'/write',
        element:<Write/>
      },

      {
        path:'/post/:id',
        element:<Single/>
      }

    ] 
  },

  {
    path:'/login',
    element:<Login/>
  },

  {
    path:'/register',
    element:<Register/>
  }

]);

function App() {
  return (
    <div className='App'>
    <div className='container'>
    <RouterProvider router={router} />
    </div>
    </div>
  );
}

export default App;
