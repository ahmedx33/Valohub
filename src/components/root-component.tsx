import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./layouts/footer";
import Header from "./layouts/header";

export default function RootComponent() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    )
}
