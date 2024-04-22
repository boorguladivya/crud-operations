import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Home'
import Create from './Create'
import Data from './Data'
import View from './View'
import Edit from './Edit'
const r=createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        children:[{
            path:"Create",
            element:<Create/>
        },
        {
            path:"Data",
            element:<Data/>
        }
        ,
        {
            path:"View/:id",
            element:<View/>
        },
        {
            path:"Edit/:id",
            element:<Edit/>
        }
    ]
    }]);
    const App=()=>
    {
        return(
            <div><RouterProvider router={r}></RouterProvider></div>
        )
        
    }


export default  App;