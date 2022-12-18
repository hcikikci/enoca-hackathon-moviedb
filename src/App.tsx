import React, {useEffect} from 'react';
import Search from "./Components/Pages/Search";
import {useAppDispatch} from "./app/hooks";
import {getPopular} from "./features/items/getPopular";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useLocation, useNavigate, useRoutes} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar";
import Details from "./Components/Pages/Details";
import {getNowPlaying} from "./features/items/getNowPlaying";
import {getUpcoming} from "./features/items/getUpcoming";
import {getTopRated} from "./features/items/getTopRated";

function App() {

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getPopular())
        dispatch(getNowPlaying())
        dispatch(getUpcoming())
        dispatch(getTopRated())
    },[])

    let routes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/search",
            element: <Search />,
        },
        {
            path: "/details/:id",
            element: <Details/>
        }
    ])
  return (
    <div className="bg-dark-blue w-full pb-36">
        <div className="">{routes}</div>


        <Navbar/>
        <ToastContainer />

    </div>
  );
}

export default App;
