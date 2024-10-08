import { createBrowserRouter, defer } from "react-router-dom";
import RootComponent from "./components/root-component";
import App from "./App";
import LOLProductsPage from "./components/lol-products-page";
import ValoProductsPage from "./components/valo-products-page";
import { getCategegoriesWithListProducts } from "./api/categories-with-products/index.api";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootComponent />,

        children: [
            {
                index: true,
                element: <App />,
                loader: async () => {
                    const categoriesPromise: Promise<Category[]> = getCategegoriesWithListProducts();
                    return defer({ categoriesPromise });
                }
            },
            {
                path: "/lol",
                element: <LOLProductsPage />,
                loader: async () => {
                    const categoriesPromise: Promise<Category[]> = getCategegoriesWithListProducts();
                    return defer({ categoriesPromise });
                }
            },
            {
                path: "/valorant",
                element: <ValoProductsPage />,
                loader: async () => {
                    const categoriesPromise: Promise<Category[]> = getCategegoriesWithListProducts();
                    return defer({ categoriesPromise });
                }
            }
        ],
    }
]);
