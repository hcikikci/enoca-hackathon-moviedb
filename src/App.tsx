import React, {useEffect} from 'react';
import Items from "./Components/Pages/Items";
import {useAppDispatch} from "./app/hooks";
import {getItems} from "./features/items/getItems";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useLocation, useNavigate, useRoutes} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar";

function App() {

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getItems())
    },[])

    let routes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/items",
            element: <Items />,
        },
    ])
  return (
    <div className="App">
        <div>{routes}</div>
        <Navbar/>
        <ToastContainer />
    </div>
  );
}

export default App;
