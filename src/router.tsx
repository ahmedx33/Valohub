import { createBrowserRouter } from "react-router-dom";
import RootComponent from "./components/root-component";
import App from "./App";


export const router = createBrowserRouter([

    {
        path: "/",
        element: <RootComponent />,
        children: [
            {
                index: true,
                element: <App />
            },

            {
                path: "/lol",
            }
        ],
    }
])