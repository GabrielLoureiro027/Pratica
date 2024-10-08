import { createBrowserRouter } from "react-router-dom";

import Layout from "./Components/Layout/Layout"; 
import Home from "./Pages/Home";

export const router = createBrowserRouter ([
    {
    element: <Layout/>,
    children: [ {
        path: path.Home,
        element: <Home/>
    },]
}
]);