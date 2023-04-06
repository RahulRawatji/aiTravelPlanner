import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import LandingPage from "../components/LandingPage";
import FilterPage from "../components/FilterPage";
import Results from "../components/Results";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<LandingPage/>
            },
            {
                path:'/filter',
                element:<FilterPage/>
            },
            {
                path:"/result",
                element:<Results/>
            }
        ]

    }
]);

export default router;