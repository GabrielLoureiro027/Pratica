import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Cadastro from "./pages/cadastro";
import Layout from "./components/Layout/layout";

// Array de links

export const router = createBrowserRouter([
{
    element:<Layout/>,
    children: [  {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },]
}
]);
