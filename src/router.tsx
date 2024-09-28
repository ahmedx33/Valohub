import { createBrowserRouter } from "react-router-dom";
import RootComponent from "./components/root-component";
import App from "./App";
import LOLProductsPage from "./components/lol-products-page";
import ValoProductsPage from "./components/valo-products-page";


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
                element: <LOLProductsPage />
            },
            {
                path: "/valorant",
                element: <ValoProductsPage />
            }
        ],
    }
])