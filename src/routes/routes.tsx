import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            // Add your routes here
        ],
    }
]);

export default routes;